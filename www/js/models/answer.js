app.utils.store.answer = app.utils.store.extend({
  populate: function(){

    this.data[0] = { id: 1, text: "Curtir o friozinho da montanha.", score: 1, questionId: 1 };
    this.data[1] = { id: 2, text: "Ficar ao sol em uma praia com belezas naturais.", score: 3, questionId: 1 };
    this.data[2] = { id: 3, text: "Aproveitar as baladas da cidade e dançar a noite toda.", score: 4, questionId: 1 };
    this.data[3] = { id: 4, text: "Viver uma aventura em meio a natureza.", score: 2, questionId: 1 };
    this.data[4] = { id: 5, text: "Uma melodia que mexa com você.", score: 3, questionId: 2 };
    this.data[5] = { id: 6, text: "Músicas cheias de ritmo pra você dançar pra ele.", score: 4, questionId: 2 };
    this.data[6] = { id: 7, text: "As baladas que sempre têm a palavra amor na letra.", score: 1, questionId: 2 };
    this.data[7] = { id: 8, text: "Música instrumental para vocês curtirem juntos.", score: 2, questionId: 2 };
    this.data[8] = { id: 9, text: "O aconchego do inverno.", score: 2, questionId: 3 };
    this.data[9] = { id: 10, text: "As cores e perfumes da primavera.", score: 1, questionId: 3 };
    this.data[10] = { id: 11, text: "O outono com seus dias lindos.", score: 3, questionId: 3 };
    this.data[11] = { id: 12, text: "A energia do verão.", score: 4, questionId: 3 };
    this.data[12] = { id: 13, text: "Morango com chocolate.", score: 4, questionId: 4 };
    this.data[13] = { id: 14, text: "Salada de frutas.", score: 2, questionId: 4 };
    this.data[14] = { id: 15, text: "Cupcake.", score: 1, questionId: 4 };
    this.data[15] = { id: 16, text: "Torta de limão.", score: 3, questionId: 4 };
    this.data[16] = { id: 17, text: "Comédia.", score: 3, questionId: 5 };
    this.data[17] = { id: 18, text: "Romance.", score: 1, questionId: 5 };
    this.data[18] = { id: 19, text: "Suspense.", score: 4, questionId: 5 };
    this.data[19] = { id: 20, text: "Drama.", score: 2, questionId: 5 };
    this.data[20] = { id: 21, text: "Hamster.", score: 3, questionId: 6 };
    this.data[21] = { id: 22, text: "Gato.", score: 4, questionId: 6 };
    this.data[22] = { id: 23, text: "Passarinho.", score: 2, questionId: 6 };
    this.data[23] = { id: 24, text: "Cachorro.", score: 1, questionId: 6 };
    this.data[24] = { id: 25, text: "No trabalho ou na faculdade.", score: 1, questionId: 7 };
    this.data[25] = { id: 26, text: "Numa viagem com amigos.", score: 2, questionId: 7 };
    this.data[26] = { id: 27, text: "Na academia.", score: 3, questionId: 7 };
    this.data[27] = { id: 28, text: "Na balada.", score: 4, questionId: 7 };
    this.data[28] = { id: 29, text: "Calça jeans e paletó.", score: 2, questionId: 8 };
    this.data[29] = { id: 30, text: "Camisa xadrez e tênis.", score: 3, questionId: 8 };
    this.data[30] = { id: 31, text: "Camiseta branca e jaqueta de couro.", score: 4, questionId: 8 };
    this.data[31] = { id: 32, text: "Terno completo.", score: 1, questionId: 8 };
    this.data[32] = { id: 33, text: "Lendo um bom livro.", score: 1, questionId: 9 };
    this.data[33] = { id: 34, text: "Encontrando com os amigos.", score: 4, questionId: 9 };
    this.data[34] = { id: 35, text: "Caminhando em um lugar agradável.", score: 2, questionId: 9 };
    this.data[35] = { id: 36, text: "Fazendo compras no shopping.", score: 3, questionId: 9 };
    this.data[36] = { id: 37, text: "Corrida.", score: 3, questionId: 10 };
    this.data[37] = { id: 38, text: "Yoga.", score: 4, questionId: 10 };
    this.data[38] = { id: 39, text: "Dança.", score: 1, questionId: 10 };
    this.data[39] = { id: 40, text: "Volei.", score: 2, questionId: 10 };
  }
});

app.models.Answer = Backbone.Model.extend({
  defaults: function(){
    return {
      text: "text is null...",
      score: 0,
      questionId: 0
    }
  }
});

app.models.AnswerCollection = Backbone.Collection.extend({
  model: app.models.Answer,
  store: app.utils.store.answer,
  findByQuestion: function(question, callback){
    var data = _.where(this.store.data, { questionId: question.id } );
    callback(data);
  }
});
