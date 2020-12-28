## Estilos SASS & Mixins

El fichero `variables.scss` define un mixin, y un mixin con parámetros utilizando el preprocesador **SASS**

El mixin `headerProps` define el color de fondo y del texto que es utilizado en el componente **Header** (Header.vue).

El mixin con parametros `hov` permite definir las propiedades por defecto y durante el evento _hover_ que se aplicarán sobre un elemento
Los parámetros del mixin `hov` son:

**\$property** : Propiedad que será modificada cuando se presente el evento _hover_

**\$prop1** : es el valor que se aplicara a propiedad especificada por defecto

**\$prop2** : es el valor que se aplicara a propiedad especificada cuando se lance el evento _hover_

Este mixin se ha utilizado en el componente header, para cambiar las propiedades _font-size_ y _font-weight_ del _title_ del header. (Header.vue)
