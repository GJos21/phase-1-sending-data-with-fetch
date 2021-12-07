function submitData(name, email) {

  const formData = {
    name: name,
    email: email,
  };
  
  const configObj = {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return (
    fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(obj => {
      const p = document.createElement("p");
      p.textContent = obj.id;
      document.querySelector("body").append(p);
    })
    .catch(err => {
      const p = document.createElement("p");
      p.textContent = err.message;
      document.querySelector("body").append(p);
    })
  );

}

