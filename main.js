const pass = document.getElementById('password');
const btn = document.getElementById('btn');
const clipboard = document.getElementById('clipboard');

clipboard.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const password = pass.value;
	// console.log(password);
	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	alert("Password copied to clipboard")

})
btn.addEventListener("click", () => {
	const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
	let password = "";
	const passLength = 16;

	for(var i = 0; i <passLength; i++){
		let random = Math.floor(Math.random() * chars.length);
		// console.log(chars[Math.floor(Math.random() * chars.length)]);
		// password += chars.substring(random,random+1);
		password += chars[random]
	}
	pass.value = password;

})


