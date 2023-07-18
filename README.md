# Virtual-HeNDI-Spectrometer

The Raston Lab's **Helium NanoDroplet Isolation - Scientific Instrument Simulator** (HeNDI-SIS) was designed to emulate a student's classroom experience with a HeNDI spectrometer. The web application is intended to provide users with an overview of the anatomy of a HeNDI. When used, the application allows users to experiment with changing parameters such as the nozzle temperature to better understand the effect of these parameters on the spectra collected by the instrument. The user can simulate collecting spectra at a variety of nozzle temperatures ranging between 13.5 and 20 K.

*Original work on this project was started by [Isaac Miller](https://github.com/isaac-j-miller)*

## Installation

**NOTE:** The frontend and backend exist together. The backend does not need to be run separately.

1. Clone the repository

2. Move into the cloned repository's directory

   ```bash
   cd Virtual-HeNDI-Spectrometer
   ```

3. Install all `npm` dependencies

   ```bash
   npm install
   ```

4. Run the server locally

   ```bash
   npm start
   ```

# Usage

The intended audience for this application is undergraduate chemistry students studying spectroscopy. The following screenshots are not exhaustive but acknowledge most of the main features:

- Instrument and Parameter View

**_TODO_**

- Spectrum View

**_TODO_**

## Contributing

This project is intended to be a project for recruited undergraduate students, but pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Licensed under **_TODO_**

**Relevant third-party tools and resources we depend on:**

- [big.js](https://github.com/MikeMcl/big.js): JavaScript library for arbitrary-precision decimal arithmetic (Licensed [MIT](https://github.com/MikeMcl/big.js/blob/master/LICENCE.md))

- [Dygraphs](https://github.com/danvk/dygraphs): JavaScript library for interactive data visualization (Licensed [MIT](https://github.com/danvk/dygraphs/blob/master/LICENSE.txt))

- [FileSaver.js](https://github.com/eligrey/FileSaver.js): Solution for saving client-generated data as a file (Licensed [MIT](https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md))

- [GitHub Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action): GitHub Action used to automate deployment of web applications to GitHub Pages (Licensed [MIT](https://github.com/JamesIves/github-pages-deploy-action/blob/dev/LICENSE))

- [MUI](https://mui.com/): React user interface component library (Licensed [MIT](https://github.com/mui/material-ui/blob/master/LICENSE))

- [React](https://react.dev/): JavaScript library for building user interfaces (Licensed [MIT](https://github.com/facebook/react/blob/main/LICENSE))

- [SVGO](https://github.com/svg/svgo): Node.js tool for optimizing SVG files (Licensed [MIT](https://github.com/svg/svgo/blob/main/LICENSE))

- [SVGOMG](https://github.com/jakearchibald/svgomg): Web GUI for SVGO (Licensed [MIT](https://github.com/jakearchibald/svgomg/blob/main/LICENSE.md))

- [SVGR](https://github.com/gregberge/svgr): Tool for transforming SVGs into React components (Licensed [MIT](https://github.com/gregberge/svgr/blob/main/LICENSE))
