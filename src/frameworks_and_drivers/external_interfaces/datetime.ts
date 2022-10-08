import { DateTime } from 'luxon';

export type changeFormatDateFn = (date: Date) => string;

export enum DateStringFormatEnum {
    CHANGE_LOG_DATE_FORMAT = 'yyyy/MM/dd t',
}

const changeFormatDate: changeFormatDateFn = (date: Date) => {
    const resultDate = DateTime.fromJSDate(date);
    const parse = resultDate.toFormat(
        DateStringFormatEnum.CHANGE_LOG_DATE_FORMAT
    );
    return parse;
};

const service = {
    changeFormatDate,
};
export default service;
export { changeFormatDate };
