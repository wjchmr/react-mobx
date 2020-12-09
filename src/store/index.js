import homeStore from "./homeStore";
import oneStore from "./oneStore";

const store = {
	homeStore: new homeStore(3),
	oneStore: new oneStore(),
};

export default store;
