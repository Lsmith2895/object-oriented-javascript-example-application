export class counter {
  constructor(number, currentCount){
    this.number = number;
    this.currentCount = currentCount
  }

  getCount(){
    return this.currentCount
  }

  setCount(number){
    this.currentCount = number
    return this.currentCount
  }
}

