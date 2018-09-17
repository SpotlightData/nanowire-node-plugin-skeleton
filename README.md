# node-recognizers

A wrapper plugin for `@microsoft/recognizers-text-suite`.

## Commands

- Installation: `yarn install`
- Build: `yarn build`
- Tests: `yarn test`

## About

Currently supports the follow extracts

```javascript
const defaultCulture = Recognizers.Culture.English;

export function setup(culture = defaultCulture) {
  return {
    numbers: new NumberRecognizer(culture).getNumberModel(),
    ordinal: new NumberRecognizer(culture).getOrdinalModel(),
    percentages: new NumberRecognizer(culture).getPercentageModel(),
    ages: new NumberWithUnitRecognizer(culture).getAgeModel(),
    currencies: new NumberWithUnitRecognizer(culture).getCurrencyModel(),
    dimensions: new NumberWithUnitRecognizer(culture).getDimensionModel(),
    temperatures: new NumberWithUnitRecognizer(culture).getTemperatureModel(),
    dates: new DateTimeRecognizer(culture).getDateTimeModel(),
    numbers: new SequenceRecognizer(culture).getPhoneNumberModel(),
    ipAddresses: new SequenceRecognizer(culture).getIpAddressModel(),
    mentions: new SequenceRecognizer(culture).getMentionModel(),
    emails: new SequenceRecognizer(culture).getEmailModel(),
    urls: new SequenceRecognizer(culture).getURLModel(),
    hastags: new SequenceRecognizer(culture).getHashtagModel(),
  };
}
```
