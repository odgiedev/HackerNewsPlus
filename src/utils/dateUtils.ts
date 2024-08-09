import {format, formatDistanceToNow} from "date-fns";

export function getDateInfo(unixTimestamp: number): { fullDate: string, hour: string, relative: string } {
    const date = new Date(unixTimestamp * 1000);

    const fullDate = format(date, 'dd/MM/yyyy');
    const hour = format(date, 'HH:mm:ss');
    const relative = formatDistanceToNow(date, { addSuffix: true });

    return {
        fullDate,
        hour,
        relative
    };
}