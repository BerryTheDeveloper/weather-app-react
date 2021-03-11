import { useState, useEffect } from "react";

const useGeolocation = () => {
    const [geolocation, setGeolocation] = useState({});

    function handleSuccess(position) {
        const coords = position.coords;

        setGeolocation({
            lat: coords.latitude,
            lon: coords.longitude,
            err: null,
        });
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0,
    };

    function handleError(err) {
        setGeolocation({ ...geolocation, err });
    }

    useEffect(() => {
        if (!navigator) return;
        navigator.geolocation.getCurrentPosition(
            handleSuccess,
            handleError,
            options
        );
    }, []);

    return geolocation;
};

export { useGeolocation };
