Todos.EditTodoView = Ember.TextField.extend({
	classNames: ['edit'],

	contentBinding: 'parentView.content',
	valueBinding: 'content.title',

	change: function() {
		var value = this.get('value');

		if (Ember.empty(value)) {
			var controller = this.get('controller');
			var todo = this.get('content');

			controller.removeObject(todo);
		}
	},

	focusOut: function() {
		this.set('isEditing', false);
	},

	insertNewline: function() {
		this.set('isEditing', false);
	},

	didInsertElement: function() {
		this.$().focus();
	}
});
