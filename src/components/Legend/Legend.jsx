import {
  Image,
  LegendImage,
  LegendImages, 
  LegendItem,
  Title,
  LegendBox
} from "./Legend-style";

import required_Mask from "../../assets/imgs/required-mask.png";
import required_Towel from "../../assets/imgs/required-towel.png"
import required_Bottle from "../../assets/imgs/partial-fountain.png"
import recommended_Mask from "../../assets/imgs/recommended-mask.png";
import recommended_Towel from "../../assets/imgs/recommended-towel.png"
import recommended_Bottle from "../../assets/imgs/not_allowed-fountain.png"
import released_lockerroom from "../../assets/imgs/allowed-lockerroom.png"
import partial_lockerroom from "../../assets/imgs/partial-lockerroom.png"
import closed_lockerroom from "../../assets/imgs/closed-lockerroom.png"

function Legend() {
  return (
    <LegendBox>
      <LegendItem>
        <Title>Máscara</Title>
        <LegendImages>
          <LegendImage>
            <Image src={required_Mask} alt="Required Mask" />
            <p>Obrigatório</p>
          </LegendImage>
          <LegendImage>
            <Image src={recommended_Mask} alt="Recommended Mask" />
            <p>Recomendado</p>
          </LegendImage>
        </LegendImages>
      </LegendItem>

      <LegendItem>
        <Title>Toalha</Title>
        <LegendImages>
          <LegendImage>
            <Image src={required_Towel} alt="Required Towel" />
            <p>Obrigatório</p>
          </LegendImage>
          <LegendImage>
            <Image src={recommended_Towel} alt="Recommended Towel" />
            <p>Recomendado</p>
          </LegendImage>
        </LegendImages>
      </LegendItem>

      <LegendItem>
        <Title>Bebedouro</Title>
        <LegendImages>
          <LegendImage>
            <Image src={required_Bottle} alt="Partial Fountain" />
            <p>Parcial</p>
          </LegendImage>
          <LegendImage>
            <Image src={recommended_Bottle} alt="Not Allowed Fountain" />
            <p>Proibido</p>
          </LegendImage>
        </LegendImages>
      </LegendItem>

      <LegendItem>
        <Title>Vestiários</Title>
        <LegendImages>
          <LegendImage>
            <Image src={released_lockerroom} alt="Allowed Lockerroom" />
            <p>Liberado</p>
          </LegendImage>
          <LegendImage>
            <Image src={partial_lockerroom} alt="Partial Lockerroom" />
            <p>Parcial</p>
          </LegendImage>
          <LegendImage>
            <Image src={closed_lockerroom} alt="Closed Lockerroom" />
            <p>Fechado</p>
          </LegendImage>
        </LegendImages>
      </LegendItem>
    </LegendBox>
  );
}

export default Legend;
