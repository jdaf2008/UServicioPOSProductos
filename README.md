# UServicioPOSProductos
Este microservicio esta encargado de todos los metodos relacionados con los productos, es decir trae el inventario de los productos registrados

## Implementación

EL serbvicio fue implementado con dos contenedores, uno incluye el código en nodejs con express y el otro la base de datos no relacional mongo db. 

El servicio API REST FUL http://142.93.120.255:3789/pos/api/products 

Tiene cuatro métodos:

* GET  

Trae los productos en el inventario y se debe incluir en la cabecera el token de autorización

authorization    :   TOKEN   *temporalmente deshabilitado*


### Respuesta

```javascript
{
    "items": [
        {
            "_id": "5c0aafe18b62b8597f1e2bf7",
            "name": "luces",
            "price": "250000",
            "code": "P003",
            "description": "Descrición de microservicio",
            "__v": 0
        },
        {
            "_id": "5c0ab7cf8b62b8597f1e2bf8",
            "name": "pedales",
            "price": "2500",
            "code": "P004",
            "description": " pedales bicicleta",
            "__v": 0
        }
    ]
}
```


* POST

Se encarga de agregar productos y debe incluri en la cabecera el tyoken de autorización

authorization    :   TOKEN  *temporalmente deshabilitado*

Y el body contiene los datos del nuevo producto

```javascript
{
        "name": "luces",
        "price": "250000",
        "code": "P003",
        "description": "Descrición de microservicio",
}
```

### Respuesta 

```javascript
{
    "data": {
        "_id": "5c0aafe18b62b8597f1e2bf7",
        "name": "luces",
        "price": "250000",
        "code": "P003",
        "description": "Descrición de microservicio",
        "__v": 0
    },
    "message": "Los datos fueron guardados correctamente"
}
```

* PUT

Se encarga de actulizar un item del inventarío debe incluir en la cabecera el token de autorización

authorization    :   TOKEN  *temporalmente deshabilitado*

Y el body contiene los datos del producto identificado con el nombre


```javascript
{
        "name": "luces",
        "price": "25000"
}
```

* DELETE 

Se encarga de eliminar un item del inventarío debe incluir en la cabecera el token de autorización

authorization    :   TOKEN  *temporalmente deshabilitado*

Y el body contiene los datos del producto identificado con el nombre

```javascript
{
        "name": "luces",
        "price": "25000"
}
```