<template>
  <v-app>
    <Navigation />
    <v-main>
      <GitContent />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import GitContent from "./components/SearchTable";

export default {
  name: "App",

  components: {
    Navigation,
    Footer,
    GitContent,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss"></style>
