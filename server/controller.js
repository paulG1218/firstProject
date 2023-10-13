const cars = [
    {
        year: 2012, 
        make: 'Volkswagen', 
        model: 'Golf', 
        mileage: 54201, 
        engineSize: '2.6', 
        img: '',
        id: 0
    },

    {
        year: 2015, 
        make: 'Subaru', 
        model: 'Outback', 
        mileage: 76024, 
        engineSize: '2.3',
        img: '',
        id: 1
    },
    
    {
        year: 2013, 
        make: 'Audi', 
        model: 'A4', 
        mileage: 114820, 
        engineSize: '1.2',
        img: '',
        id: 2
    },

    {year: 2019, 
        make: 'Volkswagen', 
        model: 'Golf', 
        mileage: 110705, 
        engineSize: '2.9',
        img: '',
        id: 3
    },
    
    {
        year: 2009, 
        make: 'Toyota', 
        model: 'Camry', 
        mileage: 95278, 
        engineSize: '3.9',
        img: '',
        id: 4
    },
    
    {year: 2022, 
        make: 'Honda', 
        model: 'Civic', 
        mileage: 115585, 
        engineSize: '2.3',
        img: '',
        id: 5
    },

    {
        year: 2001, 
        make: 'Audi', 
        model: 'Q5', 
        mileage: 142484, 
        engineSize: '2.4',
        img: '',
        id: 6
    },

    {
        year: 2019, 
        make: 'Nissan', 
        model: 'Altima', 
        mileage: 49726, 
        engineSize: '1.9', 
        img: '',
        id: 7
    },

    {year: 2004, 
        make: 'BMW', 
        model: '3 Series', 
        mileage: 104853, 
        engineSize: '3.4',
        img: '',
        id: 8
    },
    
    {
        year: 2009,
         make: 'Subaru', 
         model: 'Outback', 
         mileage: 133756, 
         engineSize: '3.1',
         img: '',
         id: 9
    },
]

let globalId = 10

const handlerFunctions = {

    sendCarData: (req, res) => {
        res.send(cars)
    },

    editCar: (req, res) => {
        const {id} = req.params
        const {year, make, model, mileage, engineSize} = req.body

        const idx = cars.findIndex(car => car.id === +id)
        const carTarget = cars[idx]
        console.log(idx)
        console.log(carTarget)
        carTarget.year = +year
        carTarget.make = make
        carTarget.model = model
        carTarget.mileage = +mileage
        carTarget.engineSize = +engineSize
        
        res.send(carTarget)
    },

    addCar: (req, res) => {

        const newCar = {
            id: globalId,
            year: 0,
            make: '',
            model: '',
            mileage: 0,
            engineSize: 0,
        }

        cars.push(newCar)

        globalId ++

        res.send(newCar)
    }

}

export default handlerFunctions