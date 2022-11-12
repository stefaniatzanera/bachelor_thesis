function sendEmail() {
    var name_email = document.getElementById('email').value; 
    var clients_name = document.getElementById('name').value;
    var number_date = document.getElementById('checkin-date').value
    var number_hour = document.getElementById('hour').value;
    var number_of_adults = document.getElementById('adult').value;
    var number_of_children = document.getElementById('child').value;

	Email.send({
        Host: 'smtp.elasticemail.com',
        Username : 'bookingstef23@gmail.com',
        Password : '58EBE26C2EC6300AD701F2F081423CA8B369',
        To : name_email,
        From : 'bookingstef23@gmail.com',
        Subject : 'Booking information',
        Body : 'Congratulations, your reservation Mr./Mrs.' + clients_name + " has been made for "
                    + number_date +" and time "+ number_hour +" for "+ number_of_adults +" adults and "
                    + number_of_children + " children."
        }).then(
            message => alert(""+ message +" ,Email sent successfully!"));
            window.location.href = 'index.html';
}