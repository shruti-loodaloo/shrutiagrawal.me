const gallery = {
  allPanels: [...document.querySelectorAll(".gallery-selected-item-box")],
  currentPanelIndex: 0,
  goNext: function () {
    if (this.currentPanelIndex < this.allPanels.length - 1) {
      this.currentPanelIndex = this.currentPanelIndex + 1;

      this.updateVisiblePanel();
    }
  },
  goBack: function () {
    if (this.currentPanelIndex > 0) {
      this.currentPanelIndex = this.currentPanelIndex - 1;

      this.updateVisiblePanel();
    }
  },
  updateVisiblePanel: function () {
    // 1. hide all the panels
    for (let i = 0; i < this.allPanels.length; i = i + 1) {
      this.allPanels[i].classList.remove("display-block");
    }
    // 2. show the panel with the index === this.currentPanelIndex
    this.allPanels[this.currentPanelIndex].classList.add("display-block");

    // 3. Hide the Next/Previous buttons if we're on the last or first index respectively
    const backButton = document.querySelector(
      ".gallery-button.gallery-button-back"
    );
    if (backButton) {
      if (this.currentPanelIndex === 0) {
        backButton.classList.add("gallery-button-hidden");
      } else {
        backButton.classList.remove("gallery-button-hidden");
      }
    }
    const nextButton = document.querySelector(
      ".gallery-button.gallery-button-next"
    );
    if (nextButton) {
      if (this.currentPanelIndex === this.allPanels.length - 1) {
        nextButton.classList.add("gallery-button-hidden");
      } else {
        nextButton.classList.remove("gallery-button-hidden");
      }
    }
  },
};
gallery.updateVisiblePanel();

function showGalleryClickedItem(id) {
  gallery.currentPanelIndex = gallery.allPanels.findIndex(
    (panel) => panel.id === id.toString()
  );
  gallery.updateVisiblePanel();
}

function removeDisplayBlockFromElementById(id) {
  let element = document.getElementById(id);
  element.classList.remove("display-block");
}
