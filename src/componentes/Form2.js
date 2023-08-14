import logo from '../componentes/logo-visual-header.png';
import { useState} from 'react';
import './Form.css';

//icones do formulário

function Form2(){
    function validarUsuario(e){
        e.preventDefault()
        console.log(usuario)
        console.log(senha)

    }
    const [usuario,setUsuario] = useState();
    //usuario-> valor atual 
    //alterar o valor do usario=
    const [senha,setSenha]= useState()


     

        return(
        <div className="App">
            <div className="col1">
                <h1>Estados - React</h1>
                <img src={logo} className="App-logo" alt="logo infinity"></img>
            </div>
            <div className='col2'>
                <form onSubmit={validarUsuario} action="#">
                <label>Usuário:</label>
                <input  
                type ="text"
                id="usuario"
                name="usuario"
                onChange = {(e)=> setUsuario(e.target.value)}

                >
                </input>
                <label >Senha:</label>
                <input 
                type ="password"
                id="senha"
                name="senha"
                onChange = {(e)=> setSenha(e.target.value)}
                ></input>
                <button  type="submit" value='Entrar'>Entrar</button>

                </form>

            </div>

        </div>



    );
}
export default Form2;