Todos.ApplicationView = Ember.View.extend({
  isAll: function() {
    return Ember.empty( this.get('controller.currentFilter') );
  }.property('controller.currentFilter'),

  isActive: function() {
    return this.get('controller.currentFilter') === 'active';
  }.property('controller.currentFilter'),

  isCompleted: function() {
    return this.get('controller.currentFilter') === 'completed';
  }.property('controller.currentFilter')
});
