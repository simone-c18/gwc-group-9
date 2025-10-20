import '../src/styles/userPickResponse.css';
export default function pick(){
    return (
<div className="App">
  <button> BACK </button>

  <div className="response">
    <h3> Choose your Response: </h3>
    <ul className ="buttons"> 
         <li><button> Response 1</button> </li> 
    <li><button> Response 2</button></li>
    </ul>

     </div>
    <div className="npcConversation">  
conversation
   </div> 
</div>


    );
}