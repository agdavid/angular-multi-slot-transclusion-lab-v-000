function UserProfile() {
	return {
		//refactor to use multi-slot transclusion
		transclude: {
			name: 'h4',
			position: 'h6',
			description: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				//use ng-transclude attr with value equal to transclusion object key
				'Name : <span ng-transclude="name"></span>',
				'Position : <span ng-transclude="position"></span>',
				'Description : <span ng-transclude="description"></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);