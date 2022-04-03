function autoCompany(input) {

    let cars = new Map();

    for (const i of input) {
        let [carBrand, carModel, carProduced] = i.split(' | ');

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }
        let models = cars.get(carBrand);

        if (!models.has(carModel)) {
            models.set(carModel, 0);
        }
        models.set(carModel, models.get(carModel) + Number(carProduced));
    }

    for (const carBrand of cars.keys()) {
        console.log(carBrand);
        let models = cars.get(carBrand);

        for (const carModel of models.keys()) {
            console.log(`###${carModel} -> ${models.get(carModel)}`);
        }
    }
}
autoCompany(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
)