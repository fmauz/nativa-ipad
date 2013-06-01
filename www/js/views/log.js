app.views.Log = Backbone.View.extend({
  el: $("#content"),
  events: {
    "click .backHome": "back"
  },
  back: function(evt){
    evt.preventDefault();
    this.goTo("");
  },
  initialize: function(){
    this.template = _.template( app.utils.templateLoader.get('log-page') );
    this.render();
  },
  render: function(){
    $(this.el).html( this.template({ items: this.model }) );
    return this;
  }
});