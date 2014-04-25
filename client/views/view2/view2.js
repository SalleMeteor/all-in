Template.view2.events({
  'click #goBack': function () {
    Router.go('view1');
  },

  'click #Aposta': function () {

      // Agafem local i visitant
      var local = $("#local").val();
      var visitant = $("#visitant").val();

      Contacts.insert({
         usuari: Meteor.user().username,
         nomlocal: Session.get("local"),
         nomvisitant: Session.get("visitant"),
         local: $("#local").val(),
         visitant:$("#visitant").val()
      });

      Apostes.insert({
         nomlocal: Session.get("local"),
         nomvisitant: Session.get("visitant"),
         local: $("#local").val(),
         visitant:$("#visitant").val()
      });

      ultimes_apostes = Apostes.find().fetch();
  var totalApostes =  ultimes_apostes.length;
  var  aux = new Array();
  for ( i = 0 ; i < totalApostes ; i++)
  {     aux[i] = ultimes_apostes[i].nomlocal +" "+ ultimes_apostes[i].local+"- "+ultimes_apostes[i].visitant+" "+ultimes_apostes[i].nomvisitant;
  }
   Session.set("lastbets",aux);



    }
});

Template.view2.rendered = function () {


 Meteor.subscribe("Apostes", function() {

  ultimes_apostes = Apostes.find().fetch();
  var totalApostes =  ultimes_apostes.length;
  var  aux = new Array();
  for ( i = 0 ; i < totalApostes ; i++)
  {     aux[i] = ultimes_apostes[i].nomlocal +" "+ ultimes_apostes[i].local+"- "+ultimes_apostes[i].visitant+" "+ultimes_apostes[i].nomvisitant;


  }
   Session.set("lastbets",aux);



 });

 
}


Template.view2.helpers({ 
  local: function(){
      return Session.get("local"); 
  },

  visitant: function(){
      return Session.get("visitant"); 
  }
});

Template.view2.lastbets = function () {
    return Session.get("lastbets");
};


