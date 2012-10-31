(function(Todos) {
	Todos.TodoView = Ember.View.extend({
		templateName: 'todo-view',

		tagName: 'li',
		classNames: ['view'],
		classNameBindings: ['content.isCompleted:completed', 'isEditing:editing'],

		doubleClick: function() {
			this.set('editing', true);
		}
	});
})(window.Todos);
