import { useNavigate } from 'react-router-dom';

import Button from '../../components/global/Form/Button/Button';

import { Main } from './Swap.styles';

export default function Swap() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <Main>
      <div>
        <h1>Swap</h1>
        <Button onClick={handleClickBack}>Voltar</Button>
      </div>
    </Main>
  );
}
