<template>
  <v-container class="mt-15">
    <v-card>
      <v-card-text>
        <v-row>
          <v-col class="d-flex justify-center align-center" cols="12">
            <v-icon large>mdi-github</v-icon>
            <h2 class="font-weight-bold">GitHub Repositories</h2>
          </v-col>
        </v-row>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row class="justify-space-around d-flex align-center">
            <v-col cols="12" md="3" sm="6">
              <v-text-field
                v-model="filters.search"
                label="Search"
                autocomplete="off"
                clearable
                @click:clear="filters.search = null"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-select
                v-model="filters.order"
                :items="orderItems"
                item-text="text"
                item-value="value"
                label="Order"
                @click:clear="filters.order = null"
              ></v-select>
            </v-col>

            <v-col cols="12" md="3" sm="6">
              <v-select
                v-model="filters.sort"
                :items="sortItems"
                item-text="text"
                item-value="value"
                label="Sort"
                @click:clear="filters.sort = null"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="justify-center d-flex align-center" cols="6">
              <v-btn color="secondary" @click="clean()">
                Clear
              </v-btn>
            </v-col>

            <v-col class="justify-center d-flex align-center" cols="6">
              <v-btn color="primary" @click="search">
                Search
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="repositories"
          :options.sync="options"
          :server-items-length="totalRepositories"
          :loading="loading"
          :footer-props="footerProps"
          show-expand
          :items-per-page="10"
          :expanded.sync="expanded"
          item-key="id"
        >
          <template v-slot:item.html_url="{ item }">
            <a
              :href="item.html_url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ item.html_url }}</a
            >
          </template>

          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <OwnerDetails :details="item" />
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import OwnerDetails from "../components/tableDetails/RepoOwner";
export default {
  data() {
    return {
      // Inicializacion de filtros
      filters: {
        search: null,
        order: "desc",
        sort: "stars",
      },
      // Items del selector de ordenación en filtros
      orderItems: [
        { text: "A-Z", value: "asc" },
        { text: "Z-A", value: "desc" },
      ],
      // Listado de elementos sobre los que se podrá ordenar la tabla.
      sortItems: [
        { text: "Stars", value: "stars" },
        { text: "Created", value: "created" },
        { text: "Updated", value: "updated" },
        { text: "Pushed", value: "pushed" },
        { text: "Full Name", value: "full_name" },
      ],
      // Inicializacion de las opciones de paginación de la tabla.
      options: {},
      // Inicializacion del array que contiene los datos expandidos en la tabla.
      expanded: [],
      // Encabezados de la tabla.
      headers: [
        {
          text: "Repository Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Url",
          align: "start",
          sortable: false,
          value: "html_url",
        },
      ],
      //Propiedades del footer de la tabla.
      footerProps: {
        "items-per-page-options": [5, 10, 20],
      },
      // Reglas de validación de los filtros.
      valid: true,
      rules: {
        required: [
          (v) => !!v || "Required field",
          (v) => /[A-Za-z0-9]/.test(v) || "Required field",
        ],
      },
    };
  },

  components: {
    // Componente que utiliza para mostrar la informacion detallada del repositorio
    OwnerDetails,
  },

  computed: {
    /* Obtiene a partir de los getters de vuex el total de resultados obtenidos para 
    el paginado de la tabla, los repositorios obtenidos, y mostrar o no el loading 
    de la tabla */
    ...mapGetters("github", ["loading", "totalRepositories", "repositories"]),
  },
  watch: {
    /* Vigila los cambios realizados en las opciones de paginación de la tabla, 
    para actualizar los datos de la misma */
    options: {
      handler() {
        this.getSearchRepos({ options: this.options, filters: this.filters });
      },
      deep: true,
    },
  },

  methods: {
    /* Mapeo de las acciones de vuex para lanzar la busqueda de repositorios y el reseteo
    de los mismos */
    ...mapActions("github", ["getSearchRepos", "cleanRepos"]),

    search() {
      /* Método que lanza el botón buscar, y que ejecuta el action getSearchRepos en vuex
      si la validacion del formulario es correcta */
      if (this.$refs.form.validate()) {
        this.getSearchRepos({ options: this.options, filters: this.filters });
      }
    },

    clean() {
      /* Limpieza del formulario de búsqueda y validaciones. Llamada al action que
      ejecuta la mutación de reseteo del state. */
      this.$refs.form.resetValidation();
      this.filters = {
        search: null,
        order: "desc",
        sort: "stars",
      };
      this.cleanRepos();
    },
  },
};
</script>
