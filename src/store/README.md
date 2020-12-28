## Store de la aplicacion

En este directorio se define el _store_ de la aplicación.
En el fichero _index.js_ se carga el módulo github definido el el directorio _modules/github_

**Modulo github:**

En el directorio _modules/github_ se definen los _actions_, _getters_, _mutations_ y _state_ que se utilizan en la aplicación.
`state.js`

Definicion del _state_ que será utilizado en la aplicación para el componente **SearchTable**

`mutations.js`

Definición de las mutaciones a aplicar sobre el _state_:
**SET_LOADER**: Activa o desactiva el loader de la tabla.
**SET_SEARCH_RESULTS**: Almacena en el _state_ los datos obtenidos de la consulta al API
**RESET_DATA**: Reinicializa el _state_

`actions.js`

Definición de las acciones que serán ejecutadas durante el ciclo de vida de la aplicación.
**getSearchRepos**: Lanza la petición contra el API de GitHub, construyendo la URL a partir de los parametros de búsqueda seleccionados por el usuario. Una vez obtenidos ejecuta las mutaciones que modifican el _state_

**cleanRepos**: Ejecuta la mutacion RESET_DATA para reinicializar el _state_
