import React, {useState} from 'react'
import './TodoList.css'
import Icon from './assets/img.avif'

function TodoList(){

    const [lista, setLista] = useState([])
    const [novoItem,setNovoItem] = useState("")

    function addItem(form){
        form.preventDefault();
            if(!novoItem){
                return;
            }else{
                setLista([...lista, {text: novoItem, isCompleted: false}]) 
                setNovoItem("");
                document.getElementById('input-entrada').focus();
            }
    }

    function clicou(index){
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux)
    }
    function deleta(index){
        const listaAux = [...lista];
        listaAux.splice(index,1)
        setLista(listaAux)

    }
    function deletaAll(){
        setLista([])
    }
    return(
        <>
            <h1>TodoList</h1>
            <form onSubmit={addItem}>
                <input type="text"
                id='input-entrada'
                value={novoItem}
                onChange={(e)=>{setNovoItem(e.target.value)}}
                placeholder='Add a task'
                />
                <button className='add' type='submit'>add</button>
            </form>
            <div className='todolist'>
                {
                    lista.length <1
                    ? 
                    <img className='img' src={Icon} />
                    : 
                    lista.map((item, index)=>(
                        <div
                        key={index}
                        className={item.isCompleted ? "item Completo" : "item"} >
                        <span onClick={()=>{clicou(index)}}>{item.text}</span>
                        <button onClick={()=>{deleta(index)}} className='del'>Deletar</button>
                        </div>
                    ))
                    

                }    
                {
                    lista.length > 0 ? <button onClick={()=>{deletaAll()}} className='deletaAll'>Deletar Todos</button> : " "
                }
                
            </div>
        </>
    )
}

export default TodoList
