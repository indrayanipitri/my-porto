import Line from "../Line/Line";

export default function AboutResumeMe() {
    return <>
    <section className="section" >
        <div className="resume-me">
            <h1 className="title">Pengalaman aku.</h1>
            <ul className="items">
                <li className="item-list"> <h2> Yayasan Pendidikan Insan Istiqomah </h2>
                <h3> Staff IT (Frontend Developer)</h3>
                <p>Juli 2021 - April 2022</p>
                </li>
                <li  className="item-list"> <h2> Magang di BPPT (Badan Pengkajian dan Penelitian Teknologi)</h2>
                <h3> Menganalisa Struktur Database</h3>
                <p>April – Juni 2018</p>
                </li>
                <li  className="item-list"> <h2>Magang di PT Matahari Putra Prima, Tbk</h2>
                <h3> Admin Fixed Asset</h3>
                <p>February – Maret 2012</p>
                </li>
            </ul>
        </div>

        <hr className="line-resume"/>

        <div className="resume-me">
            <h1 className="title">Pendidikan.</h1>
            <ul className="items">
                <li className="item-list"> <h2> Universitas Mercu Buana</h2>
                <h3>Teknik Informatika (S1)</h3>
                <p>IPK 3.33</p>
                <p>Agustus 2019</p>
                </li>
                
            </ul>
        </div>

        <hr className="line-resume"/>

        <div className="resume-me">
            <h1 className="title">Course yang udah aku ikuti :</h1>
            <ul className="items">
                <li className="item-list"> <h2> Belajar Dasar Pemrograman Web </h2>
                <h3>Dicoding Indonesia</h3>
                <p> <a href="https://www.dicoding.com/certificates/ERZRML9R2PYV" target="_blank" rel="noreferrer">Diterbitkan Jul 2022 Kedaluwarsa Jul 2025 </a></p>
                </li>
                <li className="item-list"> <h2> Fullstack Website Designer </h2>
                <h3>BuildWith Angga</h3>
                <p>Diterbitkan Feb 2021 Tidak Ada Tanggal Kedaluwarsa</p>
                </li>
            </ul>
        </div>
        <Line />
    </section>
    
    </>
}