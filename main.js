function getSth(){
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
        showResponse(response)
    })
    .catch(function(error){
        alert(error)
    });
}
  
function postSth(a, b){
    alert("post a and b")
}

function showResponse(response){
    if(response){
        document.getElementById("response").innerHTML =`
        <div>
        <h4>Response Code : ${response.status}</h4>
    </div>
    <div>
        <h3>Headers</h3>
        <pre>
${JSON.stringify(response.headers, null, 2)}
        </pre>
    </div>
    <div>
        <h3>Data</h3>
        <pre>
${JSON.stringify(response.data, null, 2)}
        </pre>
    </div>
    <div>
        <h3>Config</h3>
        <pre>
${JSON.stringify(response.config, null, 2)}           
        </pre>
    </div
        `
    }
    
}