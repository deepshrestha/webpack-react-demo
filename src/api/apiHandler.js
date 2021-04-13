export const apiHandler = (url, method) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method
        })
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log("result", result)
            resolve(result)
        })
        .catch(err => {
            reject(`${err}. Something problem with URL`)
        })
    })    
}