import { Controller } from "stimulus"

export default class extends Controller {
	static targets = ["source"]

  connect() {
    if (document.queryCommandSupported("copy")) {
      this.element.classList.add("clipboard--supported")
    }
  }

	copy(event) {
		event.preventDefault()
		console.log(this.source)
		this.sourceTarget.select()
		document.execCommand("copy")
	}

	get source() {
		return this.sourceTarget.value
	}

}
