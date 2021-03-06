// Library
import canvasSketch from 'canvas-sketch';

// Export the plugin
export default (
    { app },
    inject
) => {

    inject(
        'canvasSketch',
        canvasSketch,
    );

    inject(
        'sketch',
        (
            settings,
            callback,
        ) => {

            if( settings && callback && typeof callback === 'function' && app.$canvasSketch ) {

                return app.$canvasSketch(
                    callback,
                    {
                        hotkeys: false,
                        ... ( settings || {} ),
                    }
                );

            }

            return null;

        }
    );

};
