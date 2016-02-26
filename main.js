angular.module('app', []).controller('mainCtrl', function ($scope) {
    $scope.wat = 'Hi';
});

angular.module('app').directive('panel', function () {
    return function (scope, element) {
        element.bind('mouseenter', function () {
            element.addClass('panel');
        });
        element.bind('mouseleave', function () {
            element.removeClass('panel');
        })
    }
});

