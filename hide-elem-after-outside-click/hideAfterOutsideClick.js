export default function hideAfterOutsideClick(elem, emitter, css) {
	window.addEventListener('click', (event) => {
		const activeElemIsClicked = elem.contains(event.target);
		const emitterIsArray = emitter.length > 1;
		const emitterIsClicked = emitterIsArray
			? Array.from(emitter).some((emit) => emit.contains(event.target))
			: emitter.contains(event.target);

		if (!activeElemIsClicked && !emitterIsClicked) {
			elem.classList.remove(css);
		}
	});
}
