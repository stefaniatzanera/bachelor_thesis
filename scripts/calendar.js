function fixDate() {
    var today = new Date()
    const elem =  document.querySelector('input[name="checkin"]');
    const datepicker = new Datepicker(elem, {
        daysOfWeekDisabled: [0,6],
        minDate: today
    }); 
}