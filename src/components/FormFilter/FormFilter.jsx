import FormGroup from "./FormFilter-Styled";
import iconHours from "../../assets/imgs/icon-hour.png"
import axios from "axios";
import { useEffect, useState } from "react";


const FormFilter = ({ onUnitClick }) => {
  const [Unidades, setUnidades] = useState([]);
  const [Filter, setFilter] = useState('');

  const OptionFilter = (event) => {
    setFilter(event.target.value);
  }

  const GetUnits = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.get('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
        const units = await response.data.locations;

        if (Filter !== '') {
          if (units && units.length > 0) {
            const FilterUnits = units.filter(unit => {
              if (unit.schedules && unit.schedules.length > 0) {
                const hasMatchingSchedule = unit.schedules.some(schedule => {
                  return (
                    schedule.hour &&
                    schedule.hour.includes(Filter) &&
                    schedule.hour !== 'Fechada'
                  );
                });
        
                return hasMatchingSchedule;
              }
              return false;
            });
        
            setUnidades(FilterUnits);
          }
        } else setUnidades(units);
    } catch (error) {
      console.log('Erro ao fazer a requisição:', error);
    }
  };

  
  const handleUnitSelection = (unitData) => {
    onUnitClick(unitData); 
  };  

  useEffect(() => {
    if (Unidades.length > 0) {
      handleUnitSelection(Unidades);
    }
  }, [Unidades]);

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
        <input onChange={OptionFilter} type="radio" name="hour" value="06h às 12h" />
        <label htmlFor="morning">Manhã</label>
        <span>06:00 às 12:01</span>
      </div>
      <div className="radio-wrapper">
        <input onChange={OptionFilter} type="radio" name="hour" value="12h às 18h" />
        <label htmlFor="afternoon">Tarde</label>
        <span>12:01 às 18:00</span>
      </div>
      <div className="radio-wrapper">
        <input onChange={OptionFilter} type="radio" name="hour" value="18h às 23h" />
        <label htmlFor="night">Noite</label>
        <span>18:01 às 23:00</span>
      </div>
      <div className="checkbox-wrapper">
        <div className="checkbox">
          <input onChange={OptionFilter} type="checkbox" name="showClosed" />
          <label htmlFor="showClosed">Exibir unidades fechadas</label>
        </div>
        <span>Resultados encontrados: 0</span>
      </div>
      <div className="btn-wrapper">
        <button type="submit" className="btn btn-primary" onClick={() => handleUnitSelection(Unidades)}>
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