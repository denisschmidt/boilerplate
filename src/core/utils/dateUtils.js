import format from 'date-fns/format';
import isDate from 'date-fns/isDate';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';
import ru from 'date-fns/locale/ru';
import en from 'date-fns/locale/en-US';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import startOfWeek from 'date-fns/startOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import subDays from 'date-fns/subDays';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import endOfWeek from 'date-fns/endOfWeek';

export const CUSTOM_DATE_RANGE_ID = 'CUSTOM_DATE_RANGE';

export const INFINITY_DATE = new Date('2999-12-31T00:00:00.000+0300');

export const LOCAL_DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";

export const CURRENT_WEEK_RANGE = {
  dateRange: {
    dateFrom: startOfWeek(new Date(), { weekStartsOn: 1 }),
    dateTo: new Date(),
  },
  id: 'currentWeek',
};

export const LAST_WEEK_RANGE = {
  dateRange: {
    dateFrom: subWeeks(startOfWeek(new Date(), { weekStartsOn: 1 }), 1),
    dateTo: subWeeks(endOfWeek(new Date(), { weekStartsOn: 1 }), 1),
  },
  id: 'lastWeek',
};

export const LAST_7_DAYS_RANGE = {
  dateRange: {
    dateFrom: subDays(new Date(), 7),
    dateTo: new Date(),
  },
  id: 'last7Days',
};

export const CURRENT_MONTH_RANGE = {
  dateRange: {
    dateFrom: startOfMonth(new Date()),
    dateTo: new Date(),
  },
  id: 'currentMonth',
};

export const LAST_30_DAYS_RANGE = {
  dateRange: {
    dateFrom: subDays(new Date(), 30),
    dateTo: new Date(),
  },
  id: 'last30Days',
};

export const LAST_6_MONTHS_RANGE = {
  dateRange: {
    dateFrom: subMonths(new Date(), 6),
    dateTo: new Date(),
  },
  id: 'last6Months',
};

export const CUSTOM_DATE_RANGES = [
  CURRENT_WEEK_RANGE,
  LAST_WEEK_RANGE,
  LAST_7_DAYS_RANGE,
  CURRENT_MONTH_RANGE,
  LAST_30_DAYS_RANGE,
  LAST_6_MONTHS_RANGE,
];

export const getValidDateFormat = date => (isDate(date) ? date : parseISO(date));

export const formatDate = (date, formatStr, locale) => {
  const parsedDate = getValidDateFormat(date);
  if (isValid(parsedDate)) {
    return format(parsedDate, formatStr, {
      locale: locale === 'en' ? en : ru,
      awareOfUnicodeTokens: true,
    });
  }
  return date;
};

export const diffDate = (startDate, endDate, locale) => {
  const parsedDateStart = getValidDateFormat(startDate);
  const parsedDateEnd = getValidDateFormat(endDate);

  return differenceInMinutes(parsedDateEnd, parsedDateStart, { locale });
};

export const formatDistance = (startDate, endDate, locale) => {
  const parsedDateStart = getValidDateFormat(startDate);
  const parsedDateEnd = getValidDateFormat(endDate);

  return formatDistanceStrict(parsedDateEnd, parsedDateStart, { locale });
};

export const formatToLocalDate = isoDate => formatDate(isoDate, LOCAL_DATE_FORMAT);
