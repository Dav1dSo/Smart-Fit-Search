import FormGroup from "./FormFilter-Styled";
import iconHours from "../../assets/imgs/icon-hour.png"
import axios from "axios";
import { useState } from "react";


const FormFilter = () => {
  const [Unidades, setUnidades] = useState();

  const GetUnits = async (event) => {
    event.preventDefault();
    
    try {
        const response = await axios.get('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
        const units = await response.data.locations;
        setUnidades(units);
    } catch (error) {
      console.log('Erro ao fazer a requisição:', error);
    }
    
  };

  const handleClean = () => {
    //limpar o formulário
  };

  return (
    <FormGroup onSubmit={GetUnits}>
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
        <button type="submit" className="btn btn-primary" onClick={GetUnits}>
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