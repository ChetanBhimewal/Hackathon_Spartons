/**
 * Created by chetan on 18-Mar-15.
 */

if (Meteor.isClient) {

    Template.testTemplate.events({
        'click .clsButton1': function () {
            alert('you click test buttton1');
        }
    });

}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}