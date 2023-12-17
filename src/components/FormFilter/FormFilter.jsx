import {
  Button,
  Form,
  FormGroup,
  Input,
  InputShowOpen,
  Inputs,
  TitleForm,
  ValueText,
} from "./FormFilter-Styled";
import IconHours from "./../../assets/imgs/icon-hour.png";

function FormFilter() {
  return (
    <Form>
      <TitleForm>
        <img src={IconHours} alt="" />
        <h1>Horário</h1>
      </TitleForm>
      <Inputs>
        <h1>Qual período quer treinar?</h1>
        <br />
        <hr />
      </Inputs>
      <FormGroup>
        <div>
          <Input type="radio" id="opcao1" name="opcao" value="opcao1" />
          <label htmlFor="opcao1">Manhã</label>
        </div>
        <ValueText>06:00 às 12:00</ValueText>
        <hr />
        <div>
          <Input type="radio" id="opcao2" name="opcao" value="opcao2" />
          <label htmlFor="opcao2">Tarde</label>
        </div>
        <ValueText>12:01 às 18:00</ValueText>
        <hr />
        <div>
          <Input type="radio" id="opcao3" name="opcao" value="opcao3" />
          <label htmlFor="opcao3">Noite</label>
        </div>
        <ValueText>18:00 às 23:00</ValueText>
        <hr />
      </FormGroup>
      <InputShowOpen>
        <div>
          <input type="checkbox" name="ShowOpen" id="ShowOpen" />
          <label htmlFor="ShowOpen">Exibir unidades fechadas</label>
        </div>
        <h2>Resultados encontrados: 0</h2>
      </InputShowOpen>
      <Button>
        <button>ENCONTRAR UNIDADE</button>
        <button>LIMPAR</button>
      </Button>
    </Form>
  );
}

export default FormFilter;
