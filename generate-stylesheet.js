const { encode } = require('64')
const fs = require('fs')
const read = path => encode(fs.readFileSync(path))

const argv = require('yargs')
  .option('outfile', {
    alias: 'o',
    describe: 'Output filename'
  })
  .demandOption(['outfile']).argv

const fonts = [
  // Regular
  {
    data: read('WOFF2/NotoSans-Regular.woff2'),
    fontFamily: 'Noto Sans',
    fontWeight: 400,
    fontStyle: 'normal'
  },
  {
    data: read('WOFF2/NotoSans-Italic.woff2'),
    fontFamily: 'Noto Sans',
    fontWeight: 400,
    fontStyle: 'italic'
  },
  // Semibold
  {
    data: read('WOFF2/NotoSans-SemiBold.woff2'),
    fontFamily: 'Noto Sans',
    fontWeight: 600,
    fontStyle: 'normal'
  },
  {
    data: read('WOFF2/NotoSans-SemiBoldItalic.woff2'),
    fontFamily: 'Noto Sans',
    fontWeight: 600,
    fontStyle: 'italic'
  },
  // Light
  {
    data: read('WOFF2/NotoSans-Light.woff2'),
    fontFamily: 'Noto Sans',
    fontWeight: 300,
    fontStyle: 'normal'
  },
  {
    data: read('WOFF2/NotoSans-LightItalic.woff2'),
    fontFamily: 'Noto Sans',
    fontWeight: 300,
    fontStyle: 'italic'
  },
  // Monospace
  {
    data: read('WOFF2/NotoMono.woff2'),
    fontFamily: 'Noto Mono',
    fontWeight: 400,
    fontStyle: 'normal'
  }
]

const stylesheet = fonts
  .map(
    ({ data, fontFamily, fontWeight, fontStyle }) =>
      `@font-face {
  font-family: "${fontFamily}";
  src: url(data:font/woff2;charset=utf-8;base64,${data.toString()}), format("woff2");
  font-weight: ${fontWeight};
  font-style: ${fontStyle};
}`
  )
  .join('\n\n')

fs.writeFileSync(argv.outfile, stylesheet)
