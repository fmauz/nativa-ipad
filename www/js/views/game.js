app.views.Game = Backbone.View.extend({
  el: $("#content"),
  prevQuestions: [],
  currentQuestion: null,
  start_time: null,
  end_time:null,
  events:{
    "click .backHome": "back",
    "click .previous": "previousQuestion",
    "click .next": "nextQuestion",
    "change input[type='radio']": "answerSelect"
  },
  previousQuestion: function(evt){
    evt.preventDefault();
    if( this.prevQuestions.length > 0 ){
      this.model.models.push( this.currentQuestion );
      this.model.models.push( this.prevQuestions.pop() );
      this.currentQuestion = null;
      this.loadQuestion( true );
    }
  },
  answerSelect: function(evt){
    evt.preventDefault();
    var $target = $( evt.currentTarget );
    this.currentQuestion.set("selected", parseInt( $target.val() ) );
    $(".next").removeClass("disabled");
  },
  nextQuestion: function(evt){
    evt.preventDefault();
    if( this.currentQuestion.get("selected") != null ) this.loadQuestion();
  },
  loadQuestion: function(backward){
    if( this.currentQuestion ) this.prevQuestions.push( this.currentQuestion );
    if( this.model.models.length == 0 ){
      this.end_time = app.utils.formatDate( new Date, "{Date:2}/{Month:2}/{FullYear} {Hours:2}:{Minutes:2}:{Seconds:2}" );
      this.goTo("finish");
    }else{
      this.currentQuestion = this.model.models.pop();
      this.loadAnswers(backward);
    }
  },
  loadAnswers: function(backward){
    var answers = new app.models.AnswerCollection;
    var $this = this;
    answers.findByQuestion(this.currentQuestion, function(data){
      $this.currentQuestion.set("answers", data);
      $this.animate( backward );
    });
  },
  back: function(evt){
    evt.preventDefault();
    this.goTo("");
  },
  initialize: function(){
     $(document).bind('touchmove', false);
    this.start_time = app.utils.formatDate( new Date, "{Date:2}/{Month:2}/{FullYear} {Hours:2}:{Minutes:2}:{Seconds:2}" );
    this.prevQuestions = [];
    this.currentQuestion = null;
    this.template = _.template( app.utils.templateLoader.get('question-page') );
    this.loadQuestion();
  },
  styleControls: function(){
    $(".label_radio input[type='radio']").change(function(evt){
      $(".label_radio").removeClass("r_on").removeClass("r_off");
      $(".label_radio").addClass("r_off");
      $(evt.currentTarget).parents(".label_radio").removeClass("r_off").addClass("r_on");
    });

    $(".label_radio").each(function(index,label){
      var input = $(label).find("input[type='radio']")[0];
      $(label).addClass(input.checked ? "r_on" : "r_off");
    });

  },
  content_html: function( ){
    return this.template( this.currentQuestion.toJSON() );
  },
  after_render: function(){
    this.styleControls();
    if( this.currentQuestion.get("selected") )
      $(".next").removeClass("disabled");

    if( this.prevQuestions.length > 0)
      $(".previous").removeClass("disabled");
  }
});
