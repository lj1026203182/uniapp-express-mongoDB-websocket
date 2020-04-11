export const dateTime = (time) => {
	let old = new Date(time),
		now = new Date()
	let d = old.getTime()
	let h = old.getHours()
	let m = old.getMinutes()
	let Y = old.getFullYear()
	let M = old.getMonth() + 1
	let D = old.getDate()
	let nd = now.getTime()
	let nh = now.getHours()
	let nm = now.getMinutes()
	let nY = now.getFullYear()
	let nM = now.getMonth() + 1
	let nD = now.getDate()

	// 当天时间
	if (D === nD && M == nM && Y === nY) {
		return timeFix(h) + ':' + timeFix(m)
	} else if (D + 1 === nD && M == nM && Y === nY) { // 昨天时间
		return '前天 ' + timeFix(h) + ':' + timeFix(m)
	} else {
		return Y + '/' + timeFix(M) + '/' + timeFix(D)
	}
}

const timeFix = data => {
	return data < 10 ? '0' + data : data
}
