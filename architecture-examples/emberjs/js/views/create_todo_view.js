Todos.CreateTodoView = Ember.TextField.extend({
	elementId: 'new-todo',
	placeholder: "What needs to be done?",

  insertNewline: function() {
    this._super();
    this.set('value', '');
  }
});
