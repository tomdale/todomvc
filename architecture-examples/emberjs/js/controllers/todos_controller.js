Todos.TodosController = Ember.ArrayController.extend({
  createTodo: function(value) {
    if (!value.trim()) { return; }

    Todos.Todo.createRecord({
      title: value,
      isCompleted: false
    });

    this.commit();
  },

  removeTodo: function(todo) {
    todo.deleteRecord();
    this.commit();
  },

  clearCompleted: function() {
    var completed = this.filterProperty('isCompleted', true);
    completed.forEach(this.removeTodo, this);
  },

  remaining: function() {
    return this.filterProperty( 'isCompleted', false ).get( 'length' );
  }.property( '@each.isCompleted' ),

  remainingFormatted: function() {
    var remaining = this.get('remaining');
    var plural = remaining === 1 ? 'item' : 'items';
    return '<strong>%@</strong> %@ left'.fmt(remaining, plural);
  }.property('remaining'),

  completed: function() {
    return this.filterProperty('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  allAreDone: function( key, value ) {
    if ( value !== undefined ) {
      this.setEach( 'isCompleted', value );
      return value;
    } else {
      return !!this.get( 'length' ) &&
        this.everyProperty( 'isCompleted', true );
    }
  }.property( '@each.isCompleted' ),

  commit: function() {
    this.get('store').commit();
  }
});
