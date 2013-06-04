app.utils.store.question = app.utils.store.extend({
  populate: function(){
    this.data[0] = { id: 1, text: "Um incrível final de semana a dois é...", active: true, selected:null };
    this.data[1] = { id: 2, text: "Qual é a música perfeita para o Dia dos Namorados?", active: true, selected:null };
    this.data[2] = { id: 3, text: "Qual estação do ano combina mais com você?", active: true, selected:null };
    this.data[3] = { id: 4, text: "Escolha a sua sobremesa preferida.", active: true, selected:null };
    this.data[4] = { id: 5, text: "Em uma tarde de sábado, qual o tipo de filme você gosta de assistir?", active: true, selected:null };
    this.data[5] = { id: 6, text: "Qual destes animais de estimação você prefere?", active: true, selected:null };
    this.data[6] = { id: 7, text: "Como você conheceu o seu namorado?", active: true, selected:null };
    this.data[7] = { id: 8, text: "Qual visual é mais atraente em um homem?", active: true, selected:null };
    this.data[8] = { id: 9, text: "Como você aproveita seus momentos de lazer?", active: true, selected:null };
    this.data[9] = { id: 10, text: "Qual dos esportes abaixo você mais gosta?", active: true, selected:null };
    //this.data[10] = { id: 11, text: "Você roe as unhas?", active: false, selected:null };
    //this.data[11] = { id: 12, text: "Você esta apaixonada?", active: false, selected:null };
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
