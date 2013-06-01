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
  render: function( ){
    var fragrances = new app.models.FragranceCollection();
    var $this = this;
    fragrances.fetch({ range: { value: this.score, fields: ["start_score", "end_score"] }, success: function( model ){
      var fragrance = model.models[0].toJSON();
       $($this.el).html( $this.template({ totalPontos: $this.score, fragrance: fragrance }) );
    }});
  }
});