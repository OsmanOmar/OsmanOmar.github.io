angular.module("app",[])
.controller("ctrl",function($scope, $http){
    $http({
        url: "data.json",
        method: "get"
    }).then(function(response){
        $scope.data = response.data;
    })
})
