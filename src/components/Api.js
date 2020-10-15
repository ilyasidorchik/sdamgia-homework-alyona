const api = async(value) => {  
  const response = await fetch(
    `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
  );
  const data = await response.json();
  return data.subject;
};

export default api;