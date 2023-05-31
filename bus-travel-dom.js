// Reference DOM elements
const points = document.querySelector(".points")
const dropdown = document.querySelector(".start")
const radioButton =  document.querySelector("input[name='radioBtn']:checked")
const checkBox = document.querySelector(".checkbox")
const calculateButton = document.querySelector(".calculate")
const singleTrip = document.querySelector(".tripnumber")
const priceTrip = document.querySelector(".pricetrip")
const returnTrip = document.querySelector(".returntrips")
const fullPrice = document.querySelector(".fulltrip")


// Create an Instance 
let bus = busTravel()

    calculateButton.addEventListener("click",function(){
        bus.costPricePerTrip(dropdown.value)
        bus.numberOfReturnTrips(points.value,dropdown.value)
        bus.costPricePerReturn(dropdown.value)
        bus.numberOfTrips(points.value,dropdown.value)
        singleTrip.innerHTML = bus.getNumberOfTrips()
        priceTrip.innerHTML = bus.getCostPrice()
        returnTrip.innerHTML = bus.getNumberOfReturn()
        fullPrice.innerHTML = bus.getCostPriceReturn()
})

