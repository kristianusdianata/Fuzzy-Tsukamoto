import {sumTotalAlphaPredikat, sumTotalAvgProduk} from './defuzzifikasi/index.js'
import * as Kebisingan from "./fuzzifikasi/kebisingan.js"
import * as Pencahayaan from "./fuzzifikasi/pencahayaan.js"
import * as Suhu from "./fuzzifikasi/suhu.js"
import Inferensi from './inferensi/index.js'

const suhu = 25;
const kebisingan = 80;
const pencahayaan = 400;

const print_fuzzy_result = () => {
    const MyInferensi = new Inferensi({
        suhu,
        kebisingan,
        pencahayaan
    })

    const totalAlphaPredikat = sumTotalAlphaPredikat([
        MyInferensi.Rule_1().alpha_predikat,
        MyInferensi.Rule_2().alpha_predikat,
        MyInferensi.Rule_3().alpha_predikat,
        MyInferensi.Rule_4().alpha_predikat,
        MyInferensi.Rule_5().alpha_predikat,
        MyInferensi.Rule_6().alpha_predikat,
        MyInferensi.Rule_7().alpha_predikat,
        MyInferensi.Rule_8().alpha_predikat,
        MyInferensi.Rule_9().alpha_predikat,
        MyInferensi.Rule_10().alpha_predikat,
        MyInferensi.Rule_11().alpha_predikat,
        MyInferensi.Rule_12().alpha_predikat,
        MyInferensi.Rule_13().alpha_predikat,
        MyInferensi.Rule_14().alpha_predikat,
        MyInferensi.Rule_15().alpha_predikat,
        MyInferensi.Rule_16().alpha_predikat,
        MyInferensi.Rule_17().alpha_predikat,
        MyInferensi.Rule_18().alpha_predikat,
        MyInferensi.Rule_19().alpha_predikat,
        MyInferensi.Rule_20().alpha_predikat,
        MyInferensi.Rule_21().alpha_predikat,
        MyInferensi.Rule_22().alpha_predikat,
        MyInferensi.Rule_23().alpha_predikat,
        MyInferensi.Rule_24().alpha_predikat,
        MyInferensi.Rule_25().alpha_predikat,
        MyInferensi.Rule_26().alpha_predikat,
        MyInferensi.Rule_27().alpha_predikat,
    ])

    const totalAvgProduk = sumTotalAvgProduk([
        MyInferensi.Rule_1().totalAvgProduk,
        MyInferensi.Rule_2().totalAvgProduk,
        MyInferensi.Rule_3().totalAvgProduk,
        MyInferensi.Rule_4().totalAvgProduk,
        MyInferensi.Rule_5().totalAvgProduk,
        MyInferensi.Rule_6().totalAvgProduk,
        MyInferensi.Rule_7().totalAvgProduk,
        MyInferensi.Rule_8().totalAvgProduk,
        MyInferensi.Rule_9().totalAvgProduk,
        MyInferensi.Rule_10().totalAvgProduk,
        MyInferensi.Rule_11().totalAvgProduk,
        MyInferensi.Rule_12().totalAvgProduk,
        MyInferensi.Rule_13().totalAvgProduk,
        MyInferensi.Rule_14().totalAvgProduk,
        MyInferensi.Rule_15().totalAvgProduk,
        MyInferensi.Rule_16().totalAvgProduk,
        MyInferensi.Rule_17().totalAvgProduk,
        MyInferensi.Rule_18().totalAvgProduk,
        MyInferensi.Rule_19().totalAvgProduk,
        MyInferensi.Rule_20().totalAvgProduk,
        MyInferensi.Rule_21().totalAvgProduk,
        MyInferensi.Rule_22().totalAvgProduk,
        MyInferensi.Rule_23().totalAvgProduk,
        MyInferensi.Rule_24().totalAvgProduk,
        MyInferensi.Rule_25().totalAvgProduk,
        MyInferensi.Rule_26().totalAvgProduk,
        MyInferensi.Rule_27().totalAvgProduk,
    ]);

    console.log("------ FUZZIFIKASI START ------")
    console.log("- SUHU -")
    console.log('Suhu rendah : '+Suhu.Rendah(suhu))
    console.log('Suhu normal : '+Suhu.Normal(suhu))
    console.log('Suhu tinggi : '+Suhu.Tinggi(suhu))
    console.log("\n")
    console.log("- KEBISINGAN -")
    console.log('Kebisingan tenang : '+Kebisingan.Tenang(kebisingan))
    console.log('Kebisingan agak bising : '+Kebisingan.AgakBising(kebisingan))
    console.log('Kebisingan bising : '+Kebisingan.Bising(kebisingan))
    console.log("\n")
    console.log("- PENCAHAYAAN -")
    console.log('Pencahayaan redup : '+Pencahayaan.Redup(pencahayaan))
    console.log('Pencahayaan agak terang : '+Pencahayaan.AgakTerang(pencahayaan))
    console.log('Pencahayaan terang : '+Pencahayaan.Terang(pencahayaan))
    console.log("------ KEANGGOTAAN END ------")
    console.log("\n")

    console.log("------ INFRENSI START ------")
    console.log('Rule 1 : IF Suhu RENDAH and Kebisingan TENANG and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 148.0 : '+MyInferensi.Rule_1().totalAvgProduk )
    console.log('Rule 2 : IF Suhu RENDAH and Kebisingan TENANG and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 150.9 : '+MyInferensi.Rule_2().totalAvgProduk )
    console.log('Rule 3 : IF Suhu RENDAH and Kebisingan TENANG and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 146.5 : '+MyInferensi.Rule_3().totalAvgProduk )
    console.log('Rule 4 : IF Suhu RENDAH and Kebisingan AGAK BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 143.1 : '+MyInferensi.Rule_4().totalAvgProduk )
    console.log('Rule 5 : IF Suhu RENDAH and Kebisingan AGAK BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 146.53 : '+MyInferensi.Rule_5().totalAvgProduk )
    console.log('Rule 6 : IF Suhu RENDAH and Kebisingan AGAK BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 142.73 : '+MyInferensi.Rule_6().totalAvgProduk )
    console.log('Rule 7 : IF Suhu RENDAH and Kebisingan BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 136.73 : '+MyInferensi.Rule_7().totalAvgProduk )
    console.log('Rule 8 : IF Suhu RENDAH and Kebisingan BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 140.77 : '+MyInferensi.Rule_8().totalAvgProduk )
    console.log('Rule 9 : IF Suhu RENDAH and Kebisingan BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 135.97 : '+MyInferensi.Rule_9().totalAvgProduk )
    console.log('Rule 10 : IF Suhu NORMAL and Kebisingan TENANG and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 149.73 : '+MyInferensi.Rule_10().totalAvgProduk )
    console.log('Rule 11 : IF Suhu NORMAL and Kebisingan TENANG and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 153.27 : '+MyInferensi.Rule_11().totalAvgProduk )
    console.log('Rule 12 : IF Suhu NORMAL and Kebisingan TENANG and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 152.13 : '+MyInferensi.Rule_12().totalAvgProduk )
    console.log('Rule 13 : IF Suhu NORMAL and Kebisingan AGAK BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 148 : '+MyInferensi.Rule_13().totalAvgProduk )
    console.log('Rule 14 : IF Suhu NORMAL and Kebisingan AGAK BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 150.63 : '+MyInferensi.Rule_14().totalAvgProduk )
    console.log('Rule 15 : IF Suhu NORMAL and Kebisingan AGAK BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 147.63 : '+MyInferensi.Rule_15().totalAvgProduk )
    console.log('Rule 16 : IF Suhu NORMAL and Kebisingan BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 141.47 : '+MyInferensi.Rule_16().totalAvgProduk )
    console.log('Rule 17 : IF Suhu NORMAL and Kebisingan BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 145.67 : '+MyInferensi.Rule_17().totalAvgProduk )
    console.log('Rule 18 : IF Suhu NORMAL and Kebisingan BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 140.2 : '+MyInferensi.Rule_18().totalAvgProduk )
    console.log('Rule 19 : IF Suhu TINGGI and Kebisingan TENANG and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 142.10 : '+MyInferensi.Rule_19().totalAvgProduk )
    console.log('Rule 20 : IF Suhu TINGGI and Kebisingan TENANG and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 146.53 : '+MyInferensi.Rule_20().totalAvgProduk )
    console.log('Rule 21 : IF Suhu TINGGI and Kebisingan TENANG and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 142.17 : '+MyInferensi.Rule_21().totalAvgProduk )
    console.log('Rule 22 : IF Suhu TINGGI and Kebisingan AGAK BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 138.7 : '+MyInferensi.Rule_22().totalAvgProduk )
    console.log('Rule 23 : IF Suhu TINGGI and Kebisingan AGAK BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 141.4 : '+MyInferensi.Rule_23().totalAvgProduk )
    console.log('Rule 24 : IF Suhu TINGGI and Kebisingan AGAK BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 138.3 : '+MyInferensi.Rule_24().totalAvgProduk )
    console.log('Rule 25 : IF Suhu TINGGI and Kebisingan BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 133.33 : '+MyInferensi.Rule_25().totalAvgProduk )
    console.log('Rule 26 : IF Suhu TINGGI and Kebisingan BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 138.33 : '+MyInferensi.Rule_26().totalAvgProduk )
    console.log('Rule 27 : IF Suhu TINGGI and Kebisingan BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 133.77 : '+MyInferensi.Rule_27().totalAvgProduk )
    console.log("------ INFRENSI END ------")
    console.log("\n")
    
    console.log("------ DEFUZZIFIKASI START ------")
    console.log('OUTPUT AKHIR : '+totalAvgProduk / totalAlphaPredikat)
    console.log("------ DEFUZZIFIKASI END ------")
}

print_fuzzy_result()