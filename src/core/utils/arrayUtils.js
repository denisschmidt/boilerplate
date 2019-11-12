import { filter, includes, pluck, map, addIndex } from 'ramda';

export const removeOrAdd = (id, checkedIds) =>
  includes(id, checkedIds) ? filter(checkedId => checkedId !== id, checkedIds) : [...checkedIds, id];

export const clearOrPluck = (items, checkedIds, idKey) =>
  items.length === checkedIds.length ? [] : pluck(idKey, items);

export const removeItems = (items, itemsIds, idKey) => filter(item => !includes(item[idKey], itemsIds), items);

export const removeItem = (items, itemId, idKey) => filter(item => item[idKey] !== itemId, items);

export const updateItem = (items, updatedItem, idKey) =>
  map(item => (item[idKey] === updatedItem[idKey] ? { ...item, ...updatedItem } : item), items);

export const searchItems = (items, searchString, nameKey, replace = /\s/g) =>
  filter(
    item =>
      item[nameKey]
        .replace(replace, '')
        .toLowerCase()
        .includes(searchString.replace(replace, '').toLowerCase()),
    items,
  );

export const mapIndexed = addIndex(map);
export const filterIndexed = addIndex(filter);
