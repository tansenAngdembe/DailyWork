import React from "react";

 
export const Alert = (props) => {
    const styleing={
        height:"60px"
    }


    return (        
            <div className="container" style={styleing}>
               {props.alert && <div className="alert alert-success d-flex " role="alert">                  
                    <strong>{props.alert.type}</strong> : {props.alert.msg}                   
                </div>}
            </div>      
    )
}
