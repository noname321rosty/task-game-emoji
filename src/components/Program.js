import React, {Component} from 'react';

export default class Program extends Component {

	state = {
		beer: 25 ,// 25 спичек -> 🍺
		value: 1,
		player1: 0,
		player2: 0,

	}

	handleValue = (e) => {
		e.preventDefault();
		// можно брать 1 , 2 , 3 🍺
		if(e.target.value >= 4 || e.target.value <= 0){
			alert('ты неможеш взять больше чем 3 🍺')
		}else {
			this.setState({
				value: e.target.value
			});
		}
	};

	addValue = () => {
		if(this.state.beer <= 0){
			if(this.state.player1 % 2 === 0){
				alert('player1 win 🍺')
			}else {
				alert('player2 win 🍺')
			}

		}else {
			let random = Math.floor(Math.random() * 3) + 1;
			this.setState({
				player1: this.state.player1 + +this.state.value,
				player2: this.state.player2 + random,
				beer: this.state.beer - +this.state.value - random ,

			})
		}
	}

	render() {
		return (
			<div>
				{
					<div>
						<p>🍺 = {this.state.beer}</p>
						<button onClick={() => this.setState({beer: this.state.beer + +this.state.value})}> add beer </button>
						<input type="text" placeholder={this.state.value} onChange={this.handleValue.bind(this)}/>
						<button onClick={this.addValue.bind(this)}> add beer to me </button>
						<p>player1 🍺 = {this.state.player1}</p>
						<p>player2 🍺 = {this.state.player2}</p>

					</div>
				}
			</div>
		);
	}
};



