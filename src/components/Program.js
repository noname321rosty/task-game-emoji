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

		if(e.target.value >= 4 || e.target.value <= 0){
			alert('ты неможеш взять больше чем 3 🍺 или 0')
		}else {
			this.setState({
				value: e.target.value
			});
		}
	};

	addValue = () => {
		let random = Math.floor(Math.random() * 3) + 1;
		this.setState({
			player1: this.state.player1 + +this.state.value,
			player2: this.state.player2 + random,
			beer: this.state.beer - +this.state.value - random ,

		})
		if(this.state.beer <= 0){
			alert('1231231')
		}
	}

	render() {
		return (
			<div>
				{
					<div>
						<p>🍺 = {this.state.beer}</p>
						<input type="text" placeholder={this.state.value} onChange={this.handleValue.bind(this)}/>
						<button onClick={() => this.setState({beer: this.state.beer + +this.state.value})}> add beer </button>
						<button onClick={this.addValue.bind(this)}> add beer to me </button>
						<p>me 🍺 = {this.state.player1}</p>
						<p>player2 🍺 = {this.state.player2}</p>

					</div>
				}
			</div>
		);
	}
};



