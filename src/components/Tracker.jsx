import { useState } from "react"

function Tracker() {
    let[tasklist ,settasklist]=useState(
      [
        { id:1,employee:"alex",task:"Program",start:"01/02/2023",end:"01/02/2023"},
        { id:2,employee:"alex",task:"Program",start:"01/02/2023",end:"01/02/2023"},
        { id:3,employee:"alex",task:"Program",start:"01/02/2023",end:"01/02/2023"},
        { id:4,employee:"alex",task:"Program",start:"01/02/2023",end:"01/02/2023"},
        { id:5,employee:"alex",task:"Program",start:"01/02/2023",end:"01/02/2023"},

      ]
    )
    let addNewTask=(e)=>{
        e.preventDefault();
        let newTask={employee:document.getElementById("emp").value ,
                    task:document.getElementById("task").value,
                    start: new Date().toLocaleString(),
                    end:document.getElementById("end").value
        }
        let result =tasklist.some((t,i,a)=>{return t.employee==newTask.employee&&t.task==newTask.task})
        if(result)
        {
          alert("task already present")
        }
        else
        {
          let temp=[...tasklist];
        temp.push(newTask);
        settasklist(temp)
        alert("new task ")
        }
        
    }
    let deleteTask =(task)=>{
      let temp =tasklist.filter((t,i,a)=>{return t.employee!=task.employee && t.task!=task.task})
      settasklist(temp);
      alert("task deleted")
    }
    return(
        <div id="tracker">
            <h1>Employee Task Tracker</h1>
            <hr />
            <form onSubmit={addNewTask}>
                <input type="text" placeholder="Employee Name" id="emp"/>
                <input type="text"  placeholder="Task Name"id="task"/>
                <input type="date" id="end"/>
                <input type="submit" />

            </form>
            <table border="3px" cellPadding="5px">
            <thead>
                <th>Sl no</th>
                <th> Employee Name</th>
                <th>Task Name</th>
                <th>Start</th>
                <th>End</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                  tasklist.map((tobj,i)=>{ return(
                    <tr key={tobj.task+i}>
                        <td>{i+1}</td>
                        <td>{tobj.employee}</td>
                        <td>{tobj.task}</td>
                        <td>{tobj.start}</td>
                        <td>{tobj.end}</td>
                        <td><button onClick={()=>{deleteTask(tobj)}}>Delete</button></td>
                    </tr>
                  )

                  })  
                }
            </tbody>
            </table>

        </div>
    )
}
export default Tracker