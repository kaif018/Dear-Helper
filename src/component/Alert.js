import React from 'react'

function Alert(props) {
  
    
   const capital=( word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
   }
   return (
      props.alert && <div className={`alert alert-${props.alert.msg} alert-dismissible fade show `} role="alert">
  <stroge> {capital(props.alert.type)}</stroge> :{props.alert.msg}

</div>
    

  )
}

export default Alert
