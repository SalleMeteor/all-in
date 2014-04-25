Template.view1.created = function(){

    Meteor.subscribe("allContacts");

};

// ----
Template.view1.rendered = function () {


 Meteor.subscribe("Apostes", function() {

  ultimes_apostes = Apostes.find().fetch();
  var totalApostes =  ultimes_apostes.length;
  var  aux = new Array();
 for ( i = 0 ; i < totalApostes ; i++)
  {      aux[i] = ultimes_apostes[i].nomlocal +" "+ ultimes_apostes[i].local+"- "+ultimes_apostes[i].visitant+" "+ultimes_apostes[i].nomvisitant;
  }
   Session.set("lastbets",aux);



 });

 
}

// ---

Template.view1.missatge1 = function () {
    return Session.get("resultat_missatge1");
};

Template.view1.resultat1 = function () {
    return Session.get("resultat_partit1");
};

Template.view1.missatge2 = function () {
    return Session.get("resultat_missatge2");
};

Template.view1.resultat2 = function () {
    return Session.get("resultat_partit2");
};

Template.view1.lastbets = function () {
    return Session.get("lastbets");
};

Template.view1.events({

    'click #partit1': function () {
    
        console.log("You pressed the button 1");
        Router.go('view2');
        
        Session.set("local","Real Madrid");
        Session.set("visitant","FC Barcelona");

    },

    'click #partit2': function () {

       console.log("You pressed the button 2");
       Router.go('view2');

       Session.set("local","Real Societat");
       Session.set("visitant","RCD Espanyol");

    },

    'click #sim_partit1': function () {
        var resultat_local = Math.floor(Math.random()*6);
        var resultat_visitant = Math.floor(Math.random()*6);

        var resultat = resultat_local + "-" +  resultat_visitant;
        
        var partitActual = "Real Madrid";

        betsUser = Contacts.find({'usuari':Meteor.user().username}).fetch();
        console.log(Meteor.user().username);

        var numTotal = betsUser.length;
        console.log(numTotal);
        comptGuanyar = 0 ;
        comptPerdre = 0 ;

         for ( i = 0 ; i < numTotal ; i++)
         {
        
          // Si hem apostat
          if (betsUser[i].nomlocal == partitActual)
          {
            // Si coincideix la aposta
            if (resultat_local ==  betsUser[i].local &&  resultat_visitant ==  betsUser[i].visitant)
            {
                comptGuanyar =  comptGuanyar +1;

            }else{
              
                comptPerdre =  comptPerdre +1;

            }
          }


         }


        missatge = "You have won " + comptGuanyar + " bets and lost " + comptPerdre + " bets";

        Session.set("resultat_missatge1",missatge);
        Session.set("resultat_partit1",resultat);

        // Borrem bbdd
        for ( i = 0 ; i < numTotal ; i++){
          Contacts.remove( {_id:Contacts.findOne({usuari:Meteor.user().username,nomlocal:partitActual})['_id']});
        }



    },

    'click #sim_partit2': function () {
        var resultat_local = Math.floor(Math.random()*6);
        var resultat_visitant = Math.floor(Math.random()*6);

        var resultat = resultat_local + "-" +  resultat_visitant;
        
        var partitActual = "Real Societat";

        betsUser = Contacts.find({'usuari':Meteor.user().username}).fetch();
        console.log(Meteor.user().username);

        var numTotal = betsUser.length;
        console.log(numTotal);
        comptGuanyar = 0 ;
        comptPerdre = 0 ;

         for ( i = 0 ; i < numTotal ; i++)
         {
        
          // Si hem apostat
          if (betsUser[i].nomlocal == partitActual)
          {
            // Si coincideix la aposta
            if (resultat_local ==  betsUser[i].local &&  resultat_visitant ==  betsUser[i].visitant)
            {
                comptGuanyar =  comptGuanyar +1;

            }else{
              
                comptPerdre =  comptPerdre +1;

            }
          }


         }


        missatge = "You have won " + comptGuanyar + " bets and lost " + comptPerdre + " bets";

        Session.set("resultat_missatge2",missatge);
        Session.set("resultat_partit2",resultat);

        // Borrem bbdd

        for ( i = 0 ; i < numTotal ; i++){
          Contacts.remove( {_id:Contacts.findOne({usuari:Meteor.user().username,nomlocal:partitActual})['_id']});
        }

        

    }

  });


