// functions that gets 2 dates as string and returns if the second date is after the first one 

export const isAfterOrEqual = (date1: string, date2: Date) => {
    const d1 = new Date(date1);
    return d1 >= date2;
    }
export const isEqual = (date1: string, date2: string) => {
    return new Date(date1).setHours(0,0,0,0) == new Date(date2).setHours(0,0,0,0)
    }
export const isToday = (date: string) => {
    const today = new Date();
    return new Date(date).setHours(0,0,0,0) == today.setHours(0,0,0,0)
    }