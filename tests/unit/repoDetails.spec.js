import { mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import repoDetails from "@/components/tableDetails/RepoOwner.vue";
import details from "../__mocks__/details.json";
Vue.use(Vuetify);

describe("RepoOwner.vue", () => {
  it("renders props when passed", () => {
    const wrapper = mount(repoDetails, {
      propsData: {
        details,
      },
    });

    expect(wrapper.html());
  });
});
