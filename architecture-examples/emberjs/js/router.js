Todos.Router = Ember.Router.extend({
	showFilteredResults: function(state) {
		this.set('applicationController.currentFilter', state);
	},

	root: Ember.Route.extend({

		showAll: Ember.Route.transitionTo( 'all' ),
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
			completed.invoke('deleteRecord');
			router.get('store').commit();
		},

		removeItem: function(router, event) {
			event.context.deleteRecord();
			router.get('store').commit();
		},

		index: Ember.Route.extend({
			route: '/',

			connectOutlets: function( router ) {
				var appController = router.get('applicationController');
				appController.set('content', Todos.Todo.find());
			},

			all: Ember.Route.extend({
				route: '/',
				connectOutlets: function( router ) {
					router.showFilteredResults(null);
				}
			}),

			active: Ember.Route.extend({
				route: '/active',
				connectOutlets: function( router ) {
					router.showFilteredResults('active');
				}
			}),

			completed: Ember.Route.extend({
				route: '/completed',
				connectOutlets: function( router ) {
					router.showFilteredResults('completed');
				}
			})
		})
	})
});
