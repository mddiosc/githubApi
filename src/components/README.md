## Componentes

Se han definido 4 componentes para la aplicación.

`SearchTable.vue`
En este componente se construyen los filtros de búsqueda y la tabla donde se cargan los resultados. Para cargar la tabla de resultados, desde el componente se llama a un _action_ de _vuex_ que es el que realiza la llamada al API de github, obtener los datos, para posteriomente mutarlos al _state_ del componente.

**En la carpeta ui:**

`Footer.vue`
En este componente se define el pie de página de la aplicacion.

`Header.vue`
En este componente se define el header de la aplicacion.

**En la carpeta tableDetails:**

`RepoOwner.vue`
En este componente se definen los detalles del repositorio, tales como el propietario, imagen, etc. Los datos a mostrar se le pasan a este componente desde su componente padre (SearchTable) como _props_
