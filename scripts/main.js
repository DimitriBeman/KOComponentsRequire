requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    /*
    paths: {
        app: '../app'
    }
    */
});

console.log("main.js");

require(["viewModels/myViewModel", "helper/utils"], function(ko, utils) {
	utils.log("Ricardo");
});