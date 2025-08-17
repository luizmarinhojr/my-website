import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
    // eslint-disable-next-line prefer-const
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}
