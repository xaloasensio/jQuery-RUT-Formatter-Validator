(function($){
    $.fn.rut = function(options){
        var settings = $.extend({
            validateOn: 'blur',
            formatOn: 'keyup',
            restrictKeys: true,
            maxLength: 12,
            permittedCharacters: '0123456789kK.-',
            flag: function(){return true;}
        }, options);
        
        function formatRut(){
            if(!settings.flag()){
                return;
            }
            var entry = $(this).val();
            if(settings.restrictKeys){
                var restrictedValue = '';
                for(i=0;i<entry.length;i++){
                    if(settings.permittedCharacters.indexOf(entry.charAt(i)) !== -1){
                        restrictedValue += entry.charAt(i);
                    }
                }
                entry = restrictedValue;
            }
            $(this).val(entry.substr(0, settings.maxLength));
        }
        
        function validateRut(){
            console.log('validate');
        }
        
        return this.each(function(){
            $(this).on(settings.formatOn, formatRut).on(settings.validateOn, validateRut);
        });
    }
})(jQuery);
