package com.example.david.lab4;

import com.facebook.login.LoginResult;

/**
 * Created by david on 9/20/2017.
 */

public class HomePage {

    private String _name = "David Saiyan";
    private String _profileType = "Facebook";
    private String _translatedText = "Facebook";

    public HomePage (LoginResult loginResult){
        _name = loginResult.toString();
        _profileType = "Facebook";

        LoadView();
    }

    private void MakeTranslationRequest(String text, String language){
        //HttpResponse response = http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?" + "key" + apiKey + "&text=" + text + "&lang=" + language)

    }

    private void UpdateTranslation(response){
		_translatedText = response["data"].text;
    }
}
