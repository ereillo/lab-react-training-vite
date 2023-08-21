function BoxColor(props) {
console.log(props)
const {r, g, b} = props 
const backgroundColor = `rgb(${r}, ${g}, ${b})`

const boxStyle = {
    backgroundColor: backgroundColor,
}

return (
    <div className="box-color" style={boxStyle}>
      {backgroundColor}
    </div>
  );
}

export default BoxColor