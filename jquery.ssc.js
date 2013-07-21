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
                    $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url=' + options.url + '&callback=?', function (data)
                    {
                        $(target).append('<span class="ssc_main_twitter"><span class="ssc_ico_twitter"><img src="' + options.twitter_ico + '"/></span><span class="ssc_count_twitter">' + (data.count || 0) + '</span></span>'); //wyswietlamy gdy twitter
                    });
                } else if (social[i] == 'facebook')
                {
                    $.getJSON('http://graph.facebook.com/' + options.url + '?callback=?', function (data)
                    {
                        $(target).append('<span class="ssc_main_facebook"><span class="ssc_ico_facebook"><img src="' + options.facebook_ico + '"/></span><span class="ssc_count_facebook">' + (data.shares || 0) + '</span></span>'); //wyswietlamy gdy facebook
                    });
                } else if (social[i] == 'linkedin')
                {
                    $.getJSON('http://www.linkedin.com/countserv/count/share?url=' + options.url + '&lang=en_US&callback=?', function (data)
                    {
                        $(target).append('<span class="ssc_main_linkedin"><span class="ssc_ico_linkedin"><img src="' + options.linkedin_ico + '"/></span><span class="ssc_count_linkedin">' + (data.count || 0) + '</span></span>'); //wyswietlamy gdy linkedin
                    });
                } //koniec instrukcji warunkowej

            }); //koniec iteracji

        });
    }
})(jQuery);