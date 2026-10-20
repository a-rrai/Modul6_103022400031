import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const name = "Raissha";
  const N = 31;
  const jam = 9;
  let waktu = (jam < 12) ? "Selamat Pagi" : "Selamat Siang";

  return (
    <>
    <div className="App" >
      <h1>Kantin {name}</h1>
      <p>{waktu}</p>
      <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
      <button type="button" disabled>Bayar</button>
    </div>
    </>
  )
}

export default App
