app.utils.store.fragrance = app.utils.store.extend({
  populate: function(){
    this.data[0] = { id:1, name: "RESULTADO HIBISCO", description: "Lorem ipsum ", start_score: 10, end_score: 14 }
    this.data[1] = { id:2, name: "RESULTADO VIOLETA", description: "non aute.", start_score: 15, end_score: 20 }
    this.data[2] = { id:3, name: "RESULTADO AMORA", description: "t non aute.", start_score: 21, end_score: 25 }
    this.data[3] = { id:4, name: "RESULTADO AÇAÍ", description: "t non aute.", start_score: 26, end_score:30 }
    this.data[4] = { id:5, name: "RESULTADO AMEIXA", description: "t non aute.", start_score: 31, end_score:35 }
    this.data[5] = { id:6, name: "RESULTADO VERBENA", description: "t non aute.", start_score: 36, end_score:40 }
  }
});

app.models.Fragrance = Backbone.Model.extend({
  defaults : function(){
    return {
      name: "",
      description: "",
      start_score: 0,
      end_score: 0
    };
  }
});

app.models.FragranceCollection = Backbone.Collection.extend({
  model: app.models.Fragrance,
  store: app.utils.store.fragrance
});
