import React from "react";
import  ReactDOM from "react-dom/client";
import './index.css'
import {book} from './books';
import Book from './Book'




function BookList()
{
    
    return (
      <>
        <h1>Best Seller</h1>
        <section className = 'booklist'>
            {/* <EventExample/> */}
            
          {book.map((value)=>{
            
            return <Book {...value}  />     
          })}  
             
        </section>
        </>

    );
};
// const EventExample = ()=>{
//     const HandleFormInput = ()=>
//     {
//         console.log('Handle form input');
//     }
//     const HandleButtonClick = function (){
//         alert('Button CLicked')
//     }
//     return <section>
//         <form>
//             <h2>Typical form</h2>
//             <input type="text" name="example" onChange={HandleFormInput}></input>

//         </form>
//         <button onClick={HandleButtonClick}>Click Me</button>
//     </section>;
// } 

 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList></BookList>);