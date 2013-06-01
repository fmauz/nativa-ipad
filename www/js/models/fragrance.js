app.utils.store.fragrance = app.utils.store.extend({
  populate: function(){
    this.data[0] = { id:1, name: "Perfume de Verbena", description: "Lorem ipsum Aute cillum deserunt ad officia officia ut aliquip ut ut in sunt laboris tempor et occaecat non aute.", start_score: 0, end_score: 99 }
    this.data[1] = { id:2, name: "Perfume de Guaraná", description: "Lorem ipsum Aute cillum deserunt ad officia officia ut aliquip ut ut in sunt laboris tempor et occaecat non aute.", start_score: 100, end_score: 199 }
    this.data[2] = { id:3, name: "Perfume de Ameixa", description: "Lorem ipsum Aute cillum deserunt ad officia officia ut aliquip ut ut in sunt laboris tempor et occaecat non aute.", start_score: 200, end_score: 299 }
    this.data[3] = { id:4, name: "Perfume de Blueberry", description: "Lorem ipsum Aute cillum deserunt ad officia officia ut aliquip ut ut in sunt laboris tempor et occaecat non aute.", start_score: 300, end_score:399 }
    this.data[4] = { id:5, name: "Perfume de Açaí", description: "Lorem ipsum Aute cillum deserunt ad officia officia ut aliquip ut ut in sunt laboris tempor et occaecat non aute.", start_score: 400, end_score:499 }
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