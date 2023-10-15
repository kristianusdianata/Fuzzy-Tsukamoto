
export const Redup = (data_pencahayaan) => {
    if(data_pencahayaan <= 0 || data_pencahayaan >= 300) return 0
    else if (data_pencahayaan > 0 && data_pencahayaan <= 150) return data_pencahayaan / 150.0
    else if (data_pencahayaan > 150 && data_pencahayaan <= 300) return ( 300 - data_pencahayaan) / 150.150
}

export const AgakTerang = (data_pencahayaan) => {
    if(data_pencahayaan <= 150 || data_pencahayaan >= 500) return 0
        else if (data_pencahayaan > 150 && data_pencahayaan <= 300) return ( data_pencahayaan - 150 ) / 150.150
        else if (data_pencahayaan > 300 && data_pencahayaan <= 500) return ( 500 - data_pencahayaan) / 200.300
}

export const Terang = (data_pencahayaan) => {
    if(data_pencahayaan <= 300 || data_pencahayaan >= 700) return 0
        else if (data_pencahayaan > 300 && data_pencahayaan <= 500) return ( data_pencahayaan - 300 ) / 200.300
        else if (data_pencahayaan > 500 && data_pencahayaan <= 700) return ( 700 - data_pencahayaan) / 200.500
}