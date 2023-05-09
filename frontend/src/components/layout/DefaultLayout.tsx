import { AppHeader } from '../ui/AppHeader/AppHeader';
import AppContent from './AppContent';

const DefaultLayout = () => {
    return (
        <>
            <AppHeader />
            <div className='AppContent'>
                <AppContent />
            </div>
        </>
    )
}

export default DefaultLayout;