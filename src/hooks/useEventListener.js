import React from "react";


const useEventListener = (eventName, handler, element = window) => {

    const savedHandler = React.useRef();

    React.useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    React.useEffect(() => {

        // Make sure the element supports addEventListener
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        const eventListener = ( event ) => savedHandler.current(event);

        element.addEventListener(eventName, eventListener);

        // Remove event listener on cleanup
        return () => {
            element.removeEventListener(eventName, eventListener);
        }

    },[eventName, element]);


}


export default useEventListener;
