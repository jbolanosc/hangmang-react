import React from "react";



//------------------------------------------
export default class Ahorcado extends React.Component {
  constructor(props) {
    super(props);
    this.CambiaArchivo = this.CambiaArchivo.bind(this);
    this.state = {

      Num_Foto: this.props.fallos

    };
  }

  componentDidUpdate(){
    this.CambiaArchivo();
  }
  //------------------------------------------
  DibujaAhorcado() {
    return <MuestraFoto lafoto={this.state.listaFotos[this.state.Num_Foto]} />;
  } //------------------------------------------
  CambiaArchivo() {
    console.log(this.props.fallos);
    this.state.Num_Foto = this.props.fallos;
  } //------------------------------------------
  render() {
    return (
      <div  className="container">
        <div>{this.DibujaAhorcado()}</div>
      </div>
    );
  }
}
