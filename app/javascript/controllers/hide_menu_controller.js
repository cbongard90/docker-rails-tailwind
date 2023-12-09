import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hide-menu"
export default class extends Controller {
  static targets = ["menu"]

  connect() {
    console.log("Connected to hide menu");
  }

  toggleMenu() {
    this.menuTarget.classList.toggle("hidden");
  }
}
