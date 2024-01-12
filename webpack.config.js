// Setup Webpack task manager.

const path = require('path');

module.exports = (env, argv) => {
    // Set mode to production (standard practice).
    const isProduction = argv.mode === 'development';

    // Create Webpack configurations.
    const config = {
        // Check if mode is production, otherwise defaults to development.
        mode: isProduction ? 'production' : 'development',

        // Setup the entry point path and filename.
        entry: './src/js/main.js',

        // Setup the output point path and filename.
        output: 
        {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist/js'),
        },

        // Setup module functionality rules of converting scss files to css.
        // This enables scss or css to run within js, making the app lean.
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                      'style-loader', // 3. Inject styles into DOM.
                      'css-loader',   // 2. Turn css into commonjs.
                      'sass-loader'   // 1. Turn scss into css.
                    ],
                },
            ],
        },
    };

    // Return Webpack configurations.
    return config;
};
