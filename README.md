# test-node-inicial

En la carpeta screenshots hay capturas realizadas a la consola en node, a un gestor de sqlite y a postman en donde se hicieron pruebas a la API.
En cuanto a los filtros de búsqueda se diseño utilizando la selección "option". Si se selecciona 1 el criterio de fecha es después a la ingresada, 2 antes a la fecha y 3 busca
entre dos fechas siendo indistinto el orden en que se ingresen. Para la búsqueda 1 o 2 la fecha que se tiene en cuenta es "date1". Si la opción es distinta a 1, 2 o 3 se desactiva
el criterio de búsqueda por fecha. 
Para la búsqueda por cadena de caracteres se utiliza el campo string. Si la cadena esta vacía este filtro se desactiva.
Si "option" es distinto de 1, 2 o 3 y "string" es vacío se listan todos los registros, caso contrario se pueden combinar de cualquier forma.

-Ingresar usuario endpoint: "/api/create-user"
-Actualizar usuario endpoint: "/api/update-user/:id"
-Buscar usuario endpoint: "/api/search"
-Borrar usuario endpoint: "/api/delete-user/:id"
