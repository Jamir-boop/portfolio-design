function hover_emoji() {
	const emojis = [
		"⚡",
		"🤯",
		"🤓",
		"💖",
		"😎",
		"🧐",
		"🙃",
		"😳",
		"🔥",
		"👀",
		"🚀",
	];
	const emoji_span = document.getElementById("emoji");
	emoji_span.innerHTML = emojis[0];
	document
		.getElementById("main__paragraph")
		.addEventListener("mouseenter", () => {
			emoji_span.innerHTML =
				emojis[Math.floor(Math.random() * emojis.length)];
		});
}
hover_emoji();


