export const InLineStyle=()=>{
  const containerStyle={
    border:"solid 2px #392eff",
    borderRadius:"20px",
    padding:"8px",
    margine:"9px",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
  };
  const titleStyle={
    margine:0,
    color:"#3d84a8",
  };
  const buttonStyle={
    backgroundColor:"#abedd8",
    border:"none",
    padding:"8px",
    corderRadius:"8px",
  };
  return(
    <div style={containerStyle}>
    <p style={titleStyle}> InLine Style</p>
    <button style={buttonStyle}>がんば！</button>
    </div>
  )
}