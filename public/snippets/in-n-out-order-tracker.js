class Order {
  constructor (state =1) {
    this.state = state;
  }
  
  advanceState (state) {
    this.state++;
  }

  currentState (state) {
    if(this.state === 1){
      return "Taking order";
    } else if (this.state === 2){
      return "Cooking order";
    } else if (this.state === 3){
      return "Requesting pickup of order";
    } else if (this.state === 4) {
      return "Order complete";
    }
  }
}

// create order instance #1
const order1 = new Order();
// create order instance #2
const order2 = new Order();

// advance state of #1
order1.advanceState();
// advance state of #1
order1.advanceState();
// advance state of #2
order2.advanceState();
// advance state of #1
order1.advanceState();

// print state of #1 to console
console.log(order1.currentState());
// print state of #2 to console
console.log(order2.currentState());