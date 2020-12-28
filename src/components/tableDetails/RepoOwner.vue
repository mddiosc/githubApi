<template>
  <v-container>
    <v-row class="d-flex text-center justify-md-space-around align-center">
      <v-col cols="12" md="2">
        <v-avatar class="profile" size="164" tile>
          <v-img :src="details.owner.avatar_url"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" md="6">
        <v-list>
          <v-list-item>
            <v-list-item-content class="text-sm-center text-md-start">
              <v-list-item-title class="font-weight-bold"
                >Owner:</v-list-item-title
              >
              <v-list-item-title class="font-weight-bold"
                >Default Branch:</v-list-item-title
              >
              <v-list-item-title class="font-weight-bold"
                >Created At:</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-content class="text-sm-center text-md-start">
              <v-list-item-title>
                <a
                  :href="details.owner.html_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ details.owner.login }}</a
                >
              </v-list-item-title>
              <v-list-item-title
                v-text="details.default_branch"
              ></v-list-item-title>
              <v-list-item-title>{{
                moment(details.created_at).format("DD-MM-YYYY")
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  name: "RepoOwner",
  props: ["details"],
  data: () => ({
    moment: moment,
  }),
};
</script>

<style></style>
