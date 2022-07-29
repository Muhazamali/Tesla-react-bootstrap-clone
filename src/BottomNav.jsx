function Name(props){
    return(
    <li class="nav-item ">
    <a class="nav-link"  href="#">{ props.txt }</a>
  </li>);
}
function BottomNav(){
    return(
      <nav class="navbar navbar-expand-sm  navbar-light">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav ">
        <Name txt="Tesla @ 2022"/>
        <Name txt="Privacy & Legal"/>
        <Name txt="Vehicle Recalls"/>
        <Name txt="Contacts"/>
        <Name txt="Careers"/>
        <Name txt="News"/>
        <Name txt="Engage"/>
        <Name txt="Locations"/>
    
      </ul>
    </div>
  </nav>);
    }
    export default BottomNav;