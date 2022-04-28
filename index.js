const Reader=require("./lib/utils/Reader.js")
const ExplorerService=require("./lib/services/ExplorerServices.js")
const FizzBuzzService=require("./lib/services/FizzBuzzService")

/// Part 1 Read json file ===========================
//const rawdata = fs.readFileSync("explorers.json");
//const explorers = JSon.parse(rawdata);

//Parte 1 Reader 
const explorers=Reader.readJsonFile("explorers.json")
//console.log(explorers)

//Parte 1 Explorer Service 
const explorerInNode=ExplorerService.filterByMission(explorers, "node")
//console.log(explorerInNode)

//parte 2 Explorer Service
const explorerInNodeAmount=ExplorerService.getAmountOfExplorersByMission(explorers, "node")
//console.log("Hay "+explorerInNodeAmount+" explorers que estan la mision node")

//Parte 3 Explorer Service
const explorerByUser=ExplorerService.getExplorersUsernamesByMission(explorers, "node")
//console.log(explorerByUser)

//Parte 4 FizzBuzz service
const FizzBuzz= explorers.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
console.log(FizzBuzz)