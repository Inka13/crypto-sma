import axios from 'axios';

export const getAllSymbols = () => {
	return(dispatch) => {
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		const url = 'https://www.cryptocompare.com/api/data/coinlist/';
		return axios.get(proxyurl + url)
			.then((response) => {
				const symbols = Object.getOwnPropertyNames(response.data.Data);
				console.log(symbols);
				dispatch(gotAllSymbols(symbols));
			})
			.catch(function (error) {
    		console.log(error);
  		});
	}
};
export const gotAllSymbols = (symbols) => {
	localStorage.setItem('symbols',JSON.stringify(symbols));
	return {
		type: "GOT_SYMBOLS",
		symbols
	};
};
export const setSymbol = (symbol) => {
	return {
		type: "GOT_SYMBOL",
		symbol
	};
};
export const setDate = (date, which) => {
	if(which==="start") {
		return {
			type: "GOT_STARTDATE",
			date
		};
	} else {
		return {
			type: "GOT_ENDDATE",
			date
		};
	}
};
export const setMessage = (message) => {
	return {
		type: "GOT_MESSAGE",
		message
	};
};
export const calculateSMA = (currency, day, days) => {
	return(dispatch) => {
		const limit = days + 20;
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		const url = 'https://min-api.cryptocompare.com/data/histoday?fsym=' + currency + '&tsym=EUR&limit=' + limit + '&toTs=' + day;
		return axios.get(proxyurl + url)
			.then((response) => {
				const open = [], close = [], high = [], low =[], sma = [];
				const data = response.data.Data;
				for (let set of data) {
					open.push(set.open);
					close.push(set.close);
					high.push(set.high);
					low.push(set.low);
				}
				for (let i = 0; i < days+1; i++) {
					//console.log(close);
					let arr = [...close];
					arr = arr.slice(i, i + 20);
					//console.log(arr);
					let sum = arr.reduce((prev, curr) => {
						return prev + curr;
					})
					sma.push((sum/20).toFixed(5));
					
				}
				console.log(sma);
				dispatch(gotSMA(sma));
			})
			.catch(function (error) {
    		console.log(error);
  			});
	}
};
export const gotSMA = (sma) => {
	return {
		type: "GOT_SMA",
		sma
	};
};