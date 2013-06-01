var app = {
  models: {},
  views: {},
  utils: {
    store : {}
  },
  db: {},
  totalQuestion: 10,
  receivedEvent: function(id) {
    this.utils.templateLoader.load([ 'question-page', 'dashboard-page', 'log-page', 'finish-page' ], function(){
      Backbone.history.start();
    });
  },
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  initialize: function(){
    this.db = window.openDatabase("quiz-db", "1.0", "Quiz Db", 5*1024*1024);
    this.utils.store.populate();
    this.bindEvents();
  }
};

app.utils.formatDate = function ( d, f ) {
    return f.replace( // Replace all tokens
        /{(.+?)(?::(.*?))?}/g, // {<part>:<padding>}
        function (
            v, // Matched string (ignored, used as local var)
            c, // Date component name
            p // Padding amount
            ) {
            for(v = d["get" + c]() // Execute date component getter
                + /h/.test(c) // Increment Mont(h) components by 1
                + ""; // Cast to String
                v.length < p; // While padding needed, 
                v = 0 + v); // pad with zeros
            return v // Return padded result
        })
  }

  app.utils.store.populate = function(){
    var keys = $(Object.keys(app.utils.store)).not(["populate", "extend"]).get();
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; 
      var object = app.utils.store[ key ];
      object.populate();
    };
  }

  app.utils.store.extend = function(options){
    var object = {
      data: [],
      findById: function(){

      }
    };
    return $.extend({}, object, options)
  }

  app.utils.templateLoader = {
    templates: {},
    load: function(names, callback){
      var deferreds = [],
      self = this;

      $.each(names, function(index, name){
        deferreds.push( $.get('templates/'+name+'.html', function(data){
          self.templates[name] = data;
        }));
      });

      $.when.apply( null, deferreds ).done( callback );
    },
    get: function( name ){
      return this.templates[ name ];
    }
  }

  Backbone.sync = function( method, model, options ){
    console.log( method );
    if( method == "read"){
      var data = this.store.data;

      if( typeof options.ids  != "undefined" ){
        data = _.filter( data, function(item){
          return _.contains(options.ids, item.id);
        });
      }
      if( typeof options.random != "undefined" ) data = _.shuffle( data );
      if( typeof options.limit != "undefined" ) data = data.slice(0, options.limit );
      if( typeof options.range != "undefined" ){
        data = _.filter( data, function(item){
          var field1 = options.range.fields[0],
          field2 = options.range.fields[1];
          return item[field1] <= options.range.value && item[field2] >= options.range.value;
        });
      }
      if( typeof options.success == "function") options.success( data );

    }else if( method == "create"){
      app.models.LogCollection.store.data.push( model.toJSON() );
      options.success( model );
    }
  };

