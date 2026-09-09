import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import '@fontsource/ibm-plex-sans-arabic/700.css';
import {createRoot} from 'react-dom/client';
import {DirectionProvider} from '../components/ui/direction';
import Home from '../app/page';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(<DirectionProvider direction="rtl"><Home/></DirectionProvider>);
