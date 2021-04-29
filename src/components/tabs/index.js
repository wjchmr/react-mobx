import React from "react";
import { Tabs } from "antd-mobile";

export default class Demo extends React.Component {
	renderContent = tab => (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "150px",
				backgroundColor: "#fff",
			}}
		>
			<p>Content of {tab.title}</p>
		</div>
	);

	renderTabBar(props) {
		console.log(props);
		const { tabs = [] } = props;

		return (
			<div className='tablist'>
				{tabs.map(item => (
					<div>{item.title}</div>
				))}
			</div>
		);
	}
	render() {
		const tabs = [
			{ title: "1st Tab" },
			{ title: "2nd Tab" },
			{ title: "3rd Tab" },
			{ title: "4th Tab" },
			{ title: "5th Tab" },
			{ title: "6th Tab" },
			{ title: "7th Tab" },
			{ title: "8th Tab" },
			{ title: "9th Tab" },
		];

		return (
			<div>
				<Tabs
					tabs={tabs}
					// renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}
					renderTabBar={props => this.renderTabBar(props)}
				>
					{this.renderContent}
				</Tabs>
			</div>
		);
	}
}
