// Common Utility Functions

/**
 * Get the current year
 *
 * @returns current year as a number
 */
export function getCurrentYear() {
    return new Date().getFullYear()
}

/**
 * Get the name of a month
 *
 * @param monthNum month number (1-12)
 * @returns name of the month
 */
export function monthNumToName(monthNum: number) {
    return Intl.DateTimeFormat("en", { month: "long" }).format(new Date(monthNum.toString()))
}

/**
 * Get the number of days in a month
 *
 * @param monthNum month number (1-12)
 * @returns number of days in the month
 */
export function getDaysInMonth(monthNum: number) {
    return new Date(getCurrentYear(), monthNum, 0).getDate()
}

/**
 * Check if a date is a weekend (Saturday or Sunday)
 *
 * @param date date to check
 * @returns true if the date is a weekend, false otherwise
 */
export function isWeekend(year: number, monthNum: number, date: number) {
    // Sunday: 0, Saturday: 6
    return [0, 6].includes(new Date(year, monthNum - 1, date).getDay())
}
