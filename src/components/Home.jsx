import Paquetes from "./Paquetes"


function Home (){
    return(
        <div className="div-fondo">
            <div className="container-titulos">
                <h1 className="titulos">Sistema Web Líverval</h1>
            </div>
            <Paquetes />
        </div>
    )
}

export default Home