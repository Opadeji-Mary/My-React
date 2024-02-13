import { createServer } from "miragejs";

export const backEx = () =>{
    createServer({
        routes () {
            this.get('/api/users', ()=>({
                users : [
                    {
                       id: '1',
                       name: "jude", 
                       gender: "male",
                       eyecolor: "brown",
                       skincolor: "black"
                    },
                    {
                        id: '2',
                        name: "james", 
                        gender: "male",
                        eyecolor: "brown",
                        skincolor: "black"
                    },
                    {
                        id: '3',
                        name: "adebayo", 
                        gender: "male",
                        eyecolor: "brown",
                        skincolor: "black"
                    }
                ]
            }))
        }
    })
}