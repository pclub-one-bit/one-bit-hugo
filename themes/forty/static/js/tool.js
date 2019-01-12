(function($) {

    if ($('#excel2po').length > 0 ) {
        
        $("#excel2po-from").change(function() {

            var textarea = $(this).val() ;
            var val = '';
            $.each(textarea.split(/\n+/), function(index, type) {

                var parts = type.split("\t");
                if (parts.length == 1) {
                    parts = type.split(" ");
                }
                if (parts.length == 2) {
                    val += 'msgid "' + parts[0] + '"\n';
                    val += 'msgstr "' + parts[1] + '"\n';
                    val += '\n';
                }

            });
            console.log(val);
            $("#excel2po-to").val(val); 

        });

        $("#excel2po-from").change();

    }

})(jQuery);
