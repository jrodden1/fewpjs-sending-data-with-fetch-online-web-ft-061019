// Add your code here
// POST URL http://localhost:3000/users

// submitData()
//     1) makes a POST request to /user with a name and email
//     2) handles the POST request response, retrieves the new id value and appends it to the DOM
//     3) handles a failed POST request using catch, appends the error message to the DOM

function submitData(name, email) {
   const createUserUrl = "http://localhost:3000/users"
   const fetchOptions = {
      method: "POST",
      headers: { 
         "Content-Type": "application/json",
         "Accept": "application/json"
      },
      body: JSON.stringify({
         name, 
         email
      })
   }
   return fetch(createUserUrl, fetchOptions)
      .then(function(response) {
         return response.json();
      })
      .then(function(json) {
         console.log(json)
         const newId = document.createElement("p")
         newId.textContent = json["id"]
         document.body.appendChild(newId)
      })
      .catch(function(error) {
         const newErr = document.createElement("p")
         newErr.textContent = error.message
         document.body.appendChild(newErr)
   });
}