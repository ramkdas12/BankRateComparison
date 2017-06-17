var angularApp = angular.module('bankRateComparer',['ui.router', 'ui.bootstrap']);

angularApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/dashboard");
	//
	// Now set up the states
	$stateProvider
	.state('dashboard', {
		url: "/dashboard",
		templateUrl: "partials/dashboard.html"
		//controller: 'DashBoardController'
	})
	.state('results', {
		url: "/results",
		templateUrl: "partials/results.html"
		//controller: "ResultsController"
	});
}]);
