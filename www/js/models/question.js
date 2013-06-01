app.utils.store.question = app.utils.store.extend({
  populate: function(){
    this.data[0] = { id: 1, text: "Com o que você não pode sair de casa sem?", active: true, selected:null };
    this.data[1] = { id: 2, text: "Qual sua flor favorita?", active: true, selected:null };
    this.data[2] = { id: 3, text: "Loja de roupa favorita?", active: true, selected:null };
    this.data[3] = { id: 4, text: "Perfume favorito?", active: true, selected:null };
    this.data[4] = { id: 5, text: "Saltos ou rasteiras?", active: true, selected:null };
    this.data[5] = { id: 6, text: "Qual sua cor favorita?", active: true, selected:null };
    this.data[6] = { id: 7, text: "Você bebe energético?", active: true, selected:null };
    this.data[7] = { id: 8, text: "Qual seu hidratante favorito?", active: true, selected:null };
    this.data[8] = { id: 9, text: "Você pretende casar?", active: true, selected:null };
    this.data[9] = { id: 10, text: "Você se irrita fácil?", active: true, selected:null };
    this.data[10] = { id: 11, text: "Você roe as unhas?", active: true, selected:null };
    this.data[11] = { id: 12, text: "Você esta apaixonada?", active: true, selected:null };
  }
});

app.models.Question = Backbone.Model.extend({
  defaults: function(){
    return {
      text: "text is null...",
      active: false
    }
  }
});

app.models.QuestionCollection = Backbone.Collection.extend({
  model: app.models.Answer,
  store: app.utils.store.question
});