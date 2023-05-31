describe("The costPricePerTrip function", function(){
    it("It should return 40 if destination is Khayelitsa",function(){
        
        let travel = busTravel()
        travel.costPricePerTrip("Khayelitsha")

        assert.equal(40,travel.getCostPrice())
    })

    it("It should return 25 if destination is selected is Dunoon",function(){
        
        let travel = busTravel()
        travel.costPricePerTrip("Dunoon")

        assert.equal(25,travel.getCostPrice())
    })

    it("It should return 30 if destination is selected is Mitchells Plain",function(){
        
        let travel = busTravel()
        travel.costPricePerTrip("Mitchells Plain")

        assert.equal(30,travel.getCostPrice())
    })
})
    describe("The numberOfTrip function", function(){
        it("It should return 1 trip if points is 40 and destination is Khayelitsa",function(){
            
            let travel = busTravel()
            travel.numberOfTrips(45, "Khayelitsha")
            
           // assert.equal(0,travel.getCostPrice())
            assert.equal(1,travel.getNumberOfTrips())
        })

        it("It should return 4 trips if points is 140 and destination is Mitchells Plain",function(){
            
            let travel = busTravel()
            travel.numberOfTrips(140, "Mitchells Plain")
            
           // assert.equal(0,travel.getCostPrice())
            assert.equal(4,travel.getNumberOfTrips())
        })

        it("It should return 3 trips if points is 80 and destination is Dunoon",function(){
            
            let travel = busTravel()
            travel.numberOfTrips(80, "Dunoon")
            
           // assert.equal(0,travel.getCostPrice())
            assert.equal(3,travel.getNumberOfTrips())
        })

})
    describe("The numberOfReturnTrip function", function(){
            it("It should return 0 trip if points is 50 and destination is Khayelitsa",function(){
                
                let travel = busTravel()
                travel.numberOfReturnTrips(50, "Khayelitsha")
                
               // assert.equal(0,travel.getCostPrice())
                assert.equal(0,travel.getNumberOfReturn())
            })

            it("It should return 1 trip if points is 50 and destination is Dunoon",function(){
                
                let travel = busTravel()
                travel.numberOfReturnTrips(50, "Dunoon")
                
               // assert.equal(0,travel.getCostPrice())
                assert.equal(1,travel.getNumberOfReturn())
            })

            it("It should return 4 trip if points is 200 and destination is Dunoon",function(){
                
                let travel = busTravel()
                travel.numberOfReturnTrips(200, "Dunoon")
                
               // assert.equal(0,travel.getCostPrice())
                assert.equal(4,travel.getNumberOfReturn())
            })
})
    describe("The costPricePerReturn function", function(){
        it("It should return 80 if destination is Khayelitsa",function(){
            
            let travel = busTravel()
            travel.costPricePerReturn("Khayelitsha")
            
        // assert.equal(0,travel.getCostPrice())
            assert.equal(80,travel.getCostPriceReturn())
        })

        it("It should return 50 if destination is Dunoon",function(){
            
            let travel = busTravel()
            travel.costPricePerReturn("Dunoon")
            
        // assert.equal(0,travel.getCostPrice())
            assert.equal(50,travel.getCostPriceReturn())
        })

        it("It should return 60 if destination is Mitchells Plain",function(){
            
            let travel = busTravel()
            travel.costPricePerReturn("Mitchells Plain")
            
        // assert.equal(0,travel.getCostPrice())
            assert.equal(60,travel.getCostPriceReturn())
        })

})  
describe("The timeBasePricefunction", function(){
    it("It should return 50 if destination is Khayelitsa its peak time",function(){
        
        let travel = busTravel()
        travel.timeBasePrice("peak","Khayelitsha")
        
    // assert.equal(0,travel.getCostPrice())
        assert.equal(50,travel.getTimeBased())
    })

    it("It should return 25 if destination is Dunoon and its offpeak",function(){
        
        let travel = busTravel()
        travel.timeBasePrice("offpeak","Dunoon")
        
    // assert.equal(0,travel.getCostPrice())
        assert.equal(25,travel.getTimeBased())
    })

    it("It should return 60 if destination is Mitchells Plain and its peak",function(){
        
        let travel = busTravel()
        travel.timeBasePrice("peak","Mitchells Plain")
        
    // assert.equal(0,travel.getCostPrice())
        assert.equal(37.5,travel.getTimeBased())
    })
    
})