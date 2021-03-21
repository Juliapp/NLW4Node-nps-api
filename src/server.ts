import express from 'express';

const app = express();
app.use(express.json())

app.get("/", (request, response) => {
  return response.send("Hello world NLW4")
})
app.post("/", (request, response) => {
  return response.send("Os dados foram salvos com sucesso")
})


app.listen(3333, () => {
  console.log("Server is running");
})