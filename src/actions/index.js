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
export const setActive = (prop) => {
		return {
			type: "TOGGLE_LINE",
			prop
		};
};
export const setMessage = (message) => {
	return {
		type: "GOT_MESSAGE",
		message
	};
};
export const calculateSMA = (currency, day, days) => {
	return(dispatch) => {
		const limit = days + 199;
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		const url = 'https://min-api.cryptocompare.com/data/histoday?fsym=' + currency + '&tsym=EUR&limit=' + limit + '&toTs=' + day;
		return axios.get(proxyurl + url)
			.then((response) => {
				const time = [], open = [], close = [], high = [], low =[], sma200 = [], sma100 = [], sma50 = [], sma20 = [];
				const data = response.data.Data;
				
				for (let set of data) {
					time.push((new Date(set.time*1000)).toDateString());
					open.push(set.open);
					close.push(set.close);
					high.push(set.high);
					low.push(set.low);
				}
				
				for (let i = 180; i <= days+180; i++) {
					
					let arr = [...close];
					if(arr.length>0) {
						arr = arr.slice(i, i + 20);
						
						let sum = arr.reduce((prev, curr) => {
							return prev + curr;
						})
						sma20.push((sum/20).toFixed(5));
					} else dispatch(setMessage('Some data is missing in this date range, please choose another range!'))
				}
				
				

				for (let i = 150; i <= days+150; i++) {
					
					let arr = [...close];
					if(arr.length>0) {
						arr = arr.slice(i, i + 50);
						
						let sum = arr.reduce((prev, curr) => {
							return prev + curr;
						})
						sma50.push((sum/50).toFixed(5));
					} else dispatch(setMessage('Some data is missing in this date range, please choose another range!'))
				}
				
				for (let i = 100; i <= days+100; i++) {
					
					let arr = [...close];
					if(arr.length>0) {
						arr = arr.slice(i, i + 100);
						
						let sum = arr.reduce((prev, curr) => {
							return prev + curr;
						})
						sma100.push((sum/100).toFixed(5));
					} else dispatch(setMessage('Some data is missing in this date range, please choose another range!'))
				}
				for (let i = 0; i <= days; i++) {
					
					let arr = [...close];
					if(arr.length>0) {
						arr = arr.slice(i, i + 200);
						
						let sum = arr.reduce((prev, curr) => {
							return prev + curr;
						})
						sma200.push((sum/200).toFixed(5));
					} else dispatch(setMessage('Some data is missing in this date range, please choose another range!'))
				}
				const data1 = sma20.map((detail, i) => {
					return {
						time: time[i+199], //(new Date(Number(data[i+199].time) * 1000)).toDateString(),
						open: open[i+199],
						close: close[i+199],
						high: high[i+199],
						low: low[i+199],
						sma20: +detail, 
						sma50: +sma50[i],
						sma100: +sma100[i],
						sma200: +sma200[i]
					}
				})
		
				if(close.length>0) {
					
					dispatch(gotData(data1));
				}
			})
			.catch(function (error) {
    		console.log(error);
  			});
	}
};


export const gotData = (data) => {
	return {
		type: "GOT_DATA",
		data
	};
};