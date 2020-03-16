const path = require('path');//пакет, вшитый в ноду
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',//точка входа в приложение для вебпака
    output: {
        filename: 'main.js',// название собранного js
        path: path.resolve(__dirname, 'dist'),//и место, где он будет лежать
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".less"]//расширения файлов, которые вебпак будет обрабатывать
    },
    module: {
        rules: [
            {
                test: /\.less$/i,//регулярка, выбирающая из проекта все файлы с таким расширением
                use: ['style-loader', 'css-loader?modules=true', 'less-loader'],//обработчики, работающие справа налево
                //?modules=true передает опцию в css-loader, что надо генерировать уникальные названия стилей,
                // style-loader нужен только для дев режима - встраивает стили в html

            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }//use и loader - синонимичны, но use ждет массив, а loader - строку.
            // ts-loader транспилирует из ts в js. работате чуть медленнее, чем babel.
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),//чтобы вставить в мой html собравшийся файл main.js
// и положить его в папку dist с таким именем
        })
    ],
    devServer: {//для локальной разработки. под капотом hot-reload
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};