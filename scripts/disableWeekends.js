$(document).ready(function() {
    $(function() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      $("#cal").datepicker({
        beforeShowDay: $.datepicker.noWeekends,
        maxDate: new Date(year, month + 1, '31'),
        minDate: 0,
      });
    });
})