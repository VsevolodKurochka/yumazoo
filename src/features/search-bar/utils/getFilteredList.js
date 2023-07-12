import { sanitizeValue } from 'shared/utils';

export const getFilteredList = (list, query) => {
  if (!query) {
    return list;
  }

  return list.filter((item) => sanitizeValue(item.name).includes(sanitizeValue(query)))
}