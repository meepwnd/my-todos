import React from 'react'
import {connect} from 'react-redux'

const ItemsCount = (props) => {
    const {completedTodosCount, todosCount} = props
    const itemWord = completedTodosCount === 1 ? 'item' : 'items'
    const activeCount = todosCount - completedTodosCount
    return(
        <span>{activeCount } {itemWord}  left</span>
    )
}
    

const getCompletedTodosCount = (todos) => (
    todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)
)

const mapStateToProps = state => ({
    completedTodosCount: getCompletedTodosCount(state.options),
    todosCount: state.options.length
})

export default connect(mapStateToProps)(ItemsCount)