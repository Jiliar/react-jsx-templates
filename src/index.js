import React from "react";
import  {render} from "react-dom";


//JSX TEMPLATES

//APLICACIÓN DE CICLOS REPETITIVOS
const names = ["George Bush", "Barak Obama", "Joe Biden", "Bill Clinton"];

//Componente para la creación de colección de componentes
function getNames(){
  const nameList = Array();
  for(var i = 0; i < names.length; i++){
      nameList.push(<li key={i}>{names[i]}</li>);
  }
  return nameList;
}

//Componente para la mostrar una lista de componentes 
const Presidents1 = ()=>{
    return <ul>{getNames()}</ul>;
}

//Componente optimizado para creación de lista de componentes
const Presidents2 = ()=>{
  return <ul>{names.map( (name,index) => <li key={index}>{name}</li>)}</ul>;
} 

//APLICACIÓN DE CONDICIONALES

//Componente condicional con Switch
function SayHelloDifLang1({lang}){
    let answer;
    switch(lang){
      case 'es':
        answer = <span>Hola</span>;
        break;
      case 'en':
        answer = <span>Hello</span>;
        break;
      case 'fr':
        answer = <span>Salut</span>;
        break;
      default:
        answer = <span>Hello</span>;
        break;
    }
    return answer;
}

//Componente condicional con Operador Ternario
//Si existen dos componentes con el mismo nombre entonces actualizara la información usando el ultimo componente
function SayHelloDifLang2({lang}){
  return (
        lang === 'it' ? <span>Ciao</span>:<span>Hola</span>
  );
}

function SayHelloDifLang3({lang}){
  let answer = <span>Hello</span>;
    if(lang == 'ch'){
      answer = <span>Nǐ hǎo</span>;
    }
    return answer;
}

//¿Como dentro un componente puedo retornar otro?
//Los componentes creados por el usuario deben empezar con mayusculas.
const Hello = () =>{
    return (
      <div>
        {<span><SayHelloDifLang1 lang='fr'/></span>}
        <tr/>
        {<span><SayHelloDifLang2 lang='it'/></span>}
        <tr/>
        {<span><SayHelloDifLang3 lang='ch'/></span>}
      </div>
    );
}

//Se puede utilizar expresiones de JS usando {}
const World = () =>{
    const name = 'I am JianSyStyle';
    const html_name = <h5>{name}</h5>
    const world = <span>World! {html_name}</span>;
    return world
}

const App = () => {
  return (
    <div>
      <h1><Hello /> <World /></h1>
      <Presidents1 />
      <Presidents2 />
    </div>
  );
}

//root component: <App />
/*El componente se se monta sobre un contenedor, si se pasa varias veces el componente al mismo contenedor la primera vez renderiza todo el modelo y las siguientes veces solo actualiza las partes necesarias.*/
render(<App/>, document.getElementById("react-app"))