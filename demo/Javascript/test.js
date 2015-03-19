/**
 * Created by chetan on 18-Mar-15.
 */

if (Meteor.isClient) {

    Template.testTemplate.events({
        'click .clsButton1': function () {
            alert('you click test button1');
        }
    });
    Template.testTemplate.events({
        'click .clsButton2': function () {
            alert('you click test button2');
        }
    });

}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}