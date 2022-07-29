import './Products.css';
function Cars(props){
return(
    <div class="cont">
<img  class="prod" width="100%"  src={props.image }/>


<div class="txt">
    <h2>
        {props.txt}
    </h2>
    <p>
        Order online for <a class="text-decoration-noneS" href="#">Touchless Delivery</a>
    </p>
</div>
<div class="btns">
        <button class="btn-1">Custom Order</button>
        <button class="btn-1 btn-white">Existing Inventory</button>
    </div>
</div>
)


}
function Accessories(props){
    return(
        <div class="cont">
    <img  class="prod" width="100%" height="500px" src={props.image }/>
    
    
    <div class="txt">
        <h1 class="hdtxt">
            <b>{props.txt}</b>
        </h1>
        </div>
        <div class="btns-1">
        <button class="btn-1 btn2">Shop Now</button>


        </div></div>
        );
}

function Layout(){
    return(
    <div class="layout">
       <Cars image="./images/model-s.jpg" txt="Model-S"/>
       <Cars image="./images/model-3.jpg" txt="Model-3"/> 
       <Cars image="./images/model-x.jpg" txt="Model-X"/>
       <Cars image="./images/model-y.jpg" txt="Model-Y"/>
       <Cars image="./images/solar-panel.jpg" txt="Solar Panels"/>
       <Cars image="./images/solar-roof.jpg" txt="Solar Roof"/>
       <Accessories image="./images/accessories.jpg" txt="Accessories"/>

    </div>
    );
}
export default Layout;