function House(beds){
    this.beds = beds;
}
var myHouse = new House(2);
console.log(myHouse instanceof House);