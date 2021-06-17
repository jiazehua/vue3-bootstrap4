// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
    input: 'src/libs/index.js',
    external: ['bootstrap', 'vue'],
    output: [{
        globals: {
            vue: 'Vue',
            bootstrap: 'bootstrap',
        },
        name: 'V3B5',
        file: 'dist/libs/vue3-bootstrap5.js',
        format: 'umd',
        plugins: [terser()]
    },
    {
        globals: {
            vue: 'Vue',
            bootstrap: 'bootstrap',
        },
        name: 'V3B5',
        file: 'dist/libs/vue3-bootstrap5.esm.js',
        format: 'es',
        plugins: [terser()]
    }
    ],
    plugins: [
        scss({ include: /\.scss$/, sass: dartSass }),
        // esbuild({
        //     include: /\.[jt]s$/,
        //     minify: process.env.NODE_ENV === 'production',
        //     target: 'es2015'
        // }),
        vue({
            include: /\.vue$/,
        })
    ],
}