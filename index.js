import Defuzzifikasi from './defuzzifikasi/index.js'
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

    const defuzzifikasi = Defuzzifikasi([
        MyInferensi.Rule_1(),
        MyInferensi.Rule_2(),
        MyInferensi.Rule_3(),
        MyInferensi.Rule_4(),
        MyInferensi.Rule_5(),
        MyInferensi.Rule_6(),
        MyInferensi.Rule_7(),
        MyInferensi.Rule_8(),
        MyInferensi.Rule_9(),
        MyInferensi.Rule_10(),
        MyInferensi.Rule_11(),
        MyInferensi.Rule_12(),
        MyInferensi.Rule_13(),
        MyInferensi.Rule_14(),
        MyInferensi.Rule_15(),
        MyInferensi.Rule_16(),
        MyInferensi.Rule_17(),
        MyInferensi.Rule_18(),
        MyInferensi.Rule_19(),
        MyInferensi.Rule_20(),
        MyInferensi.Rule_21(),
        MyInferensi.Rule_22(),
        MyInferensi.Rule_23(),
        MyInferensi.Rule_24(),
        MyInferensi.Rule_25(),
        MyInferensi.Rule_26(),
        MyInferensi.Rule_27(),
    ])

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
    console.log('Rule 1 : IF Suhu RENDAH and Kebisingan TENANG and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 148.0 : '+MyInferensi.Rule_1() )
    console.log('Rule 2 : IF Suhu RENDAH and Kebisingan TENANG and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 150.9 : '+MyInferensi.Rule_2() )
    console.log('Rule 3 : IF Suhu RENDAH and Kebisingan TENANG and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 146.5 : '+MyInferensi.Rule_3() )
    console.log('Rule 4 : IF Suhu RENDAH and Kebisingan AGAK BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 143.1 : '+MyInferensi.Rule_4() )
    console.log('Rule 5 : IF Suhu RENDAH and Kebisingan AGAK BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 146.53 : '+MyInferensi.Rule_5() )
    console.log('Rule 6 : IF Suhu RENDAH and Kebisingan AGAK BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 142.73 : '+MyInferensi.Rule_6() )
    console.log('Rule 7 : IF Suhu RENDAH and Kebisingan BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 136.73 : '+MyInferensi.Rule_7() )
    console.log('Rule 8 : IF Suhu RENDAH and Kebisingan BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 140.77 : '+MyInferensi.Rule_8() )
    console.log('Rule 9 : IF Suhu RENDAH and Kebisingan BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 135.97 : '+MyInferensi.Rule_9() )
    console.log('Rule 10 : IF Suhu NORMAL and Kebisingan TENANG and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 149.73 : '+MyInferensi.Rule_10() )
    console.log('Rule 11 : IF Suhu NORMAL and Kebisingan TENANG and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 153.27 : '+MyInferensi.Rule_11() )
    console.log('Rule 12 : IF Suhu NORMAL and Kebisingan TENANG and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 152.13 : '+MyInferensi.Rule_12() )
    console.log('Rule 13 : IF Suhu NORMAL and Kebisingan AGAK BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 148 : '+MyInferensi.Rule_13() )
    console.log('Rule 14 : IF Suhu NORMAL and Kebisingan AGAK BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 150.63 : '+MyInferensi.Rule_14() )
    console.log('Rule 15 : IF Suhu NORMAL and Kebisingan AGAK BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 147.63 : '+MyInferensi.Rule_15() )
    console.log('Rule 16 : IF Suhu NORMAL and Kebisingan BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 141.47 : '+MyInferensi.Rule_16() )
    console.log('Rule 17 : IF Suhu NORMAL and Kebisingan BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 145.67 : '+MyInferensi.Rule_17() )
    console.log('Rule 18 : IF Suhu NORMAL and Kebisingan BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 140.2 : '+MyInferensi.Rule_18() )
    console.log('Rule 19 : IF Suhu TINGGI and Kebisingan TENANG and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 142.10 : '+MyInferensi.Rule_19() )
    console.log('Rule 20 : IF Suhu TINGGI and Kebisingan TENANG and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 146.53 : '+MyInferensi.Rule_20() )
    console.log('Rule 21 : IF Suhu TINGGI and Kebisingan TENANG and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 142.17 : '+MyInferensi.Rule_21() )
    console.log('Rule 22 : IF Suhu TINGGI and Kebisingan AGAK BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 138.7 : '+MyInferensi.Rule_22() )
    console.log('Rule 23 : IF Suhu TINGGI and Kebisingan AGAK BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 141.4 : '+MyInferensi.Rule_23() )
    console.log('Rule 24 : IF Suhu TINGGI and Kebisingan AGAK BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 138.3 : '+MyInferensi.Rule_24() )
    console.log('Rule 25 : IF Suhu TINGGI and Kebisingan BISING and Pencahayaan REDUP THEN Rata-rata Jumlah Produk = 133.33 : '+MyInferensi.Rule_25() )
    console.log('Rule 26 : IF Suhu TINGGI and Kebisingan BISING and Pencahayaan AGAK TERANG THEN Rata-rata Jumlah Produk = 138.33 : '+MyInferensi.Rule_26() )
    console.log('Rule 27 : IF Suhu TINGGI and Kebisingan BISING and Pencahayaan TERANG THEN Rata-rata Jumlah Produk = 133.77 : '+MyInferensi.Rule_27() )
    console.log("------ INFRENSI END ------")
    console.log("\n")
    
    console.log("------ DEFUZZIFIKASI START ------")
    console.log('OUTPUT AKHIR : '+defuzzifikasi)
    console.log("------ DEFUZZIFIKASI END ------")
}

print_fuzzy_result()