import './App.css';

function App(){
    return(
        <div className='body'>
            <img width={100} src='/assets/logo.png' alt=''/>

            <img width={300} src='/assets/404.svg' alt=''/>

            <p className='text'>Sitio web en mantenimiento, comunicate con nosotros en nuestras redes</p>

            <ul className='networks'>
                <li>
                    <a href='https://www.facebook.com/industriasvitai?locale=es_LA' title=''>
                        <i class="fa-brands fa-facebook"></i>
                        <p>Facebook</p>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/vitai.pe/' title=''>
                        <i class="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
            {/* <h1>Tu descanso es nuestro trabajo</h1> */}
        </div>
    );
}

export default App;
