import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tutorialsService from './services/tutorials.service';
 
const TutorialsListComponent=()=>{
 
    const [tutorials,setTutorials]=useState([]);
   const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
 
 
 
 
 
 useEffect(()=>{
        getAllTutorials();
 },[]);
    const getAllTutorials= () =>{
 
        tutorialsService.getAll()
        .then((response)=>{
            console.log(response);
            setTutorials(response.data);
 
        })
        .catch((error)=>{
            console.log(error);
        })
    };
 
     const setActiveTutorial =(tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };
 
return(
 <>
    <h1>Tutorials Component List </h1>
    {tutorials && tutorials.map((tutorial,index) =>(
            <p
            onClick={() => setActiveTutorial(tutorial, index)}
 
            key={tutorial.id}>{tutorial.title}</p>
    )
 
        )
    }  
    <br/>
    {
        currentTutorial ? (
       
        <div>
            <h4>Tutorial</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentTutorial.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentTutorial.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
 
            <Link
              to={"/tutorials/" + currentTutorial.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
       
       
        ):(
        <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
       
        )
       
       
       
       
    }
   
 </>
 
);
 
 
}
 
 
 
export default TutorialsListComponent;