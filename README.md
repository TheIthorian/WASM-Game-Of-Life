# Wasm example

## About

An example of a wasm project using https://rustwasm.github.io/docs/book/game-of-life/implementing.html and following this tutorial https://rustwasm.github.io/wasm-bindgen/examples/2d-canvas

## Installing

1. Clone this project
    ```sh
    git clone --
    ```
2. Install rust: https://www.rust-lang.org/tools/install
3. Install wasm-pack: https://rustwasm.github.io/wasm-pack/installer/
    - Used to build rust-generated packages for use with JavaScript
4. Compile the wasm
    ```sh
    wasm-pack build
    ```
5. Done! Everything should be installed. See **running** on how to run the project.

## Running

```sh
wasm-pack build

cd www
npm i
npm run build
npm start
```
