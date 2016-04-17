(function() {
  "use strict";

  angular
    .module("app")
    .config(appRoutes);

    appRoutes.$inject = ["$urlRouteProvider", "stateProvider"];

    function appRoutes($urlRouteProvider, $stateProvider) {

      $stateProvider
        .state("about", {
          url: "/",
          templateUrl: "/js/layouts/about.html"
        })
        .state("contact", {
          url: "/contact",
          templateUrl: "/js/layouts/contact.html"
        })
        .state("projects", {
          url: "/projects",
          templateUrl: "/js/layouts/projects.html"
        });

      $urlRouteProvider.otherwise("/");
    }

})();
