import React, { Component } from 'react';
import { resourceLimits } from 'worker_threads';

export default class CuteDog extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],
		};
	}

	componentDidMount() {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then(res => res.json())
			.then(
				result => {
					console.log(result);
					this.setState({
						isLoaded: true,
						items: result,
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);
	}

	render() {
		return <h1>hello from a cute dog</h1>;
	}
}
