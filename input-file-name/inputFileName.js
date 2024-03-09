
export default function nameInputFiles() {
	const inputFIleWrap = document.querySelectorAll('[data-file-container]');

	if (inputFIleWrap.length === 0) {
		console.error('DOM element inputFIleWrap not found on this page');
		return;
	}

	function getInputFiles(event) {
		return event.target.files;
	}

	function getFileName(file) {
		return file.name;
	}

	function createTextElem(file) {
		const fileNameWrap = document.createElement('div');
		fileNameWrap.textContent = getFileName(file);
		return fileNameWrap;
	}

	function addNameSelectedFiles(elems, index, event) {
		for (const file of getInputFiles(event)) {
			elems[index].appendChild(createTextElem(file));
		}
	}

	inputFIleWrap.forEach((inputFile) => {
		const inputElems = inputFile.querySelectorAll('[type=file]');
		const fileNameElems = inputFile.querySelectorAll('[data-file-name]');

		inputElems.forEach((input, index) => {
			input.addEventListener('change', (event) => addNameSelectedFiles(fileNameElems, index, event));
		});
	});
}