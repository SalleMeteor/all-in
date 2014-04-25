Meteor.publish("allContacts", function() {
  return Contacts.find();
});



Meteor.publish("Apostes", function() {
  return Apostes.find();
});