export default (array_data) => {
    const avg_final_produk = array_data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)

    return avg_final_produk
}