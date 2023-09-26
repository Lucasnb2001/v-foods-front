import React from 'react';
import sinoIcon from './../assets/sinoIcon.png';
import CaduIcon from './../assets/CaduIcon.png';

const NavigationBar: React.FC = () => {
    return (
        <nav className="bg-white p-4 flex items-center justify-between space-x-8 flex-grow"style={{ backgroundColor: '#FBFBFB' }}>
       
       <div className="flex justify-center flex-grow pl-20 pr-20">
            <div className="flex items-center border rounded border-gray-300 pt-5 pl-5 pb-5 w-full">
                <i className="material-icons mr-2"></i>
                <input 
                    type="text" 
                    placeholder="Pesquise Colaboradores e Indicadores..."
                    className="flex-grow bg-transparent outline-none"
                />
            </div>
        </div>
            
      
        <div className="flex justify-end flex-grow items-end">
            <div className="flex justify-end items-center p-3 w-262px">
                <img src={sinoIcon} alt="Ícone de sino" className="w-28px h-31px mr-2 mr-20"/>

                <img src={CaduIcon} alt="Ícone do usuário Cadu" className="w-43px h-43px mr-4"/>
                <span>Carlos Eduardo </span>
            </div>
        </div>

        </nav>
    );
};

export default NavigationBar;