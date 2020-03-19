import React, { Component } from "react";

class Course extends Component {
	state = {
		courseTitle: ""
	};

	componentDidMount() {
		this.searhQueryParam();
	}

	componentDidUpdate(prevProps, prevState) {
		this.searhQueryParam();
	}

	searhQueryParam() {
		console.log(this.props);
		const query = new URLSearchParams(this.props.location.search);

		for (let param of query.entries()) {
			if (this.state.courseTitle !== param[1])
				this.setState({ courseTitle: param[1] });
		}
	}

	render() {
		// console.log(this.props.match.params.id);
		return (
			<div>
				<h1>{this.state.courseTitle}</h1>
				<p>You selected the Course with ID: {this.props.match.params.id}</p>
			</div>
		);
	}
}

export default Course;
