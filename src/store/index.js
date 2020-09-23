import homeStore from "./homeStore";
import oneStore from "./oneStore";
import appState from "./appState";

const store = {
	homeStore: new homeStore(3),
	oneStore: new oneStore(),
	appState
};

export default store;
