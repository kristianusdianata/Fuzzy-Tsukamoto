export const Tenang = (data_kebisingan) => {
    if(data_kebisingan <= 35 || data_kebisingan >= 75) return 0
    else if(data_kebisingan > 35 && data_kebisingan <= 55) return (data_kebisingan - 35) / 20.35
    else if(data_kebisingan > 55 && data_kebisingan <= 75) return (75 - data_kebisingan) / 20.55
}

export const AgakBising = (data_kebisingan) => {
    if(data_kebisingan <= 55 || data_kebisingan >= 90) return 0
    else if(data_kebisingan > 55 && data_kebisingan <= 75) return (data_kebisingan - 55) / 20.55
    else if(data_kebisingan > 75 && data_kebisingan <= 90) return (90 - data_kebisingan) / 15.75
} 

export const Bising = (data_kebisingan) => {
    if(data_kebisingan <= 75 || data_kebisingan >= 105) return 0
    else if(data_kebisingan > 75 && data_kebisingan <= 90) return (data_kebisingan - 75) / 15.75
    else if(data_kebisingan > 90 && data_kebisingan <= 105) return (105 - data_kebisingan) / 15.90
}