
export const Rendah = (data_suhu) => {
    
    if(data_suhu <= 18 || data_suhu >= 26) return 0
    else if(data_suhu > 18 && data_suhu <= 22) return (data_suhu - 18) / 4.18
    else if(data_suhu > 22 && data_suhu <= 26) return (26 - data_suhu) /4.22
}

export const Normal = (data_suhu) => {
    if(data_suhu <= 22 || data_suhu >= 32) return 0
    else if(data_suhu > 22 && data_suhu <= 26) return (data_suhu - 22) / 4.22
    else if(data_suhu > 26 && data_suhu <= 32) return (32 - data_suhu) /6.26
}

export const Tinggi = (data_suhu) => {
    if(data_suhu <= 26 || data_suhu >= 38) return 0
    else if(data_suhu > 26 && data_suhu <= 32) return (data_suhu - 26) / 6.26
    else if(data_suhu > 32 && data_suhu <= 38) return (38 - data_suhu) /6.32
}
