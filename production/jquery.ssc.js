(function ($)
{
    $.fn.ssc = function (options)
    {
        options = $.extend({
            social: 'facebook,twitter,linkedin',
            twitter_ico: 'images/twitter_ssc.png',
            linkedin_ico: 'images/linkedin_ssc.png',
            facebook_ico: 'images/facebook_ssc.png',
            url: window.location.href
        }, options);

        return this.each(function ()
        {
            var target = this; //przypisanie id elementu w ktorym wyswietlimy wyniki do zmiennej

            var social = options.social.split(","); //rozbicie na elementy
            $.each(social, function (i)//poczatek iteracji po tablicy
            {
                $(target).append('<span class="ssc_main_' + social[i] + '"><span class="ssc_ico_' + social[i] + '"></span><span class="ssc_count_' + social[i] + '">0</span></span>');

                if (social[i] == 'twitter') //poczatek instrukcji warunkowej if/else
                {
                    $(target).find('.ssc_ico_twitter').append('<img src="' + options.twitter_ico + '"/>');
                    $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url=' + options.url + '&callback=?', function (data)
                    {
                        $(target).find('.ssc_count_twitter').text((data.count || 0)); //wyswietlamy gdy twitter
                    });
                } else if (social[i] == 'facebook')
                {
                    $(target).find('.ssc_ico_facebook').append('<img src="' + options.facebook_ico + '"/>');
                    $.getJSON('http://graph.facebook.com/' + options.url + '?callback=?', function (data)
                    {
                        $(target).find('.ssc_count_facebook').text((data.shares || 0));  //wyswietlamy gdy facebook
                    });
                } else if (social[i] == 'linkedin')
                {
                    $(target).find('.ssc_ico_linkedin').append('<img src="' + options.linkedin_ico + '"/>');
                    $.getJSON('http://www.linkedin.com/countserv/count/share?url=' + options.url + '&lang=en_US&callback=?', function (data)
                    {
                        $(target).find('.ssc_count_linkedin').text((data.count || 0)); //wyswietlamy gdy linkedin
                    });
                }//koniec instrukcji warunkowej

            }); //koniec iteracji

        });
    }
})(jQuery);