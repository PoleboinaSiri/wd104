// todo.js
const todoList = () => 
{
  let  = A[];
  const add = (todoItem) => 
  {
    //push the todo
    A.push(todoItem);
  };
  const markAsComplete = (index) => 
  {
    all[index].completed = true;
  };
  const overdue = () => 
  {
    return A.filter
    (
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };
  
  //const dwe
  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };
  const dueLater = () => {
    return A.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
    
    //return values
  };
  
  
  
  return { A, add, markAsComplete, overdue, dueToday, dueLater };
};
module.exports = todoList;
