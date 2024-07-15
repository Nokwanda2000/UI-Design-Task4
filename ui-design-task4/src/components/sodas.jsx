import Soda from "../components/image.png"

function Sodas(){
 return(
    <div >
        <div id="soda"><img src={Soda} />
        <button id="btn1" style={{ backgroundColor:"whitesmoke",
         width:"1000px",
         height:"70px",
         marginLeft:"-200px",
         borderRadius:"20px",
         border:"none",
         

        }}>Best Drinks
        <h6 style={{
            color:"grey"
        }}>The things you can order</h6>
        </button>

        


      </div>
      <div>
      <button id="btn2" style={{
            width:"120px",
            height:"90px",
            backgroundColor:"whitesmoke",
        marginLeft:"-200px",
        marginTop:"-130px",
        border:"none",
        borderRadius:"20px"
    }}

            >Classic Drinks
            <h6>For traditionalists who buy</h6>
            
            </button>
        
      </div>
      </div>




 )

}
export default Sodas