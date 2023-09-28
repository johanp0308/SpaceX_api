import apiQuerys from "./storages/v3.js"

// let dos = await apiQuerys.getAllImgLaunches();

let imgRock = await apiQuerys.getAllImgRockets();

console.log(imgRock);
