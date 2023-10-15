import * as Kebisingan from '../fuzzifikasi/kebisingan.js'
import * as Pencahayaan from '../fuzzifikasi/pencahayaan.js'
import * as Suhu from '../fuzzifikasi/suhu.js'

export default class Inferensi {
    constructor(data = {
        suhu, kebisingan, pencahayaan
    }) {
        this.suhu = data.suhu
        this.kebisingan = data.kebisingan
        this.pencahayaan = data.pencahayaan
    }

    Rule_1() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan TENANG and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 148.0 
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 148.0
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_2() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan TENANG and 
            Pencahayaan AGAK TERANG THEN 
            Rata-rata Jumlah Produk = 150.9
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 150.9
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_3() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan TENANG and 
            Pencahayaan TERANG THEN 
            Rata-rata Jumlah Produk = 146.5
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.Terang(this.pencahayaan))
        const avg_produk = 146.5
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_4() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan AGAK BISING and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 143.1
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 143.1
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_5() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan AGAK BISING and 
            Pencahayaan AGAK TERANG THEN
            Rata-rata Jumlah Produk = 146.53
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 146.53
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_6() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan AGAK BISING and 
            Pencahayaan TERANG THEN 
            Rata-rata Jumlah Produk = 142.73

        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.Terang(this.pencahayaan))
        const avg_produk = 142.73
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_7() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan BISING and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 136.73
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 136.73
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_8() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan BISING and 
            Pencahayaan AGAK TERANG THEN 
            Rata-rata Jumlah Produk = 140.77
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 140.77
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_9() {
        /* 
            IF :
            Suhu RENDAH and 
            Kebisingan BISING and 
            Pencahayaan TERANG THEN 
            Rata-rata Jumlah Produk = 135.97
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Rendah(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.Terang(this.pencahayaan))
        const avg_produk = 135.97
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_10() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan TENANG and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 149.73
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 149.73
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_11() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan TENANG and 
            Pencahayaan AGAK TERANG THEN 
            Rata-rata Jumlah Produk = 153.27
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 153.27
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_12() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan TENANG and 
            Pencahayaan TERANG THEN 
            Rata-rata Jumlah Produk = 152.13
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.Terang(this.pencahayaan))
        const avg_produk = 152.13
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_13() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan AGAK BISING and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 148
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 148
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_14() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan AGAK BISING and 
            Pencahayaan AGAK TERANG THEN 
            Rata-rata Jumlah Produk = 150.63
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 150.63
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_15() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan AGAK BISING and 
            Pencahayaan TERANG THEN 
            Rata-rata Jumlah Produk = 147.63
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.Terang(this.pencahayaan))
        const avg_produk = 147.63
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_16() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan BISING and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 141.47
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 141.47
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_17() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan BISING and 
            Pencahayaan AGAK TERANG 
            THEN Rata-rata Jumlah Produk = 145.67
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 145.67
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_18() {
        /* 
            IF :
            Suhu NORMAL and 
            Kebisingan BISING and 
            Pencahayaan AGAK TERANG 
            THEN Rata-rata Jumlah Produk = 140.2
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Normal(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 140.2
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_19() {
        /* 
            IF :
            Suhu TINGGI and 
            Kebisingan TENANG and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 142.10
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 142.10
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_20() {
        /* 
            IF :
            Suhu TINGGI and 
            Kebisingan TENANG and 
            Pencahayaan AGAK TERANG THEN 
            Rata-rata Jumlah Produk = 146.53
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 146.53
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_21() {
        /* 
            IF :
            Suhu TINGGI and 
            Kebisingan TENANG and 
            Pencahayaan TERANG THEN 
            Rata-rata Jumlah Produk = 142.17
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.Tenang(this.kebisingan), Pencahayaan.Terang(this.pencahayaan))
        const avg_produk = 142.17
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_22() {
        /* 
            IF :
            Suhu TINGGI and 
            Kebisingan AGAK BISING and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 138.7
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 138.7
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_23() {
        /* 
            IF :
            Suhu TINGGI and 
            Kebisingan AGAK BISING and 
            Pencahayaan AGAK TERANG THEN 
            Rata-rata Jumlah Produk = 141.4
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 141.4
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_24() {
        /* 
            IF :
            Suhu TINGGI and 
            Kebisingan AGAK BISING and 
            Pencahayaan TERANG THEN 
            Rata-rata Jumlah Produk = 138.3
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.AgakBising(this.kebisingan), Pencahayaan.Terang(this.pencahayaan))
        const avg_produk = 138.3
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_25() {
        /* 
            IF :
            IF Suhu TINGGI and 
            Kebisingan BISING and 
            Pencahayaan REDUP THEN 
            Rata-rata Jumlah Produk = 133.33
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.Redup(this.pencahayaan))
        const avg_produk = 133.33
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_26() {
        /* 
            IF :
            Suhu TINGGI and 
            Kebisingan BISING and 
            Pencahayaan AGAK TERANG THEN 
            Rata-rata Jumlah Produk = 138.33
        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.AgakTerang(this.pencahayaan))
        const avg_produk = 138.33
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }

    Rule_27() {
        /* 
            IF :
            Suhu TINGGI and 
            Kebisingan BISING and 
            Pencahayaan TERANG THEN 
            Rata-rata Jumlah Produk = 133.77

        */

        // get alpa prdikat
        const alpha_predikat = Math.min( Suhu.Tinggi(this.suhu), Kebisingan.Bising(this.kebisingan), Pencahayaan.Terang(this.pencahayaan))
        const avg_produk = 133.77
        return {
            totalAvgProduk: avg_produk * alpha_predikat,
            alpha_predikat
        }
    }
}