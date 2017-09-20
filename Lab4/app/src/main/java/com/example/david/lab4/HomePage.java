package com.example.david.lab4;

import com.facebook.login.LoginResult;

/**
 * Created by david on 9/20/2017.
 */

public class HomePage {

    private String _name = "David Saiyan";
    private String _profileType = "Facebook";

    public HomePage (LoginResult loginResult){
        _name = loginResult.toString();
        _profileType = "Facebook";

        GetMapsApiRequest();
    }

    private void GetMapsApiRequest(){
        //To do

    }
}
