import GlobalContextProvider from './contexts';

import { GlobalStyles } from './styles/global';
import Approutes from './routes';

export default function App() {
  return (
    <GlobalContextProvider>
      <>
        <GlobalStyles />
        <Approutes />
      </>
    </GlobalContextProvider>
  );
}
