app.views.Dashboard = Backbone.View.extend({
  el: $('#content'),
  events: {
    'click .playGame': 'play',
    'click .showLog' : 'log'
  },
  play: function(evt){
    evt.preventDefault();
    this.goTo("play", true);
  },
  log: function(evt){
    evt.preventDefault();
    this.goTo("log", true);
  },
  initialize: function(){
    this.template = _.template( app.utils.templateLoader.get('dashboard-page') );
    this.render();
  },
  render: function(){
    $(this.el).html( this.template() );
  }
});