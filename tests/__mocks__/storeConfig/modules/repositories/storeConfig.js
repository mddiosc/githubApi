import repositories from "../repositories/index";

export default function createStoreConfig() {
  return {
    modules: {
      repositories,
    },
  };
}
