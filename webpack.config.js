import CleanPlugin from 'clean-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    join,
    resolve,
} from 'path';

const distPath = join(__dirname, 'dist', 'web');
const srcPath = join(__dirname, 'src', 'web');
const title = 'City List';

export default {
    devtool: 'source-map',

    entry: {
        main: resolve(srcPath, 'index.ts'),
    },

    mode: 'production',

    module: {
        rules: [
            // Templating.
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },

            // Scripts.
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    configFile: join(__dirname, 'tsconfig.web.json'),
                }
            },
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // Rule of thumb: add any vendor files that are > 50kb
                    test: /react|react-dom|react-router-dom/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },

    output: {
        path: distPath,
        filename: '[name].[hash].js',
    },

    plugins: [
        new CleanPlugin([distPath], { root: __dirname }),
        new FaviconsWebpackPlugin({
            logo: resolve(srcPath, 'favicon.png'),
            title,
        }),
        new HtmlWebpackPlugin({
            title,
            inject: 'body',
            template: resolve(srcPath, 'index.hbs'),
            minify: false,
        }),
    ],

    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ],
    }
};
