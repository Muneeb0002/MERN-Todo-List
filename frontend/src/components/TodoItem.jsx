import React, { useState } from "react";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    onUpdate(todo._id, { title, description });
    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 4px 15px 15px", padding: "20px" , width:"90%" , borderRadius:"20px",boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",border :"none"}}>
      {isEditing ? (
        <>
          <input
            className="UpdateInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="UpdateInput" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="SaveBtn" onClick={handleSave}>Save</button>
          <button className="CancelBtn" onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3 style={{fontFamily:"sans-serif",fontSize:"27px" , margin:"0px 0px 0px 10px"}}>{todo.title}</h3>
          <p style={{fontFamily:"sans-serif",fontSize:"16px", margin:"20px 10px 30px 40px"}}>{todo.description}</p>
          <button className="EditBtn" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="DeleteBtn" onClick={() => onDelete(todo._id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
