import './App.css'

function App() {
  return (
    <div className="profile-card">
      <div className="header">
        <img
          src="https://i.imgur.com/3KC1bbA.jpeg"
          alt="Beomgyu"
          className="profile-img"
        />
        <h1>Choi Beom Gyu</h1>
        <p className="subtitle">Member of TXT | Singer & Dancer</p>
      </div>

      <div className="info">
        <h2>Biodata</h2>
        <ul>
          <li><span>Nama Lengkap:</span> Choi Beom Gyu</li>
          <li><span>Nama Panggung:</span> Beom Gyu</li>
          <li><span>Tanggal Lahir:</span> 13 Maret 2001</li>
          <li><span>Kebangsaan:</span> Korea Selatan</li>
          <li><span>Posisi di grup:</span> Vokalis, Dancer, Rapper</li>
          <li><span>Tinggi Badan:</span> 180cm</li>
        </ul>
      </div>

      <footer>
        <p>© 2025 | Biodata Project by Shasa</p>
      </footer>
    </div>
  )
}

export default App