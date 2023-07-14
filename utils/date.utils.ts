// functions that gets 2 dates as string and returns if the second date is after the first one 

export const isAfterOrEqual = (date1: string, date2: Date) => {
    const d1 = new Date(date1);
    return d1 >= date2;
    }