//native node.js library
var cluster = require("cluster");
//To check the number of cores available.
var numCPUs = require("os").cpus().length;

// Checks if cluster has worker nodes or if it is master only
if (cluster.isMaster) {
  // Forks new worker nodes depending on the number of cores available.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Prints each worker node's process id
  Object.keys(cluster.workers).forEach(function(id) {
    console.log("I am running with ID : " + cluster.workers[id].process.pid);
  });

  // Prints the process id of the worker node which is dead
  cluster.on("exit", function(worker, code, signal) {
    console.log("worker " + worker.process.pid + " died");
  });
} else {
  //change this line to Your Node.js app entry point.
  require("./app.js");
}
