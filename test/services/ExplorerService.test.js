const ExplorerService= require("../../lib/services/ExplorerServices");


describe("Test Para ExplorerService",()=>{
    test("Requerimiento 2: Calcular todo los explorers en una misión",()=>{
        const explorer=[{mission:"node"}]
        const explorerInNode=ExplorerService.filterByMission(explorer, "node")
        expect(explorerInNode.length).toBe(1);
    })
    test("Requerimientos 3: Obetener una lista de usuarios de github de los explorers que estan en node",()=>{
        const explorers=
            [
                {
                  name: 'Woopa1',
                  githubUsername: 'ajolonauta1',
                  score: 1,
                  mission: 'node',
                  stacks: [ 'javascript', 'reasonML', 'elm' ]
                },
                {
                  name: 'Woopa2',
                  githubUsername: 'ajolonauta2',
                  score: 2,
                  mission: 'node',
                  stacks: [ 'javascript', 'groovy', 'elm' ]
                }];
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        expect(usernamesInNode).toContain("ajolonauta1","ajolonauta2","ajolonauta3");
    })
})