# Wasm example

## About

An example of a wasm project using https://rustwasm.github.io/docs/book/print.html and following this tutorial https://rustwasm.github.io/wasm-bindgen/examples/2d-canvas.html#2d-canvas

## Installing

1. Clone this project
    ```sh
    git clone --
    ```
2. Install rust: https://www.rust-lang.org/tools/install
3. Install wasm-pack: https://rustwasm.github.io/wasm-pack/installer/
    - Used to build rust-generated packages for use with JavaScript
4. Install cargo-generate (as of writing, the latest version doesn't work on windows so I use v0.16.0):
    ```sh
    cargo install cargo-generate --version 0.16.0
    ```
5. Using `cargo-generate` clone this template repo. It will prompt you with a project name (`{project_name}`).
    ```
    cargo generate --git https://github.com/rustwasm/wasm-pack-template
    ```
6. Done! Everything should be installed. See **running** on how to run the project.

## Running

```sh
cd {project_name}
wasm-pack build

cd www
npm i
npm run build
```
