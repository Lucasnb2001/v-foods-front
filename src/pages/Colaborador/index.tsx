import styles from './index.module.css';
import UserInfo from '../../components/UserInfo';

const Colaborador = () => {
  return (
    <div className='bg-[#fbfbfb] h-screen pt-[142px] pr-36'>
        <div className='flex '>
            <div id='esquerda'>
                 <UserInfo picture={'c1'} name='Maria Clara N.' cargo='' email='Amale@gmail.com'/>
                <div className={styles['metas']}>
                    <h1 className=' text-lg font-bold mt-5'>Metas concluidas deste mês</h1>
                    <p className='text-gray-500 text-right text-sm'>23 de Setembro</p>
                    <div className=' flex mt-[10px] justify-start'>
                        <p className='text-2xl font-bold'>60%</p>
                        <div className='text-sm h-7 w-56 rounded-md bg-teal-400 ml-8 mt-1 p-[2px] pl-2'><span className=' font-semibold'>4.7%</span> em comparaçao ao mês anterior</div>
                    </div>
                    <p className='text-gray-500 text-sm'>concluídos</p>
                    <img src='images\graph1.png'></img>
                </div>
            </div>
            <div id='direita' className=' ml-auto'>
                <div className=' text-right  ml-auto flex'>
                    <div className=' py-2 px-4 border-2 ml-auto rounded-md border-[#d6d6d6]'>Setembro</div> 
                    <div className='p-2 bg-black text-white rounded-md ml-4'>Baixar PDF</div>
                </div>
                <div className={styles['status']}>
                    <div className='flex  mt-5'>
                        <h1 className=' text-lg font-bold'>Resultados recentes</h1>
                    </div>
                    <div className=' flex mt-8 justify-start'>
                        <div>
                            Indicador X
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Colaborador