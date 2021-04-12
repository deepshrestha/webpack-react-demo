export const customerAPI = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(result => {
            resolve(result)
        })
        .catch(err => {
            reject(`${err}. Something problem with URL`)
        })
    })    
}