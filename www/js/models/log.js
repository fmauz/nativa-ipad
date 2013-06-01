app.utils.store.log = app.utils.store.extend({
  populate: function(){
    console.log( app.db );
    app.db.transaction(function(tx){
      tx.executeSql("CREATE TABLE IF NOT EXISTS Log (data text)");
    });
  }
});

app.models.Log = Backbone.Model.extend({
  defaults: function(){
    return {
      started_at: new Date,
      ended_at: new Date,
      score: 0
    };
  },
  save: function(attr, options){
    var $this=this;
    app.db.transaction(function(tx){
      var hObj = escape( JSON.stringify($this.toJSON()) );
      var sqlObj = "INSERT INTO Log (data) VALUES ('"+hObj+"')";
      tx.executeSql( sqlObj );
      options.success(this);
    });
  }
});

app.models.LogCollection = Backbone.Collection.extend({
  model: app.models.Log,
  store: app.utils.store.log,
  fetch: function(options){
    app.db.transaction(function(tx){
      tx.executeSql("SELECT data FROM Log", [], function(tx, results){
        var logs = [];
        for (var i = 0; i < results.rows.length; i++) {
          var row = results.rows.item(i);
          var data = JSON.parse( unescape( row.data ) );
          logs.push( data );
        };
        options.success( logs );
      });
    });
  }
});