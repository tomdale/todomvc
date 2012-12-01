Todos.TodoView = Ember.View.extend({
	templateName: 'todo-view',

	tagName: 'li',
	classNames: ['view'],
	classNameBindings: ['content.isCompleted:completed', 'isEditing:editing'],

  contextBinding: "content",

	doubleClick: function() {
		this.set('isEditing', true);
	}
});
