const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    timeout: 2000,
    headers: {
        'X-Custom-Header': 'foo'
    }
});

axios.interceptors.request.use(
    config => {
        console.log(
            `${config.method.toUpperCase()} request sent to ${config.url} at ${(new Date()).toLocaleString()}`
            );
        return config;
    }, error => {
        return Promise.reject(error);
    }
);

function getSth() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            showResponse(response)
        })
        .catch(function (error) {
            alert(error)
        });
}

function getAll() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            showResponse(response)
        })
        .catch(function (error) {
            alert(error)
        });
}

function getByUserId() {
    axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            "userId": 10
        }
    })
        .then(function (response) {
            showResponse(response)
        }).catch(function (error) {
            alert(error)
        })
}

function getWithCustomInstance(){
    axiosInstance.get("/")
    .then(function (response) {
        showResponse(response)
    }).catch(function (error) {
        alert(error)
    })
}

function postSth() {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        'title': 'BBBBBBBBBBBB',
        'body': 'LLLLLLLLLLLLL',
        'userId': 1
    })
        .then(function (response) {
            showResponse(response)
        })
        .catch(function (error) {
            alert(error)
        });
}

function putSth() {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        'title': 'BBBBBBBB',
        'userId': 1,
        'id': 101
    })
        .then(function (response) {
            showResponse(response)
        })
        .catch(function (error) {
            alert(error)
        });
}

function deleteById(index) {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            showResponse(response)
        })
        .catch(function (error) {
            alert(error)
        });
}

function showResponse(response) {
    if (response) {
        document.getElementById("response").innerHTML = `
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