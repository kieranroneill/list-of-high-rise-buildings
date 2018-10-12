import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

export const baseApiUrl = '/api';
export const distPath = join(__dirname, '..', 'dist', 'web');
export const srcPath = join(__dirname, '..', 'src', 'web');
export const title = 'City List';

export const entry = [
    resolve(srcPath, 'index.ts'),
];
export const extensions = [
    '.js',
    '.ts',
    '.tsx'
];
export const plugins = [
    new FaviconsWebpackPlugin({
        logo: resolve(srcPath, 'favicon.png'),
        title,
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
        },
    }),
];
export const rules = [
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
            configFile: join(__dirname, '..', 'tsconfig.web.json'),
        }
    },
];
