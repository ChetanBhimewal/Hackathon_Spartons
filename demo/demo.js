DbOperations = new Mongo.Collection('dbOperation');

if (Meteor.isClient) {
    Meteor.subscribe('theDemo');
    Template.template1.events({
        'click .clsinsert': function () {
             fname = document.getElementById('txtFirstName').value;
             lname = document.getElementById('txtLastName').value;
             addr = document.getElementById('txtAddress').value;
           // DbOperations.insert({FirstName:fname,LastName:lname, Address:addr});

            Meteor.call('InsertFromServer',fname,lname,addr);
        }
    });

    Template.template1.events({
        'click .next': function () {
            Session.set("NextRecord",Session.get("NextRecord")+ 1);
        }
    });
    Template.template1.events({
        'click .clsupdate':function(){
            DbOperations.update()
        }
    });
    Template.template1.events({
        'click .clsdelete':function(){
            DbOperations.remove()
        }
    });
    Template.template1.helpers({
       getNextRecord:function(){
           //var totalRec= DbOperations.find().count();
           var recs= DbOperations.find().fetch();
            var n=Session.get("Record");
              var r= DbOperations.findOne(recs[n]._id);
           console.log(r.FirstName+" "+ r.LastName+" "+ r.Address);
               return r.FirstName+" "+ r.LastName+" "+ r.Address;


       }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
      Meteor.publish('theDemo', function(){
          return DbOperations.find()
      });
  });

    Meteor.methods({
        'InsertFromServer':function(fname,lname,addr){
            DbOperations.insert({FirstName:fname,LastName:lname, Address:addr});
            //alert('Record inserted');
        }
    });

}
