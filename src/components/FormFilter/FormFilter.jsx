import FormGroup from "./FormFilter-Styled";
import iconHours from "../../assets/imgs/icon-hour.png"

const FormFilter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch
  };

  const handleClean = () => {
    //limpar o formulário
  };

  return (
    <FormGroup onSubmit={handleSubmit}>
      <div className="form-icon">
        <img src={iconHours} alt="Hour Icon" />
        Horário
      </div>
      <h2>Qual horário você quer treinar?</h2>
      <div className="radio-wrapper">
        <input type="radio" name="hour" value="morning" />
        <label htmlFor="morning">Manhã</label>
        <span>06:00 às 12h</span>
      </div>
      <div className="radio-wrapper">
        <input type="radio" name="hour" value="afternoon" />
        <label htmlFor="afternoon">Tarde</label>
        <span>12:01 às 18h</span>
      </div>
      <div className="radio-wrapper">
        <input type="radio" name="hour" value="night" />
        <label htmlFor="night">Noite</label>
        <span>18:01 às 23h</span>
      </div>
      <div className="checkbox-wrapper">
        <div className="checkbox">
          <input type="checkbox" name="showClosed" />
          <label htmlFor="showClosed">Exibir unidades fechadas</label>
        </div>
        <span>Resultados encontrados: 0</span>
      </div>
      <div className="btn-wrapper">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Encontrar unidade
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleClean}>
          Limpar
        </button>
      </div>
    </FormGroup>
  );
};

export default FormFilter;