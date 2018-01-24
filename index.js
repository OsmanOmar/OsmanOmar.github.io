angular.module("app",[])
.controller("ctrl",function($scope, $http){
    $http({
        url: "data.json",
        method: "get"
    }).success(function(response){
        $scope.data = response;
    })
})