(function() {
  "use strict";

  angular
    .module("app")
    .config(appRoutes);

    appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

    function appRoutes($urlRouterProvider, $stateProvider) {

      $stateProvider
        .state("about", {
          url: "/",
          templateUrl: "/js/templates/about.html"
        })
        .state("contact", {
          url: "/contact",
          templateUrl: "/js/templates/contact.html"
        })
        .state("projects", {
          url: "/projects",
          templateUrl: "js/templates/projects.html"
        });

      $urlRouterProvider.otherwise("/");
    }

})();
