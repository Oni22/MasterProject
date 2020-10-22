//dummy db

var shops = [
    {
        id: "0",
        name: "Tante Emma",
        address: "Tantestraße 2",
        products: ["10","3"],
        createdAt: "1603026004",
        employees: 12,
        city: "Berlin",
        type: "market"
    },
    {
        id: "1",
        name: "Oma Lise",
        address: "Lisedamm 32",
        products: ["1","5"],
        createdAt: "1603026150",
        employees: 10,
        city: "Münster",
        type: "market"
    }
]

var products = [
    {
        id: "1",
        name: "Butter",
        weight: "200g",
        brand: "Berliner Butter",
        sku: "berliner-butter",
        stock: 20,
        price: "1,10 €",
        chargenumber: "341",
        manufacturer: "Berlin Milk Company"
    },
    {
        id: "5",
        name: "Nutella",
        weight: "150g",
        brand: "Ferrero",
        sku: "ferrero-nutella",
        stock: 120,
        price: "2,30 €",
        chargenumber: "413",
        manufacturer: "Ferroro"
    },
    {
        id: "3",
        name: "Eier",
        weight: "100g",
        brand: "Chicken Eggs",
        sku: "chicken-eggs-eier",
        stock: 320,
        price: "0,80 €",
        chargenumber: "543",
        manufacturer: "Eiermann & Co. Kg"
    },
    {
        id: "10",
        name: "Käse",
        weight: "200g",
        brand: "Proteinkäse",
        sku: "protein-kase",
        stock: 45,
        price: "1,40 €",
        chargenumber: "431",
        manufacturer: "Proto GmbH"
    }
]

module.exports = {
    products,
    shops
}