App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("collections");
  this.route("exhibits");
  this.route("notes");
});
