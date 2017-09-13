(function () {
    'use strict';

    angular
        .module('app')
        .directive('menuNav', navigation);

    navigation.$inject = ['$rootScope', '$window', 'baseUrl', 'socialLoginService'];

    function navigation($rootScope, $window, baseUrl, socialLoginService) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/nav.directive.html',
            link: link
        };

        function link(scope){

            var localStore = window.localStorage;
            scope.userAvater = null;
            scope.loggedIn = false;
            scope.name = null;
            scope.email = null;

            checkStatus();

            console.log('loaded nav-bar');

            $rootScope.$on('event:social-sign-in-success', function(event, userDetails) {
                console.log('signed in...');
                localStore.setItem('LoginStatus', 1);
                localStore.setItem('Name', userDetails.name);
                localStore.setItem('UserAvatar', userDetails.imageUrl);
                localStore.setItem('LoginProvider', userDetails.provider);
                scope.loggedIn = true;
                checkStatus();
                scope.navigate('home');
            });


            $rootScope.$on('event:social-sign-out-success', function(event, logoutStatus) {
                console.log('signed out...')
                localStore.setItem('LoginStatus', 0);
                console.log(logoutStatus);
                scope.loggedIn = false;
                checkStatus();
            });

            function checkStatus(){
                scope.loggedIn = localStore.getItem("LoginStatus") == 1? true: false;
                scope.name = localStore.getItem("Name");
                scope.userAvatar = localStore.getItem("UserAvatar");
                //scope.email = localStore.getItem("UserAvatar");
            }

            scope.navigate = function(page){
                $window.location.href = baseUrl+page;
            }

            scope.getFullName = function() {
                return scope.name;
            }

            scope.signOut = function(){
                socialLoginService.logout();
                localStore.removeItem('LoginStatus');
                scope.loggedIn = 0;
                scope.navigate('login');
            }
        }
    }
})();