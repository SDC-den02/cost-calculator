var neo4j = require('neo4j-driver');

var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j','test'));
var session = driver.session(); 

// const connect = async function() {
//     try {
        // await
         driver.verifyConnectivity();
        console.log('Driver created');
//     } catch (error) {
//         console.log(`Connectivity verification failed. ${error}`);
//     }
// }

// const create = async function() {
//     try {
//         await session.run('CREATE (i:Item)');
//     } catch (error) {
//         console.log(`unable to execute query. ${error}`)
//     } finally {
//         await session.close()
//     }
// }

// connect();
// create();

// await
driver.close();