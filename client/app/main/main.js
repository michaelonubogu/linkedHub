'use strict';

angular.module('ruddlerApp')
    /* === CON "TUOWAA" S ===*/

    /* Login Controller */
    .controller('loginController', function ($scope, $http, $firebase, $firebaseSimpleLogin) {
        var firebase = new Firebase("https://linkedhub.firebaseio.com/");
    
        $scope.loginWithGithub = function(){
            firebase.authWithOAuthPopup("github", function(error, authData) { 
            });
        }
        
        $scope.linkedIn_login = function(){
            
        };
    
        $scope.init = function(){
            
        };
    
        $scope.init();
    })

    /* Main Controller */
    .controller('mainController', function ($scope, $http, $firebase) {
    })

    /* Navigation Controller */
    .controller('navigationController', function ($scope, $location, $firebase) {
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

