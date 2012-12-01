Todos.EditTodoView = Ember.TextField.extend({
	classNames: ['edit'],

	contentBinding: 'parentView.content',
	valueBinding: 'content.title',
	isEditingBinding: "parentView.isEditing",

	focusOut: function() {
		this.finishEditing();
	},

	insertNewline: function() {
		this.finishEditing();
	},

	finishEditing: function(){
		var value = this.get('value');

		if (Ember.empty(value)) {
			this.get('content').deleteRecord();
		}

		this.set('isEditing', false);
		this.get('controller.store').commit();
	},

	didInsertElement: function() {
		this.$().focus();
	}
});
