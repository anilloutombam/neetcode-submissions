class Vehicle {
    getType(): string {
        throw new Error('getType method must be overridden');
    }
}

class Car extends Vehicle {
    getType(): string {
        return 'Car';
    }
}

class Bike extends Vehicle {
    getType(): string {
        return 'Bike';
    }
}

class Truck extends Vehicle {
    getType(): string {
        return 'Truck';
    }
}

class VehicleFactory {
    createVehicle(): Vehicle {
        throw new Error('createVehicle method must be overridden');
    }
}

class CarFactory extends VehicleFactory {
    // Write your code here
    createVehicle(): Vehicle {
        const myCar =new Car();
        return myCar

    }

}

class BikeFactory extends VehicleFactory {
    // Write your code here
     createVehicle(): Vehicle {
        const myBike =new Bike();
        return myBike

    }
}

class TruckFactory extends VehicleFactory {
    // Write your code here
    createVehicle(): Vehicle {
        const myTruck =new Truck();
        return myTruck

    }
}
