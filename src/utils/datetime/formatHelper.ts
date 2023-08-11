/* eslint-disable no-nested-ternary */
import {
	getYear, format, formatDistance, formatRelative,
	isDate, differenceInDays, isSameDay, isSameMonth
} from "date-fns";
import { enUS, vi, ja } from "date-fns/locale"; // import all locales we need
import { defaultLang } from "../../configs/lang"
import { FormatType } from "../constants/datetime/formatType";

export const locales = {
	en: enUS,
	vi,
	ja }; // used to look up the required locale

export const formatDate = (value: any, formatType: any, lng: 'en' | 'vi' | 'ja') => {
	if (!isDate(value)) return value;
	const locale = locales[lng ?? 'en'];
	switch (formatType) {
		case FormatType.short:
			return format(value, "P", { locale })
		case FormatType.long:
			return format(value, "PPPP", { locale })
		// case FormatType.longDate:
		// 	return format(value, "", { locale })
		case FormatType.longDateAbbreviated:
			return format(value, "PPP", { locale })
		case FormatType.longDateWithDay:
			return format(value, "PPPP", { locale })
		case FormatType.relative:
			return formatRelative(value, new Date(), { locale })
		case FormatType.ago:
			return formatDistance(value, new Date(), {
				locale,
				addSuffix: true,
			})
		case FormatType.monthDayOnly:
			return value.toLocaleString(lng, { month: 'numeric', day: 'numeric' })
		case FormatType.flexible:
			if (isRecentlyDate(value)) return formatDistance(value, new Date(), {
				locale,
				addSuffix: true,
			})
			return value.toLocaleString(lng, { year: "numeric", month: 'numeric', day: 'numeric' })
		case FormatType.fullDateTime:
			return format(value, "PPPp", { locale })
		default:
			return format(value, "P", { locale })
	}
}
function isRecentlyDate(date: Date) {
	return differenceInDays(Date.now(), date) < 10
}

const FORMAT_TYPE = {
	sameMonth: 'sameMonth',
	diffMonth: 'diffMonth'
}

const LANGUAGES = {
	en: 'en',
	ja: 'ja'
}

export function formatDateRange(startDate: Date, endDate: Date, language = LANGUAGES.ja as 'en' | 'vi' | 'ja',
	formatType = FORMAT_TYPE.diffMonth,
	defaultFromFormat = '', defaultToFormat = '') {
	let fromDateFormat = defaultFromFormat || 'yyyy/MM/dd';
	let toDateFormat = defaultToFormat || 'yyyy/MM/dd'

	const locale = locales[language ?? defaultLang.value];

	switch (language) {
		case LANGUAGES.ja:
			fromDateFormat = 'yyyy/MM/dd';
			toDateFormat = formatType === FORMAT_TYPE.diffMonth ? 'MM/dd' : 'dd'
			break;
		case LANGUAGES.en:
			fromDateFormat = formatType === FORMAT_TYPE.diffMonth ? 'dd/MM' : 'dd'
			toDateFormat = 'dd/MM/y'
			break;
		default:
			break;
	}
	const formattedStartDate = format(startDate, fromDateFormat, { locale });
	const formattedEndDate = format(endDate, toDateFormat, { locale });
	return `${formattedStartDate} ~ ${formattedEndDate}`;
}

export const getShortLabelRangeDate = (fromDate: Date, toDate: Date, lng = defaultLang.value as 'en' | 'vi' | 'ja') => {
	const currentYear = new Date().getFullYear();
	const startDateYear = getYear(fromDate);

	const endDateYear = toDate ? getYear(toDate) : null;

	const isCurrentYear = currentYear === startDateYear && currentYear === endDateYear;

	const isSameDays = fromDate && toDate ? isSameDay(new Date(fromDate), new Date(toDate)) : false;

	const isSameMonths = fromDate && toDate ? isSameMonth(new Date(fromDate), new Date(toDate)) : false;

	const shortLabel = isCurrentYear
		? isSameMonths
			? isSameDays
				? formatDate(toDate, FormatType.short, lng)
				: formatDateRange(fromDate, toDate, lng, FORMAT_TYPE.sameMonth)
			: formatDateRange(fromDate, toDate, lng, FORMAT_TYPE.diffMonth)
		: `${formatDate(fromDate, FormatType.short, lng)} ~ ${formatDate(toDate, FormatType.short, lng)} `;

	return shortLabel;
}
