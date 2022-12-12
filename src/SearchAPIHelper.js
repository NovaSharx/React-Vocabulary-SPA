export const fetchResult = (...URL) => {
    const result = fetch(...URL)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json()
            } else {
                throw Error(response.status)
            }
        })
        .then((jsonResponse) => {
            return jsonResponse
        }).catch((error) => {
            return error
        })
    return result
}