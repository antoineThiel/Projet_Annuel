$form = $("#myDeleteForm");

$form.click(function (event) {
    event.preventDefault();

    let $myDialog = $("#dialog");
    $myDialog.html('Une fois supprimé impossible de le récupérer');
    $myDialog.dialog({
        open: function() {
            $(".ui-dialog-titlebar-close").hide();
        },
        width:400,
        height:200,
        closeOnEscape: false,
        dialogClass: 'no-close',
        title:"action irréversible!",
        buttons: [
            {
                text: "Compris",
                click: function () {
                    console.log("form submitted")
                    $form.submit();
                    $(this).dialog("close");
                }
            },
            {
                text: "Abandon",
                click: function () {
                    console.log("form not submitted")
                    $(this).dialog("close");
                }
            }
        ]
    });
})
