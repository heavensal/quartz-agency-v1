import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static targets = ["track"];
  currentIndex = 0;

  connect() {
    this.updateCarousel();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.trackTargets.length - 1;
    }
    this.updateCarousel();
  }

  nextSlide() {
    if (this.currentIndex < this.trackTargets.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

  updateCarousel() {
    const slideWidth = this.trackTargets[0].clientWidth;
    const offset = -slideWidth * this.currentIndex;
    this.trackTargets.forEach(track => {
      track.style.transform = `translateX(${offset}px)`;
    });
  }
}
