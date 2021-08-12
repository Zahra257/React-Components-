
import logo from './logo.svg';
import vide from './nnnn.mp4';
function App() {
  return (
    <div style ={{border:"solid 1px black"}}> 
       <h1 class="one">
      zahra
       </h1>
        <br></br>
       <img src={logo} alt="" width="100" height="100"/>
<br></br>  
<img src="/logo512.png" alt="" width="100" height="100"/>
<video controls>
  <source src={vide}></source>
</video>
    </div>
  ) }


export default App