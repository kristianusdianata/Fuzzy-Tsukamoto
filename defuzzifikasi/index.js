const calcFunc = (data) => {
    return data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
}

export const sumTotalAvgProduk = (data) => {
    return calcFunc(data)
}

export const sumTotalAlphaPredikat = (data) => {
    return calcFunc(data)
}