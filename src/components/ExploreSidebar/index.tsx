import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

import * as S from './styles'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom>Ordenar</Heading>
    <Radio
      id="high-to-low"
      name="sort-by"
      label="Maior Valor"
      labelFor="high-to-low"
      value="high-to-low"
    />

    <Radio
      id="low-to-high"
      name="sort-by"
      label="Menor Valor"
      labelFor="low-to-high"
      value="low-to-high"
    />

    <Heading lineBottom>Preço</Heading>
    <Checkbox name="under-200" label="Até 200" labelFor="under-200" />
    <Checkbox name="under-200" label="Até 200" labelFor="under-200" />
    <Checkbox name="under-200" label="Até 200" labelFor="under-200" />
    <Checkbox name="under-200" label="Até 200" labelFor="under-200" />
    <Checkbox name="under-200" label="Até 200" labelFor="under-200" />

    <Heading lineBottom>Categoria</Heading>
    <Checkbox name="ford" label="Ford" labelFor="ford" />
    <Checkbox name="ford" label="Ford" labelFor="ford" />
    <Checkbox name="ford" label="Ford" labelFor="ford" />

    <Heading lineBottom>Localidade</Heading>
    <Checkbox name="sao-paulo" label="São Paulo" labelFor="sao-paulo" />
    <Checkbox name="sao-paulo" label="São Paulo" labelFor="sao-paulo" />
    <Checkbox name="sao-paulo" label="São Paulo" labelFor="sao-paulo" />

    <Button fullwidth size="medium">
      Buscar
    </Button>
  </S.Wrapper>
)

export default ExploreSidebar
