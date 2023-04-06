export function getFormattedDate(time) {
    const year = time.toLocaleString("default", { year: "numeric" });
    const month = time.toLocaleString("default", { month: "2-digit" });
    const day = time.toLocaleString("default", { day: "2-digit" });

    return year + "-" + month + "-" + day;
}
