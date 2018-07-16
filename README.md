# [lit-element-docs](https://github.com/katejeffreys/lit-element-docs)

## Run locally  

Requires Node 10+ because of `fsPromises` used in buildscripts/convert-markdown.js.

```bash
git clone https://github.com/katejeffreys/lit-element-docs.git
cd lit-element-docs
npm install -g polymer-cli@latest
npm install
rm -f samples/.DS_Store
node buildscripts/convert-readmes.js
polymer serve
```
