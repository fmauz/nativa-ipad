app.utils.store.answer = app.utils.store.extend({
  populate: function(){
    var count=1;    
    for (var p = 1; p <= 12; p++) {
      for (var r = 1; r <= 5; r++) {
        this.data[count] = { id: count, text: "Resposta "+r, score: r*9, questionId: p };
        count+=1;
      };
    };
  }
});

app.models.Answer = Backbone.Model.extend({
  defaults: function(){
    return {
      text: "text is null...",
      score: 0,
      questionId: 0
    }
  }
});

app.models.AnswerCollection = Backbone.Collection.extend({
  model: app.models.Answer,
  store: app.utils.store.answer,
  findByQuestion: function(question, callback){
    var data = _.where(this.store.data, { questionId: question.id } );
    callback(data);
  }
});
