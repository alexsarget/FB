const Reader=require("./../utils/Reader");
const ExplorerService=require("./../services/ExplorerServices");

class ExplorerController{
    static getExplorerByMission(mission){
        const list=Reader.readJsonFile("explorers.json");
        const Explorer=ExplorerService.filterByMission(list,mission);
        return Explorer;
    }
    static getExplorerUsernamesByMission(mission){
        const list=Reader.readJsonFile("explorers.json");
        const getExplorers=ExplorerService.getExplorersUsernamesByMission(list,mission);
        return getExplorers;
    }

    static getExplorersAmountByMission(mission){
        const list=Reader.readJsonFile("explorers.json");
        const AmountExplorer=ExplorerService.getAmountOfExplorersByMission(list,mission);
        return AmountExplorer;
    }
}

module.exports=ExplorerController;