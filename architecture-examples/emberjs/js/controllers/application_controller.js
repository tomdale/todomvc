Todos.ApplicationController = Ember.ArrayController.extend({
  currentFilter: null,

  filteredContent: function(){
    var filter = this.get('currentFilter');
    if (filter === "active"){
      return this.filterProperty('isCompleted', false);
    } else if(filter === "completed"){
      return this.filterProperty('isCompleted');
    } else {
      return this;
    }
  }.property('content', 'currentFilter', '@each.isCompleted'),

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
  }.property( '@each.isCompleted' )
});
