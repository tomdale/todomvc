(function(Todos) {
	'use strict';

	Todos.CreateTodoView = Ember.TextField.extend({
		elementId: 'new-todo',
		placeholder: "What needs to be done?",

		insertNewline: function() {
			var value = this.get('value');
			if (value) {
				this.get('controller').createTodo(value);
				this.set('value', '');
			}
		}
	})
})(Todos);
