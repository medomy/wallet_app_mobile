import dateFormat from 'dateformat';
export function transactionDateFormat(date: Date) {
    return dateFormat(date, "dd/mm/yyyy");
}