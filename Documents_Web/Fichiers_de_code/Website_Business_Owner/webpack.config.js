var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    .addEntry('jquery', './assets/adminlte/plugins/jquery/jquery.min.js')
    .addEntry('adminltejs', './assets/adminlte/dist/js/adminlte.min.js')
    .addEntry('bootstrapJs', './assets/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js')
    .addEntry('warehouseProduct', './assets/js/warehouseProduct.js')
    .addEntry('warehouseDish', './assets/js/warehouseDish.js')
    .addEntry('orderDish', './assets/js/orderDish.js')
    .addEntry('locateTruck', './assets/js/locateTruck.js')
    .addEntry('connectCardFront', './assets/js/connectCardFront.js')
    .addEntry('checkboxes', './assets/js/checkboxesComplaintForm.js')
    .addEntry('trad', './assets/js/tradEdit.js')
    .addEntry('webGl', './assets/js/dev/variables.js')
    .addEntry('weGLinit', './assets/js/init.js')
    .addEntry('turnover', './assets/js/turnover.js')
    .addEntry('ranks' , './assets/js/rank.js')
    .addEntry('category', './assets/js/productCategory.js')
    .addEntry('deleteObj', './assets/js/deleteObject.js')
    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')
;

module.exports = Encore.getWebpackConfig();
