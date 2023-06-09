let color = 'color: mediumorchid;';
let ms = performance.now();

console.log('%croutes/page-one/+layout.js', color, ms);

export async function load() {
	let data = {
		// 'layout params': params,
		'data from +layout.js': ms,
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
