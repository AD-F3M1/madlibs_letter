$(document).ready(function() {
    
    $("#formOne").submit(function(refresh) {
        
        refresh.preventDefault();

        $(".btn").click(function() {
            $("#letter").toggle();
            $("#formOne").toggle();
        })

        const inputtedUserName = $("#userName").val();
        const inputtedUserAddress = $("#userAddress").val();
        const inputtedCity = $("#userCity").val();
        const inputtedEmail = $("#email").val();
        const inputtedPhoneNumber = $("#phoneNumber").val();
        const inputtedDate = $("#date").val();
        const inputtedRecipientName = $("#recipientName").val();
        const inputtedRecipientAddress = $("#recipientAddress").val();
        const inputtedRecipientEmail = $("#recipientEmail").val();

        $(".userName").text(inputtedUserName);
        $(".userAddress").text(inputtedUserAddress);
        $(".userCity").text(inputtedCity);
        $(".email").text(inputtedEmail);
        $(".phoneNumber").text(inputtedPhoneNumber);
        $(".date").text(inputtedDate);
        $(".recipientName").text(inputtedRecipientName);
        $(".recipientAddress").text(inputtedRecipientAddress);
        $(".recipientEmail").text(inputtedRecipientEmail);

        $(".userName").val("");
        $(".userAddress").val("");
        $(".userCity").val("");
        $(".email").val("");
        $(".phoneNumber").val("");
        $(".date").val("");
        $(".recipientName").val("");
        $(".recipientAddress").val("");
        $(".recipientEmail").val("");

    })
})