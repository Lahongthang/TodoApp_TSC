import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Router from './routes';
import ThemeProvider from './theme';
import { getLocaleDateFns } from './configs/lang';
import { useLocales } from './hooks';
import NotiStackProvider from './components/NotiStackProvider';

const App = () => {
  const { currentLang } = useLocales()
  const localeDateFns = getLocaleDateFns(currentLang.value);

  return (
    <LocalizationProvider adapterLocale={localeDateFns} dateAdapter={AdapterDateFns}>
      <ThemeProvider>
        <NotiStackProvider>
          <Router />
        </NotiStackProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
