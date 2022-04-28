const ExplorerService= require("../../lib/services/ExplorerServices");
const FizzbuzzService=require("../../lib/services/FizzBuzzService")


describe("Test Para ExplorerService",()=>{
    test("Ejercicio 1 Requerimiento 2: Calcular todo los explorers en una misión",()=>{
        const explorer=[{mission:"node"}]
        const explorerInNode=ExplorerService.filterByMission(explorer, "node")
        expect(explorerInNode.length).toBe(1);
    });
    test("Ejercicio 1 Requerimientos 3: Obetener una lista de usuarios de github de los explorers que estan en node",()=>{
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
        expect(usernamesInNode).toContain("ajolonauta1");
    });
    test("Ejercicio 2 Requerimiento 1: Obtener validación de explorers con score divisble en 3 y trick Fizz",()=>{
        const explorer1 = {name: "Explorer1", score: 1}
        const Fizz=FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(Fizz).toContain(1)

    });
})