import { observable,action, autorun } from "mobx";

let message = observable({
    title: "Foo",
    author: {
        name: "Michel"
    },
    likes: [
        "John", "Sara"
    ]
})

// autorun(() => {
//     console.log(message.title)
// })

message.title = "Bar"

class HomeStore {
	@observable homeNum = 0;
	constructor(homeNum){
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
