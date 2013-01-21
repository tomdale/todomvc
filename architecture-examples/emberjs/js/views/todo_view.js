Todos.TodoView = Ember.View.extend({
	tagName: 'li',
	classNames: ['view'],
	classNameBindings: ['content.isCompleted:completed', 'isEditing:editing'],

	doubleClick: function(event) {
		this.set('isEditing', true);
	}
});
