---
id: relative-date-time-formatter
title: RelativeDateTimeFormatter
sidebar_label: RelativeDateTimeFormatter
---

The `RelativeDateTimeFormatter` class allows you to represent the difference between two dates in a human-readable format.

Read the official documentation for `RelativeDateTimeFormatter` here: https://docs.scriptable.app/relativedatetimeformatter

## Comparing two dates

The `string()` instance method of a `RelativeDateTimeFormatter` accepts two arguments, both of which are `Date` objects: `date` and `referenceDate`. The output of this method is a string describing `date` relative to `referenceDate`.

## Locale

The exact text of the formatted relative date and time depends on the `locale` instance property, which defaults to the locale of your device but can be any locale that you set. This property is a string (e.g. `en_US`).

## Named dates and times

Some relative dates and times, such as `now`, `today`, `tomorrow`, `yesterday`, and so on, are special and can be written as words instead of using numbers.

By default, these special names are used when possible. However, you can decide whether to keep this or only use numbers with the following instance methods:

- `useNamedDateTimeStyle()`: Use special names for dates and times if they are available. This is the default behavior.
- `useNumericDateTimeStyle()`: Ignore special names, and always use the numeric representation for all dates. For example, this means that “now” is represented as “in 0 seconds,” and “tomorrow” is represented as “in 1 day.”

## Example

```javascript
const rdtf = new RelativeDateTimeFormatter();
rdtf.useNumericDateTimeStyle();
const now = new Date();
const inOneYear = new Date();
inOneYear.setFullYear(inOneYear.getFullYear() + 1);
const dateString = rdtf.string(inOneYear, now);
console.log(dateString); // "in 1 year"
```