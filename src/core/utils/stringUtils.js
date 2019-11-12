import { compose, identity, ifElse, isEmpty, isNil, replace, slice, trim } from 'ramda';

export const TEXT_AREA_MAX_LENGTH = 1024;

export const PHONE_CHARS_REGEXP = /[+ )()-]/g;

export const currencyFormat = currency =>
  isNil(currency) ? currency : currency.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const phoneNumberFormatter = number =>
  number ? number.replace(/(\d{3})(\d{3})(\d{2})(\d+)/g, '+7 ($1) $2-$3-$4') : '';

export const formatPhoneToString = ifElse(
  isEmpty,
  identity,
  compose(
    slice(1, Infinity),
    replace(PHONE_CHARS_REGEXP, ''),
  ),
);

export const trimString = value => trim(value || '');

export const isHex = str => {
  const string = str.replace(/\s/g, '');
  const hexString = string.match(/^[0-9A-Fa-f]+$/);
  const dword = !(string.length % 2);
  return hexString && dword;
};

export const replaceHyphensToNonBreaking = value => value.replace(/-/g, '\u2011');
