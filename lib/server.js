const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/explorers/:mission", (request, response) => {
    const mission=request.params.mission;
    const explorersInMission=ExplorerController.getExplorerByMission(mission);
    response.json(explorersInMission);
});
app.get("/v1/explorers/Amount/:mission",(request,response)=>{
    console.log(`Get by ID Explorers V1 Api ${new Date()}`);
    const mission=request.params.mission;
    const explorersAmountInMission=ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission: mission, quantity: explorersAmountInMission});
});
app.get("/v1/explorers/usernames/:mission",(request,response)=>{
    console.log(`Get by ID Explorers V1 Api ${new Date()}`);
    const mission=request.params.mission;
    const explorersUserInMission=ExplorerController.getExplorerUsernamesByMission(mission);
    response.json({mission: mission, explorers: explorersUserInMission});
});


app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});