import React, { useState, useEffect, useContext } from "react";
import { deleteTodo, toggleComplete } from "../service/api";
import { IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        width: 360,
        margin: "auto"
    },
    ul: {
        paddingLeft: 0,
        listStyle: "none"
    },
    list: {
        justifyContent: "space-between"
    }
}));

const TodoList = (props) => {
    const classes = useStyles();

    const checkHandle = async(id) => {
        await toggleComplete(id);
        props.fetch();
    }

    const deleteHandle = async(id) => {
        await deleteTodo(id);
        props.fetch();
    }

    const todoList = props.todos.map((todo) => {
        return(
            // <li key={todo.id}>{todo.content}<button onClick={() => deleteHandle(todo.id)}>削除</button></li>
            <ListItem key={todo.id}>
                <ListItemIcon>
                    <Checkbox checked={todo.isComplete} onChange={() => checkHandle(todo.id)} Name="checkedA"/>
                </ListItemIcon>
                <ListItemText
                primary={todo.content}
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteHandle(todo.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
     );
    });

    return(
        <div className={classes.root}>
            <h2>あなたのTodo</h2>
            <ul className={classes.ul}>{todoList}</ul>
        </div>
    )
}
export default TodoList;