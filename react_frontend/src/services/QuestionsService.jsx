import http from "../http-common";

async function getAll() {
  let result;
  try {
      result = http.get("/questions");
  }
  catch (err) {
    alert(err);
  }
  return result;
}

async function create(data) {
  let result;
  try {
    result = http.post("/questions", data);
  } catch (err) {
    alert(err);
  }
  return result;
}

const QuestionsService = {
  getAll,
  create,
};

export default QuestionsService;
