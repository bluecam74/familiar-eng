    $('#submit').on("click", function (e) {

        e.preventDefault();

        var contactFName = $('#first_name').val().trim();
        var contactLName = $('#last_name').val().trim();
        var contactEmail = $('#email').val().trim();
        var contactPhone = $('#phone').val().trim();
        var contactAddress = $('#address').val();
        var contactMessage = $('#message').val();
        
        var newContact = {

            first_name : $('#first_name').val().trim(),
            last_name : $('#last_name').val().trim(),
            email : $('#email').val().trim(),
            phone : $('#phone').val().trim(),
            address : $('#address').val(),
            message : $('#message').val()

        } 

        $('#errorHeader1').empty();
        validateForm();
        

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        function clearFields() {
            $('form').find('input').val('');
            $('form').find('textarea').val('');
        }

        function validateForm() {
            if (contactFName === '' || contactLName === '' || contactPhone === '' || contactAddress === '' || contactEmail === '' || contactMessage === '') {
                $('#errorHeader1').text("All fields are required.");
            }
            else {
                validateEmail(contactEmail);

                if (validateEmail(contactEmail)) {
                    $('#errorHeader1').text("Your information has been successfully submitted. Thank you.");
                    clearFields();
                    writeToDatabase();
                    postToApiRoute();
                }
                else {
                    $('#errorHeader1').text("Please enter a valid email.");
                    return;
                }
            }
        };

        function writeToDatabase() {
            var contactRef = firebase.database().ref().push("/Contacts");
            contactRef.set({
                first_name: contactFName,
                last_name: contactLName,
                email: contactEmail,
                phone: contactPhone,
                address: contactAddress,
                message: contactMessage,
            });
        }

        

        function postToApiRoute() {
            $.post("/api/contacts", newContact)
            .then(function(data) {
              console.log("adding... ", data);
            });

        }
        })
