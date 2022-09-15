angular.module('table.filters', [])
    .filter('fieldsSelectFilter', function(){
    return function(data){
        data[0][0] = '$';
        data[1][0] = 'Todos';
        return data;
    };
});