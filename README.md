

# What is clustering ?
- Clustering in Node.js allows to create separate processes which can share same server port. For example, if we run one HTTP server on       Port 3000, it is one Server running on a Single thread on a single core of the processor.
- But I want to take advantage of all core available on my machine. So I will cluster my application and run them on all cores. So if I run   one server on Port 3000 by having 4 core processor then actually I am running 4 servers all are listening to Port 3000.
- So if one server goes down the other is there to take the place of it, also in peak load of traffic, Node will automatically allocate the   worker to particular process so basically it does internal load balancing very efficiently.
- Example code on how to create worker nodes: cluster.js
