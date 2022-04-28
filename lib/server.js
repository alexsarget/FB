const Reader=require("./utils/Reader");
const ExplorerController=require("./controllers/ExplorerController")

/// Part 1 Read json file ===========================
//const rawdata = fs.readFileSync("explorers.json");
//const explorers = JSon.parse(rawdata);

const Explorers_1=ExplorerController.getExplorersAmountByMission("node")

console.log(Explorers_1)