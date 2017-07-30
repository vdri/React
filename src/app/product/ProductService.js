

//Ajax calls
//Fetch 
//jQuery 
//SuperAgent
//Axios

export function fetchJson(url, option = undefined) {
    //fetch api, standard browser specification
    return window.fetch(url, option)
        .then ( (response) => {
            console.log (response);
            return response.json(); //return promise
    }) 
}


//GET /api/products/12345
export function  fetchProduct(id) {
    return fetchJson("http://localhost:7070/api/products/" + id)
}


export function fetchBrands() {
        return fetchJson("http://localhost:7070/api/brands")
    }



export function fetchProducts() {
        return fetchJson("http://localhost:7070/api/products")
        // return fetchJson("http://localhost:7070/delayed/api/products")
    }


    //update existing
export function updateProduct(product) {
            return fetchJson('http://localhost:7070/api/products/' 
                        + product.id,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
    }

    //create new
export function createProduct(product) {
        return fetch('http://localhost:7070/api/products',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
    }

export function saveProduct(product) {
        if (product.id)
            return updateProduct(product);
        
        return createProduct(product);
    }