/*globals module */
/*
    Module to define all the Configurations required
*/
let Config = function () {
	return {
		//mongodb://ahmednagy:<password>@cluster0-shard-00-00-5p48n.mongodb.net:27017,cluster0-shard-00-01-5p48n.mongodb.net:27017,cluster0-shard-00-02-5p48n.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
		//dbPath: "mongodb+srv://ahmednagy:Ahmed1991@cluster0-5p48n.mongodb.net/test?retryWrites=true&w=majority/Tracking", 
		dbPath: process.env.CONN
	};
};

module.exports = new Config();