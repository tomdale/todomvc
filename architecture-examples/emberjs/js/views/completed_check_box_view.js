Todos.CompletedCheckBoxView = Ember.Checkbox.extend({
  checkedDidChange: function(){
    Ember.run.next(this.get('controller.store'), function(){
      this.commit();
    });
  }.observes('checked')
});