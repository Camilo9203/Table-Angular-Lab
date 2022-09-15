angular.module('table.services', [])
    .factory('Users', function(){
        return{
            get : function(){
                var data = [ {id: 1, nombre: 'Juan', apellido: 'Perez'},
                    {id: 5, nombre: 'Ana María', apellido: 'Garcia'},
                    {id: 15, nombre: 'Alejandro', apellido: 'Magno'},
                    {id: 18, nombre: 'Andrea', apellido: 'L'},
                    {id: 19, nombre: 'Pablo', apellido: 'Gutierrez'},
                    {id: 8, nombre: 'Ana', apellido: 'H'},
                ];
                return data;
            }

        }
    })

    .factory('Articles', function(){
        return{
            get : function(){
                var data = [
                    { id: 20, titulo: 'Mi primer articulo', resumen: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                    { id: 21, titulo: 'Mi segundo articulo', resumen: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                    { id: 22, titulo: 'Mi tercer articulo', resumen: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
                ];
                return data;
            }
        }
    })

    .factory('Games', function(){
        return{
            get : function(){
                var data = [
                    {id: 1, titulo: 'Metroid', genero: 'Acción'},
                    {id: 2, titulo: 'Zelda', genero: 'Aventura'},
                    {id: 3, titulo: 'Golden Eye', genero: 'Shooter'},
                    {id: 4, titulo: 'Fifa 2016', genero: 'Deportes'},
                ];
                return data;
            }
        }
    })

    .factory('Call', function($injector){
        return {
            get : function(type){
                var service = $injector.get(type);
                return service.get();
            }
        };
    })

    .factory('Persistence', function(Call){
        return{
            add : function(type, data){
                var Obj = Call.get(type);
                Obj.push(data);
            },

            list : function(type){
                return Call.get(type);
            },

            update : function(type, index, data){
                var Obj = Call.get(type);
                return Obj[index] = data;
            },

            get : function(type, index){
                var Obj = Call.get(type);
                return Obj[index];
            },

            destroy : function(type, index){
                var Obj = Call.get(type);
                return Obj.splice(index, 1);
            }
        };
    })

    .factory('ObjectService', function(){
        return {
            getPropertiesObject: function(object){
                var properties = [];
                for( var property in object){
                    properties.push(property);
                }
                return properties;
            },
            cloneObject: function (obj) {
                if (null === obj || "object" !== typeof obj) {
                    return obj;
                }
                var copy = obj.constructor();
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
                }
                return copy;
            },
            createParamObject: function(obj, parameter, value){
                return Object.defineProperty(obj, parameter, {value: value, writable : true, configurable: true, enumerable : true } );
            },
        }
    })
;