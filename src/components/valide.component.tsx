import "./styles/validate.css"
const Valide = (props:any) => {
    return (
        <div className="validate_container" >
               
                    <div className="validate_title"  >
                  {props.name}
                  </div>
                  <div className="validate_btn">
                    <button className="btn_o" >oui</button>
                    <button className="btn_n" >non</button>
                    </div>
                
        </div>
    )
}
export default Valide
