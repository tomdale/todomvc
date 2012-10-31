(function( Todos ) {
	'use strict';

	Todos.ApplicationController = Ember.ArrayController.extend(Todos.Filterable, {
		init: function() {
			this._super();

			this.set('content', this.get('store').findAll());
		},

		createTodo: function( value ) {
			if ( !value.trim() )
				return;
			var todo = this.get( 'store' ).createFromTitle( value );
			this.pushObject( todo );
		},

		pushObject: function( item, ignoreStorage) {
			if ( !ignoreStorage )
				this.get( 'store' ).create( item );
			return this._super( item );
		},

		removeObject: function( item ) {
			this.get( 'store' ).remove( item );
			return this._super( item );
		},

		clearCompleted: function() {
			this.filterProperty(
				'isCompleted', true
			).forEach( this.removeObject, this );
		},

		total: function() {
			return this.get( 'length' );
		}.property( '@each.length' ),

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

})( window.Todos );
