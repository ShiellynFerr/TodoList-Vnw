import React, { Component } from "react";
import { BoxFlex, Button, Container, Input, Item } from "../styles/GlobalSyles";

export default class Main extends Component {
  state = {
    filme: "",
    listaFilmes: []
  };

  handleChange = (event) => {
    this.setState({
      filme: event.target.value
    });
  };
  Send = (event) => {
    event.preventDefault(); // uma forma de envia com enter
    if (this.state.filme !== "") {
      this.setState({
        listaFilmes: this.state.listaFilmes.concat({
          filme: this.state.filme,
          id: Date.now()
        }),
        filme: ""
      });
    }
  };

  Remove = (id) => {
    this.setState({
      listaFilmes: this.state.listaFilmes.filter((ident) => ident.id !== id)
    });
  };

  RemoveAll = () => {
    this.setState({
      listaFilmes: this.state.listaFilmes.filter((ident) => ident.listaFilmes)
    });
  };

  render() {
    return (
      //<form onSubmit={(e)=>{e.preventDefault()}}> uma forma de fazer enviar com enter
      <Container>
        <h1 className="title">TODO LIST</h1>
      <form>
        <BoxFlex direction="rows">
        <Input onChange={this.handleChange} value={this.state.filme} />
        <Button onClick={this.Send}>Adicionar</Button>
        </BoxFlex>
        {this.state.listaFilmes.map((item) => (
          <div>
            <ul>
              <Item>{item.filme}
              <button
              onClick={() => {
                this.Remove(item.id);
              }}
            >
           Remover
            </button>
              </Item>
            </ul>
          </div>
        ))}
      </form>
      </Container>
    );
  }
}