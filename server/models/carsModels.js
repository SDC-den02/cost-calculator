const session = require('../db/neo4j/connection');
// n is a variable, it is used as a references to a node
//(ACTION(var: Label) {parameter: paramValue})
// CREATE doesn't need a return
// MATCH finds a property. With SET it updates it

module.exports = {
    postCarPrice(data) {
        session
            .run('CREATE(n:Price {price:{priceParam}}) RETURN n.price', {priceParam})
            .then()
            .catch()
    },
    readCarPrice(id) {
        session
            .run('MATCH(n:Id) RETURN n LIMIT 5')
            .then((result) => {
                result.records.forEach((record) => {
                    console.log(record._fields[0].properties);
                })
            })
            .catch((error) => {
                console.log(error)
            })
        console.log('IT WORKS!');
    },
    updateCarPrice() {
        session
            .run('MATCH(n:')
            .then()
            .catch()
    },
    deleteCarPrice(){
        session
            .run('MATCH(n:')
            .then()
            .catch()
}