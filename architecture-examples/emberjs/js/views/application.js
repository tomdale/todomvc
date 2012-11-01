Todos.ApplicationView = Ember.View.extend({
  isAll: function() {
    return Ember.empty( this.get('controller.filter') );
  }.property( 'filter' ),

  isActive: function() {
    return this.get('controller.filter') === 'active';
  }.property('filter'),

  isCompleted: function() {
    return this.get('filter') === 'completed';
  }.property('filter')
});
