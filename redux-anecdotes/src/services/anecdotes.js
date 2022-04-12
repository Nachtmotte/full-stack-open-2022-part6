const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await fetch(baseUrl);
  return await response.json();
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(object),
  });
  return await response.json();
};

const update = async (id, object) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(object),
  });
  return await response.json();
};

const anecdoteService = { getAll, createNew, update };

export default anecdoteService;
