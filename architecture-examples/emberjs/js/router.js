(function( Todos ) {
	'use strict';

	Todos.Router = Ember.Router.extend({
		init: function() {
			this.set('store', Todos.Store.create());
			return this._super();
		},

		showFilteredResults: function(filter) {
			this.get('applicationController').set('filterBy', filter);
		},

		root: Ember.Route.extend({

			showAll: Ember.Route.transitionTo( 'index' ),
			showActive: Ember.Route.transitionTo( 'active' ),
			showCompleted: Ember.Route.transitionTo( 'completed' ),

			removeItem: function(router, event) {
				var applicationController = router.get('applicationController');
				applicationController.removeObject(event.context);
			},

			index: Ember.Route.extend({
				route: '/',
				connectOutlets: function( router ) {
					router.showFilteredResults();
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

})( window.Todos );
