app.views.FinishGame = Backbone.View.extend({
  el: $("#content"),
  score: 0,
  events: {
    "click .playAgain" : "playAgain",
    "click .exit": "exit"
  },
  playAgain: function(evt){
    evt.preventDefault();
    this.goTo("play");
  },
  exit: function(evt){
    evt.preventDefault();
    this.goTo("");
  },
  initialize: function(){
    this.template = _.template( app.utils.templateLoader.get('finish-page') );
  },
  content_html: function( ){
    var fragrance = this.model.models[0].toJSON();
    return this.template({ totalPontos: this.score, fragrance: fragrance });
  }
});