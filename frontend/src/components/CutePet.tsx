import React, { Component } from 'react';
import { resourceLimits } from 'worker_threads';
import styles from '../styles/styles.module.css';

type MyProps = { pet_type: string }; // only 'cat' or 'dog'
type MyState = { error: Error | null; isLoaded: boolean; pet_image: string };
export default class CutePet extends Component<MyProps, MyState> {
	constructor(props: any) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			pet_image: '',
		};
	}

	componentDidMount() {
		fetch(
			this.props.pet_type == 'dog'
				? 'https://dog.ceo/api/breeds/image/random'
				: 'https://api.thecatapi.com/v1/images/search'
		)
			.then(res => res.json())
			.then(
				result => {
					console.log(result);
					if (this.props.pet_type == 'dog')
						this.setState({
							isLoaded: true,
							pet_image: result.message,
						});
					else {
						this.setState({
							isLoaded: true,
							pet_image: result[0].url,
						});
					}
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
		return (
			<div>
				<h1>hello from a cute {this.props.pet_type}</h1>
				<img className={styles.photo} src={this.state.pet_image}></img>
			</div>
		);
	}
}
