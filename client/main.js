import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';

Resolutions = new Mongo.Collection('resolutions');
/*Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});*/



Template.body.helpers({
		resolutions: function() {
			return Resolutions.find();
		}
});

/*if (Meteor.isClient){
	Template.body.helpers({
		resolutions: [
			{title: "hello resolution #1"}
		]
	});
}

if (Meteor.isServer){
	Meteor.startup(function() {

	});
}*/