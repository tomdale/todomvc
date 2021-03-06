Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),

  isCompletedDidChange: function() {
    Ember.run.once(this, function() {
      this.get('store').commit();
    });
  }.observes('isCompleted', 'title')
});
