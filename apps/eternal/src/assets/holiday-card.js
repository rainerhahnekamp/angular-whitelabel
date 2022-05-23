class HolidayCard extends HTMLElement {
  container = document.createElement('div');
  h3 = document.createElement('h3');
  teaser = document.createElement('p');
  image = document.createElement('img');
  button = document.createElement('button');

  constructor() {
    super();
    this.button.textContent = 'Book';
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.container.append(this.h3, this.teaser, this.image, this.button);
    const style = document.createElement('style');
    style.textContent = 'img { max-width: 250px; height: auto; }';
    shadowRoot.append(style, this.container);

    this.button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('holidaySelected', this.holiday));
    });
  }

  static observedAttributes = ['holiday'];

  attributeChangedCallback(name, oldValue, newValue) {
    const holiday = JSON.parse(newValue);
    this.h3.textContent = holiday.title;
    this.teaser = holiday.description;
    this.image.src = holiday.imageUrl;
    this.holiday = holiday;
  }
}

customElements.define('holiday-card', HolidayCard);
