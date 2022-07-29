import "./Nav.css";
function Name(props){
    return(
    <li class="nav-item ">
    <a class="nav-link"  href="#">{ props.txt }</a>
  </li>);
}

function Nav (){
    
    
   return(
    <>
    <nav class="navbar navbar-expand-md navbar-light justify-content-center fixed-top">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"><img src="./images/logo.svg" width="70px"/> </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse justify-content-end center pl-5 navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        
       <Name txt="Model S"/> 
       <Name txt="Model 3"/> 
       <Name txt="Model X"/>
       <Name txt="Model Y"/> 
       <Name txt="Solar Roof"/> 
       <Name txt="Solar Panels"/>
       </ul></div>
    <div class="collapse justify-content-end navbar-collapse" id="collapsibleNavbar">
       <ul class="navbar-nav">
       <Name classname="nav-link" txt="Shop"/>
       <Name txt="Account"/>
       <Name txt="Menu"/>
       </ul>
        
      
    </div>
  </div>
</nav>
</>
);
}




export default Nav;

