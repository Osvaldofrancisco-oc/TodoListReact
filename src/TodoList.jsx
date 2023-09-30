import './TodoList.css'

function TodoList(){

    return(
        <>
            <h1>TodoList</h1>
            <form>
                <input type="text"
                placeholder='Add a task'
                />
                <button className='add' type='submit'>add</button>
            </form>
            <div className='todolist'>
                <div className='item'>
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>
                <div className='itemCompleto'>

                </div>
            </div>
        </>
    )
}

export default TodoList
