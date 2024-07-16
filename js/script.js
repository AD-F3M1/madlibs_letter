$(document).ready(function() {
    
    $("#formone").submit(function(refresh) {
        
        refresh.preventDefault();

        const inputtedName = $("#name").val();
        const inputtedDate = $("#date").val();
        const inputtedRecipientName = $("#recipientName").val();
        const inputtedTitle = $("#title").val();
        const inputtedAddress = $("#address").val();

        $(".name").text(inputtedName);
        $(".date").text(inputtedDate);
        $(".recipientName").text(inputtedRecipientName);
        $(".title").text(inputtedTitle);
        $(".address").text(inputtedAddress);

        $("#letter").show();

        $(".name").val("");
        $(".date").val("");
        $(".recipientName").val("");
        $(".title").val("");
        $(".address").val("");
    })
})