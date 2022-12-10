export const fetchResult = async (...URL) => {
    const response = await fetch(...URL)
    const resData = await response.json()
    return resData
}