// Common Utility Functions

export function getCurrentYear() {
    return new Date().getFullYear()
}

export function monthNumToName(monthNum: number) {
    return Intl.DateTimeFormat("en", { month: "long" }).format(new Date(monthNum.toString()))
}

export function getDaysInMonth(monthNum: number) {
    return new Date(getCurrentYear(), monthNum, 0).getDate()
}
