# Noto Sans

Your Noto Sans font, packaged.

## Usage

1. `yarn add @digabi/noto-sans`
2. `import '@digabi/noto-sans/stylesheet.css'`
3. `font-family: 'Noto Sans', sans-serif;`
4. ???
5. €€€€

## Update Noto sans fonts

1. Copy ttf fonts from official noto sans and noto mono pages to TTF folder
2. Convert ttf fonts to woff fonts. Example:
  - ttf2woff TTF/NotoSans-SemiBoldItalic.ttf WOFF/NotoSans-SemiBoldItalic.woff
3. Convert ttf fonts to woff2 fonts. Example:
  - cat TTF/NotoMono.ttf | ttf2woff2 > WOFF2/NotoMono.woff2 

Release new version:

```
npm version [patch, minor, major]
git push --follow-tags
```

Release new beta version

```
npm version prerelease --preid=beta
git push --follow-tags
```
