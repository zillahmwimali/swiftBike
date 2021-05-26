class Bike{
    constructor(bike,rider,client_Orders){
        this.bike=bike;
        this.rider=rider;
        this.client_Orders=client_Orders;
    }
    addBike(registration,name,bikeOwner,phoneNumber,address){
        let bike={  /* a new bike has to contain information such as the reg,name,
                        the owner,phone number and address.This object holds these specs of the bike.*/
            registration:registration,
            name:name,
            bikeOwner:bikeOwner,
            phoneNumber:phoneNumber,
            address:address,
        
        }
        return this.bike.push(bike);//admitting a new bike to the system.
    }
    removeBike(registration){
        var bikeX=this.bike.find(bikeX=>registration===registration);
        return delete this.bike[bikeX]
    }
    updateBike(registration,name,bikeOwner,phoneNumber,address){
        let newBike=this.bike.find(newBike=>name===this.bike.name);
        newBike={
            registration:registration,
            name:name,
            bikeOwner:bikeOwner,
            phoneNumber:phoneNumber,
            address:address,

        }
        return newBike
    }
getBike(registration){// tracking the rider of a bike by the registration
    let bikeY=this.bike.find(bikeY=>bikeY.registration===registration);
    return bikeY

}
recruitRider(name,Id,licence,location,registration){//credentials of a rider
    let rider={
        name:name,
        Id:Id,
        licence:licence,
        location:location,
        registration:registration
    }

    return this.rider.push(rider);//new rider admitted to the system
}
dismissRider(name){
    var exRider=this.rider.find(exRider=>name===name);
    return delete this.rider[exRider];
}
// findBike(registration){
//     let missingBike=this.bike.find(missingBike=>bike.registration===this.rider.registration);
//      return missingBike;
//     }
orderRide(location){
        let riderLocation=this.rider.find(riderLocation=>location===this.rider.location);
        return riderLocation;
}

findRider(){
    for( let each of this.rider){
    console.log(`${each.name},${each.location}`);
}
}
}
var motorBike =new Bike([],[],[],[])
console.log(motorBike.addBike("KMCN 123Z","BOXER","Martin Maina","072223344","Muranga"))
console.log(motorBike.addBike("KDFT 345T","TVS","Jane Nyawera","074676789","Nyeri"))
console.log(motorBike.addBike("KGHT 567Y","YAMAHA","Justus Kingi","076753453","Busia"))
console.log(motorBike.removeBike("KGHT 567Y"))
console.log(motorBike.updateBike("KJYU 900B","BOXER","Aisha Sahul","0782732027","Moyale"))
console.log(motorBike.getBike("KMCN 123Z"))
console.log(motorBike.recruitRider("Fatuma Wacheke",35247788,23423456767,"Makutano","KDFT 345T"))
console.log(motorBike.recruitRider("Fatuma Wacheke",35247788,23476676086,"Kona Mbaya","KGHT 095y"))
console.log(motorBike.recruitRider("Balala Sharif",452517788,89023456767,"Makutano","KVBN 785g"))
console.log(motorBike.dismissRider("Mashaka Shida"))
console.log(motorBike.findRider("Makutano"))
console.log(motorBike.findRider("Kona Mbaya"))
console.log(motorBike.orderRide())
console.log(motorBike.orderRide())








