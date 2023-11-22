# Kabiyè en poche

## Developement

Check Expo docs for requirements <https://docs.expo.dev/get-started/installation/#requirements>

Also check the recommended tools from Expo docs <https://docs.expo.dev/get-started/installation/#recommended-tools>

### Linting

We are using ESLint. Install the [ESLint VSCode plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to get insights while writing the code.

### Pre commit hooks

Commitlint will check if the commit message respects the desired format and reject the commit if not.

Lintstaged will run eslint and Typescript check and reject commit if any of thoses checks failed.

### Run the project

```bash
npm run data:download # to get data from Airtable. !!! You need to run this at least once before launching the project. Unless it will fail to find utils/data/alphabet.json file
npm run ios # to run on iOS
npm run android # to run on Android
```

### Translations

Translation files are located in `i18n/` folder.
To help with editing translation files, install the [i18n Ally VSCode Extension](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

## DATA

Data is coming from Airtable.

Alphabet list -> <https://airtable.com/appK7j84d1AB9WDjw/tblYaUlSlj2mCcOSE/viw6qTt8RbrkjOrio>
