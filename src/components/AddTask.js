import React, {useState} from 'react'

const AddTask = (props) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

   const onSubmits = (e) => {
      e.preventDefault();
        alert('form submited');
        if(!text){
            alert('Add Item cannot be empty');
        }
        if(!day){
            alert('Day and Time cannot be empty');
        }
        props.onAdd({text,day,reminder});
        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <>
          <form className="add-form" onSubmit={onSubmits}>
            <div className="form-control">
            <label>Items</label>
            <input type="text" className="form-control" placeholder="Add Item" value={text} onChange={(e) => setText(e.target.value)} />
          </div>

          <div className="form-control">
            <label>Day & Time</label>
            <input type="text" className="form-control" placeholder="Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
          </div>

          <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
          </div>
            <input type="submit" className="btn btn-block" value="Save" />
          </form>  
        </>
    )
}

export default AddTask
