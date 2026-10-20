import { useState } from "react"
import LabelHarga from "./LabelHarga"

function KartuMenu(nama, harga, kategori = "Makanan"){
   const [jumlah, setJumlah] = useState(0)
   const [catatan, setCatatan] = useState('')
   const tambah = () => setJumlah(jumlah + 1)

    return(
        <>
        <div>
            <h1 className="kartu"> 
            {nama}
            </h1>
            <p>{kategori}</p>
            <LabelHarga nilai = {harga}/>
       </div>
       <div className="kontrol">
        <button onClick={() => setJumlah(jumlah - 1)} disabled = {jumlah === 0}>
        </button>
        <span>
            {jumlah}
        </span>
        <button onClick={tambah} > +
        </button>
       </div>
       <div>
        {jumlah === 0 ? (
            <p>
                Belum dipesan
            </p>
        ) : (
            <p>
                Sub Total: Rp {(harga * jumlah) .toLocaleString ("id-ID")}
            </p>
        )}

        {jumlah = 5 && <span className="bandage">
            Pesanan banyak
        </span> }
       </div>
        </>
    )
}