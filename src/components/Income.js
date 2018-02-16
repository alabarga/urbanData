import React, { Component } from 'react';

import data from '../token.json';

class Income extends Component {
	constructor(props){
		super(props);
		this.state={
			homeIncome: ''
		}
	}



	componentDidMount(){
		let url = 'https://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=renthog_06_13_M&operations=null&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,6]}}]}&period_codes=2017Q3';
		let headers = new Headers();

		headers.append('Authorization', 'Token ' + data.token);

	fetch(url, {method:'GET',
		headers: headers
	})
	.then(response => response.json())
	.then(json => {
		const income =  json["2017Q3"]["72400013000280007900007000740007600000"]["renthog_06_13_M"]["0"];

		this.setState({
			homeIncome: income
		})
		console.log(this.state.homeIncome);
		})
	}

	render() {
		return (
			<div className="homeIncome">
				<div className="income_container">
					<div className="show_income">
						<h3 className="show_income_title">Renta media por hogar</h3>
						<span className="income_value">{this.state.homeIncome.toLocaleString()}  €/año</span>
					</div>
					<div className="income_graphic_container">
						<span className>Media ciudad</span>
						<div className="income_graphic_group">
							<div className="income_graphic_text_bar"></div>
							<div className="income_graphic">
								<div className="income_subgraphic"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Income;
