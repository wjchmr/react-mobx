import { observable, action } from "mobx";

class HomeStore {
	@observable homeNum = 0;
	constructor(homeNum) {
		this.homeNum = homeNum || this.homeNum;
	}
	@action addNum() {
		this.homeNum += 1;
	}
	@action lessNum() {
		this.homeNum -= 1;
	}
}
export default HomeStore;
