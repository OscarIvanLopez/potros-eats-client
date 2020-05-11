import React from 'react'
import NuevoProyecto from "../ordenes/NuevoProyecto";
import ListadoProyectos from "../ordenes/ListadoProyectos";

const Sidebar = () => {
    return (
        <aside>
            <h1 className="header-potros">POTROS<span className="header-eats">eats</span></h1>

            <NuevoProyecto/>

            <div className="proyectos">
                <h2 className="ordenes-azul">Tus Ordenes</h2>
                <ListadoProyectos/>


            </div>
        </aside>
    );
};

export default Sidebar;