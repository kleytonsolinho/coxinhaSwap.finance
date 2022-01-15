import { useNavigate } from 'react-router-dom';

import Button from '../../components/global/Form/Button/Button';

import { Main } from './Dashboard.styles';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <Main>
      <div>
        <h1>Dashboard</h1>
        <Button onClick={handleClickBack}>Voltar</Button>
      </div>
    </Main>
  );
}
