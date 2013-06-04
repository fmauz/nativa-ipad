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
     $(document).bind('touchmove', false);
    this.template = _.template( app.utils.templateLoader.get('dashboard-page') );
  },
  content_html: function(){
    return this.template({ items: this.model });
  }
});
