import { Controller } from "stimulus"

export default class extends Controller {
	static targets = ["name"]
	connect() {
		console.log("It's alive!", this.element)
	}
	greet() {
		console.log(`Hello, ${this.name}!`)
	}
	get name() {
		return this.nameTarget.value
	}
}
