'use strict';

angular.module('ruddlerApp')
    /* === CON "TUOWAA" S ===*/

    /* Main Controller */
    .controller('mainController', function ($scope, $http) {
    })

    /* Navigation Controller */
    .controller('navigationController', function ($scope, $location) {
        $scope.menu = [{
          'title': 'Home',
          'link': '/'
        }];

        $scope.isCollapsed = true;

        $scope.isActive = function(route) {
          return route === $location.path();
        };

        $scope.isAuthenticated = false;
    })

    /* === DIRECTIVES ===*/
    .directive( 'drSlideOut', function () {
        return {
            scope: true,
            template: '<a id="sign-in" href="#sidr" class="dropdown-toggle navbar-brand" data-toggle="dropdown"><i class="fa fa-sign-in"></i> Start </a>',
            link: function ( scope, element, attrs ) {
               $('#sign-in').sidr({
                    side: 'right'
                });
            }
        };
    });

