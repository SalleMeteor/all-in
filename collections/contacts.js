Contacts = new Meteor.Collection("contacts");
Apostes = new Meteor.Collection("apostes");

Contacts.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },	
  remove: function() {
    return true;
  }
});

Apostes.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },  
  remove: function() {
    return true;
  }
});

/*
Contacts.deny({
  insert: function () {
    return true;
  }
});
*/
