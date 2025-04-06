export { datte };

class datte {

    static getDate(date, separator = "-") {
        date === undefined ? date = new Date() : date = date;

        let dd = date.getDate();
        dd < 10 ? dd = '0' + dd : dd;

        let mm = date.getMonth() + 1;
        mm < 10 ? mm = '0' + mm : mm;

        let yyyy = date.getFullYear();

        return `${yyyy}${separator}${mm}${separator}${dd}`

    }
}