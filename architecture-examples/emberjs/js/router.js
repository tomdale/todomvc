Todos.Router = Ember.Router.extend({
	root: Ember.Route.extend({

		showAll: Ember.Route.transitionTo( 'index' ),
		showActive: Ember.Route.transitionTo( 'active' ),
		showCompleted: Ember.Route.transitionTo( 'completed' ),

		createTodo: function(router, value) {
			if (!value.trim()) { return; }

			Todos.Todo.createRecord({
				title: value,
				isCompleted: false
			});

			router.get('store').commit();
		},

		clearCompleted: function(router) {
			var controller = router.get('applicationController');

			var completed = controller.filterProperty('isCompleted', true);
			completed.forEach(this.removeObject, this);
		},

		removeItem: function(router, event) {
			event.context.deleteRecord();
		},

		index: Ember.Route.extend({
			route: '/',
			connectOutlets: function( router ) {
				var appController = router.get('applicationController');

				appController.set('content', Todos.Todo.find());
			}
		}),

		active: Ember.Route.extend({
			route: '/active',
			connectOutlets: function( router ) {
				router.showFilteredResults('isActive');
			}
		}),

		completed: Ember.Route.extend({
			route: '/completed',
			connectOutlets: function( router ) {
				router.showFilteredResults('isCompleted');
			}
		})
	})
});
