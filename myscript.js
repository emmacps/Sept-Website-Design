var year = 2020;
//lead years are divided by 400

if ((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))) {
    document.write(year + "ia a leap year.");
} else {
    document.write(year + "is not a leap year.")
}
