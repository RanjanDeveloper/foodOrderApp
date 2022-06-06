import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = () => {
  return (
    <form className={classes.form}>
        <Input label="amount" input={{
        id : 'amount',
        type : 'number',
        min:'1',
        max:'5',
        defaultValue:'1',
        step:'1'
        }}
        />
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm