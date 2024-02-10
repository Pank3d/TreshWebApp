import { useState } from "react";
import Form from "react-bootstrap/Form";


function Forma() {
    const [textInput, setTextInput] = useState<string[]>([''])
    const [tgInput, setTgInput] = useState<string[]>(['']);
    const [error, setError] = useState<boolean>(false)

   /*  const inputCheck = ({textInput,tgInput } : {textInput:string[],tgInput:string[]}) => {
        if (tgInput[0] !== "@" && textInput.length <= 5) {
            () => setError(true)
        } else {
            () => setError(false)
        }
    } */
    
    const textOnChange = (e: any) => {
        setTextInput(e.target.value)
        if (textInput.length <= 5) {
          setError(false);
        } else {
          setError(true);
        }
    };
    const tgOnChange = (e: any) => {
         setTgInput(e.target.value);
         if (tgInput[0] !== "@") {
           setError(true);
         } else {
            setError(false);
         }
     
    };
 
    
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-3-1">Ваш телеграмм </Form.Label>
        <Form.Control
          onChange={(e) => tgOnChange(e)}
          className="mb-3-2"
          type="email"
          placeholder="@example"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="mb-3-1">Ваще обращения</Form.Label>
        <Form.Control
          onChange={(e) => textOnChange(e)}
          className="mb-3-22"
          as="textarea"
          rows={10}
          placeholder="Место для ващих мыслей"
        />
      </Form.Group>

      <button disabled = {!error} className="subBtn1">Отправить</button>
    </Form>
  );
}

export default Forma;

