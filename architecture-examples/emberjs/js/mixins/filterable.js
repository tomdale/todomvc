(function(Todos) {
	Todos.Filterable = Ember.Mixin.create({
		arrangedContent: function() {
			var filterBy = this.get('filterBy');
			var arrangedContent = this.get('content') || [];

			if (filterBy) {
				arrangedContent = arrangedContent.filterProperty(filterBy, true);
			} else {
				arrangedContent = arrangedContent.slice();
			}

			return arrangedContent;
		}.property('content', 'filterBy')
	});
})(window.Todos);
