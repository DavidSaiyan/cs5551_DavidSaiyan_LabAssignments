(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home', home);

    home.$inject = ['$scope'];

    function home($scope) {

        var map;
        var mapOptions;

        $scope.initialize = function () {
            navigator.geolocation.getCurrentPosition(function (position) {

                var pos = new google.maps.LatLng(
                    position.coords.latitude,
                    position.coords.longitude);

                var mapOptions = {
                    zoom: 16,
                    center: pos
                };

                map = new google.maps.Map(document.getElementById('map-canvas'),
                    mapOptions);

                var marker = new google.maps.Marker({
                    position: pos,
                    map: map
                });
            });
        };

        google.maps.event.addDomListener(window, 'load', $scope.initialize);

    }
})();