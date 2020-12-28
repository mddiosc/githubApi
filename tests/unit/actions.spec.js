import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import createStoreConfig from "../__mocks__/storeConfig/modules/repositories/storeConfig";
import mockGet from "../__mocks__/mocksRepos.json";

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: mockGet })),
}));

let store;

beforeEach(() => {
  createLocalVue().use(Vuex);
  const storeConfig = createStoreConfig();
  store = new Vuex.Store(storeConfig);
});

describe("Get Repositories Items", () => {
  it("loads repositories and updates them in state", async () => {
    await store.dispatch("repositories/loadRepositories");
    expect(store.getters["repositories/getRepositories"]).toEqual(mockGet);
  });
});
