abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.rented) {
        alert(`This ${this.constructor.name.toLowerCase()} is already rented.`);
      } else {
        this.rented = true;
        alert(`You have rented this ${this.constructor.name.toLowerCase()}.`);
        this.render();
      }
    }
  
    return(): void {
      if (!this.rented) {
        alert(`This ${this.constructor.name.toLowerCase()} has not been rented.`);
      } else {
        this.rented = false;
        alert(`You have returned this ${this.constructor.name.toLowerCase()}.`);
        this.render();
      }
    }
  
    render(): void {
      const vehiclesContainer = document.getElementById('vehicles-container');
      const card = document.createElement('div');
      card.classList.add('vehicle-card');
      if (this.rented) {
        card.classList.add('rented');
      }
      card.innerHTML = `
        <h3>${this.constructor.name}</h3>
        <p>Make: ${this.make}</p>
        <p>Model: ${this.model}</p>
        <p>Year: ${this.year}</p>
        <p>Rented: ${this.rented ? 'Yes' : 'No'}</p>
        <button class="rent-button">Rent</button>
        <button class="return-button">Return</button>
      `;
      const rentButton = card.querySelector('.rent-button');
      rentButton.addEventListener('click', () => {
        this.rent();
      });
      const returnButton = card.querySelector('.return-button');
      returnButton.addEventListener('click', () => {
        this.return();
      });
      vehiclesContainer.appendChild(card);
    }
  }
  
  class Car extends Vehicle {
    numDoors: number;
    numSeats: number;
  
    constructor(
      make: string,
      model: string,
      year: number,
      rented: boolean,
      numDoors: number,
      numSeats: number
    ) {
      super(make, model, year, rented);
      this.numDoors = numDoors;
      this.numSeats = numSeats;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    render(): void {
      super.render();
      const card = document.querySelector(`.${this.constructor.name.toLowerCase()}-card`);
      const numDoorsP = document.createElement('p');
      numDoorsP.textContent = `Number of doors: ${this.numDoors}`;
      const numSeatsP = document.createElement('p');
      numSeatsP.textContent = `Number of seats: ${this.numSeats}`;
     
    }  