class CopyToClipboard {
	constructor() {
	  this.textToCopy = document.getElementById("textToCopy");
	  this.copyButton = document.getElementById("copyButton");
	  this.initialize();
	}
  
	initialize() {
	  this.copyButton.addEventListener("click", () => this.copyText());
	}
  
	async copyText() {
	  try {
		await navigator.clipboard.writeText(this.textToCopy.textContent);
		this.updateButtonText("COPIED!");
	  } catch (err) {
		console.error("Unable to copy text: ", err);
	  }
	}
  
	updateButtonText(text) {
	  this.copyButton.textContent = text;
  
	  setTimeout(() => {
		this.copyButton.textContent = "Copy Ca";
	  }, 1500);
	}
  }
  
  document.addEventListener("DOMContentLoaded", () => {
	new CopyToClipboard();
  });