export const validationRules = {
	email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
	password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/,
	passwordMessage: 'Password must contain uppercase and lowercase characters, numbers, special character and must be minimum 8 character long.',
	characters: /^[a-zA-Z_ ]*$/,
	numbers: /^[0-9]*$/,
	removeWhitespace: /^[a-zA-Z0-9]+$/,
	numberNew: /^[0-9]*$/,
	numberWithDot: /^\d*(\.\d{0,10})?$/,
}
// export const preventMaxInput = (e) => {
// 	e.target.value = e.target.value.trimStart()
// 	e.target.value = e.target.value.replace(/  +/g, ' ')
// }

// export const FloatInput = (event) => {
// 	if (event) {
// 		const char = String.fromCharCode(event.which)
// 		if (!/^\d*(\.\d{0,2})?$/.test(char)) {
// 			event.preventDefault()
// 		}
// 	}
// }

// export const NumberInput = (event) => {
// 	if (event) {
// 		const char = String.fromCharCode(event.which)
// 		if (!/[0-9]/.test(char)) {
// 			event.preventDefault()
// 		}
// 	}
// }
// export const preventMax = (e, max) => {
// 	if (e.target.value.length > max) {
// 		e.target.value = e.target.value.slice(0, max)
// 	}
// }
// export const NumberInputNew = (event) => {
// 	if (event) {
// 		if (!['Backspace', 'Delete', 'Tab'].includes(event.key) && !/[0-9]/.test(event.key)) {
// 			event.preventDefault()
// 		}
// 	}
// }

// export const NumberInputWithDot = (event) => {
// 	if (event) {
// 		const char = String.fromCharCode(event.which)
// 		if (!/^[0-9]*\.?[0-9]*$/.test(char)) {
// 			event.preventDefault()
// 		}
// 	}
// }
