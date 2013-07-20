(function ($)
{
    $.fn.ssc = function (options)
    {
        options = $.extend({
            social: 'facebook,twitter,linkedin',
            twitter_ico: 'images/twitter_ssc.png',
            linkedin_ico: 'images/linkedin_ssc.png',
            facebook_ico: 'images/facebook_ssc.png',
            url: $(location).attr('href')
        }, options);

        return this.each(function ()
        {
            var target = this; //przypisanie id elementu w ktorym wyswietlimy wyniki do zmiennej

            var social = options.social.split(","); //rozbicie na elementy
            $.each(social, function (i)//poczatek iteracji po tablicy
            {
                if (social[i] == 'twitter') //poczatek instrukcji warunkowej if/else
                {
                    $(target).append('<img src="' + options.twitter_ico + '"/>' + social[i] + '<br>'); //wyswietlamy gdy twitter
                } else if (social[i] == 'facebook')
                {
                    $(target).append('<img src="' + options.facebook_ico + '"/>' + social[i] + '<br>'); //wyswietlamy gdy facebook
                } else if (social[i] == 'linkedin')
                {
                    $(target).append('<img src="' + options.linkedin_ico + '"/>' + social[i] + '<br>'); //wyswietlamy gdy linkedin
                } //koniec instrukcji warunkowej

            }); //koniec iteracji

        });
    }
})(jQuery);