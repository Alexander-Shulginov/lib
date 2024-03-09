export default function textAreaAutoHeight(elem) {
	const textAreaElems = document.querySelectorAll(`${elem}`);
	textAreaElems.forEach((item) => {
		item.addEventListener('input', () => {
			item.style.height = `${item.scrollHeight}px`;
		});
	});
}

textAreaAutoHeight('.text-area-elem');