var backbone_router = Backbone.Router.extend({
  routes: { 
    "play": "playQuiz", 
    "log": "showLog",
    "finish": "finishQuiz",
    "*actions": "defaultRoute"
  },
  stopZombies: function(view){
    if( typeof view == "object"){
      view.undelegateEvents();
      $(view.el).empty();
    }
  }
});

app.Router = new backbone_router;

app.Router.on("route:defaultRoute", function(actions){
  app.currentView = new app.views.Dashboard();
});

app.Router.on("route:playQuiz", function(){
  var questions = new app.models.QuestionCollection();
  questions.fetch({ limit: app.totalQuestion, random: true, success: function(data){
    app.currentView = new app.views.Game({ model: data })
  }});
});

app.Router.on("route:finishQuiz", function(){
  if( !app.currentView || !app.currentView.prevQuestions || app.currentView.prevQuestions.length == 0 ){
    app.Router.navigate( "", true );
  }else{
    var answerIds = _.map( app.currentView.prevQuestions, function(question){
      return question.get("selected");
    });
    var answers = new app.models.AnswerCollection();
    answers.fetch({ ids : answerIds, success: function(data){
      var start_time = app.currentView.start_time,
          end_time = app.currentView.end_time,
          totalScore = 0;

      data = _.map(data.models, function(item){ return item.toJSON() });
      var scores = _.pluck( data, "score" );
      for (var i = 0; i < scores.length; i++) {
        totalScore += scores[i];
      };

      var log = new app.models.Log({ started_at: start_time, ended_at: end_time, score: totalScore});
      log.save({}, { success: function(model){
        app.currentView = new app.views.FinishGame({ model: data });
        app.currentView.score = totalScore;
        app.currentView.render();
      }});

    }});
  }
})

app.Router.on("route:showLog", function(){
  var logs = new app.models.LogCollection();
  logs.fetch({ success: function(data){
    app.currentView = new app.views.Log({ model : data });
  }});
});

Backbone.View.prototype.goTo = function(loc){
  app.Router.stopZombies( app.currentView );
  app.Router.navigate( loc, true );
};