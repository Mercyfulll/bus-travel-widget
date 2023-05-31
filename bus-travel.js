function busTravel(){

//R40 - 40 points
    let cost = 0
    let tripNum = 0
    let cost2  = 0
    let tripNum2 = 0  
    let cost3 = 0
    let cost4 = 0 

    function costPricePerTrip(destination){
        if(destination === "Khayelitsha"){
            cost = 40
        }
        if (destination === "Dunoon"){
            cost = 25
        }
        if(destination === "Mitchells Plain"){
            cost = 30
        }

    }
    function getCostPrice(){
        return cost
    }
    function numberOfTrips(points, destination){
        if(destination === "Khayelitsha"){
            cost = 40
            tripNum = parseInt(points / cost) 

        }
        if (destination === "Dunoon"){
            cost = 25
            tripNum = parseInt(points / cost)

        }
        if(destination === "Mitchells Plain"){
            cost = 30
            tripNum = parseInt(points / cost)
        }

    }
    function getNumberOfTrips(){
        return tripNum
    }
    function numberOfReturnTrips(points, destination){
        if(destination === "Khayelitsha"){
            cost2 = 2 * 40
            tripNum2 = parseInt(points / cost2) 

        }
        if (destination === "Dunoon"){
            cost2 = 2 * 25
            tripNum2 = parseInt(points / cost2)

        }
        if(destination === "Mitchells Plain"){
            cost2 = 2 * 30
            tripNum2 = parseInt(points / cost2)
        }

    }
    function getNumberOfReturn(){
        return tripNum2
    }
    function costPricePerReturn(destination){
        if(destination === "Khayelitsha"){
            cost3 = 2 * 40
        }
        if (destination === "Dunoon"){
            cost3 = 2 * 25
        }
        if(destination === "Mitchells Plain"){
            cost3 = 2 * 30
            
        }

    }
    function getCostPriceReturn(){
        return cost3
    }
    function timeBasePrice(time, destination){
        if(time === 'peak' && destination === "Khayelitsha"){
            cost4 = 40 + (40 * 0.25) 
        }
        if(time === 'peak' && destination === "Dunoon"){
            cost4 = 25 + (25 * 0.25)
        }
        if(time === "peak" && destination === "Mitchells Plain"){
            cost4 = 30 + (30 * 0.25)
        }
        if(time === 'offpeak' && destination === "Khayelitsha"){
            cost4 = 40
        }
        if(time === 'offpeak' && destination === "Dunoon"){
            cost4 = 25 
        }
        if(time === "offpeak" && destination === "Mitchells Plain"){
            cost4 = 30 
        }
    }
    function getTimeBased(){
           return cost4
        }
    return{
        costPricePerTrip,
        getCostPrice,
        numberOfTrips,
        getNumberOfTrips,
        numberOfReturnTrips,
        costPricePerReturn,
        timeBasePrice,
        getCostPriceReturn,
        getNumberOfReturn,
        getTimeBased
        
    }
}
