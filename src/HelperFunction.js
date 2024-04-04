export function formatDate(date) {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const yearNames = ["2020 , 2021 , 2022 , 2023 , 2024 , 2025 , 2026"]
    const dayOfWeek = dayNames[date.getDay()];


    const month = monthNames[date.getMonth()];

    const year = yearNames[date.getMonth()];

    const dayOfMonth = date.getDate();


    const formattedDate = dayOfWeek + ", " + month + " " + dayOfMonth;


    return formattedDate;
}