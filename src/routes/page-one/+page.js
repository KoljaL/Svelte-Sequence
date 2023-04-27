let color = 'color: greenyellow;';
let ms = performance.now();

console.log('%croutes/page-one/+page.js', color, ms);

export async function load({}) {
	let data = {
		// 'page params': params,
		'data from page-one/+page.js': ms,
		blockingPromise: await blockingPromise(1000)
	};
	return data;
}

async function blockingPromise(timeout) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
			console.log('%cPromise resolved', color, ms);
		}, timeout);
	}).then(function (result) {
		return 'your data';
	});
}

// async function doAPromise(success, timeout) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (success) {
// 				resolve();
// 				console.log('%cPromise resolved', color, ms);
// 			} else {
// 				reject({ message: 'Promise rejected' });
// 			}
// 		}, timeout);
// 	}).then(function (result) {
// 		return 'your data';
// 	});
// }

// async function asyncLoadData(bool, timeout) {
// 	try {
// 		return await doAPromise(bool, timeout);
// 	} catch (e) {
// 		return 'no data';
// 	}
// }
