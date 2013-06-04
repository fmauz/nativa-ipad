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
  },
  content_html: function(){
    return this.template({ items: this.model });
  },
  after_render: function(){
       $(document).unbind('touchmove');
  }
});
