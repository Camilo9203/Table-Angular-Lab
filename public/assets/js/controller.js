angular.module('table.controller', []).controller('TableController',function($scope, $filter, ObjectService, Persistence){

        ITEM_PER_PAGE = 5;
        $scope.types = [{value: 'Users', label:'Usuarios'}, {value: 'Articles', label:'Articulos'}, {value: 'Games', label:'Juegos'} ];
        $scope.data = [];
        $scope.head = [];

        //Data Type
        $scope.changeData = function (){
            $scope.uri = $scope.type.value;
            $scope.data = Persistence.list($scope.type.value);
            $scope.head = ObjectService.getPropertiesObject($scope.data[0]);
            $scope.propertiesHead = $scope.head;
            $scope.filter = $filter('fieldsSelectFilter')( [ObjectService.cloneObject($scope.propertiesHead), ObjectService.cloneObject($scope.head)] );;
            $scope.selectFilter = '$';
            $scope.changeFilterTo();
        };
        //Filter
        $scope.changeFilterTo = function(){
            $scope.search = ObjectService.createParamObject({}, $scope.selectFilter, '');
        };


        //***** by
        $scope.orderBy = {pedicate: 'name', reverse: false};
        $scope.links = function(predicate) {
            $scope.orderBy.reverse = !$scope.orderBy.reverse;
            $scope.orderBy.predicate = predicate;
        };

        //Pagination
        $scope.limit = {per_page: ITEM_PER_PAGE};

        //Default
        $scope.type = $scope.types[0];
        $scope.changeData();
    })
;