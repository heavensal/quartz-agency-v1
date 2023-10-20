import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ['menu']

  connect() {
    console.log('hello !');
  }

  toggle() {
    console.log('ca toggle');
    this.menuTarget.classList.toggle('toggle');
  }
}
