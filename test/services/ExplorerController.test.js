const ExplorerController = require("./../../lib/controllers/ExplorerController");
const ExplorerService=require("./../../lib/services/ExplorerServices")
const Reader=require("./../../lib/utils/Reader")

describe("Test Para ExplorerController",()=>{
    test("Ejercicio 3 Requerimiento 1: Lista de los Explorers con la mision node",()=>{
        const explorers=Reader.readJsonFile('explorers.json')
        const explorerByMission = explorers.filter((explorer) => explorer.mission == "node");
        const Explorers_1=ExplorerController.getExplorerByMission("node")
        expect(explorerByMission).toStrictEqual(Explorers_1);
    })
    test("Ejercicio 3 Requerimiento 2: lista de los userexplorers",()=>{
        const list=Reader.readJsonFile('explorers.json')
        const getExplorers=ExplorerService.getExplorersUsernamesByMission(list,"node")
        const Explorers_2=ExplorerController.getExplorerUsernamesByMission("node")
        expect(getExplorers).toStrictEqual(Explorers_2);
    })
    test("Ejercicio 3 Requerimiento 2: lista de los userexplorers",()=>{
        const list=Reader.readJsonFile('explorers.json')
        const AmountExplorer=ExplorerService.getAmountOfExplorersByMission(list,"node")
        const Explorers_3=ExplorerController.getExplorersAmountByMission("node")
        expect(AmountExplorer).toStrictEqual(Explorers_3);
    })
})