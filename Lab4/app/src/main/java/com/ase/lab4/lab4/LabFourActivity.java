package com.ase.lab4.lab4;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.login.widget.LoginButton;

public class LabFourActivity extends AppCompatActivity {
    CallbackManager callbackManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FacebookSdk.sdkInitialize(getApplicationContext());
        setContentView(R.layout.activity_lab_four);

        init();
        handleFBCallback();
    }

    private void handleFBCallback(){
        LoginManager.getInstance().registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {
                System.out.println("Logged In With Facebook " + loginResult.getAccessToken());
            }

            @Override
            public void onCancel() {
                System.out.println("Canceled Login");

            }

            @Override
            public void onError(FacebookException exception) {
                System.out.println("An error occured while logging in with facebook");
            }
        });
    }

    private void init(){
        callbackManager = CallbackManager.Factory.create();
        LoginButton login_button = (LoginButton) findViewById(R.id.login_button);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        callbackManager.onActivityResult(requestCode, resultCode, data);
    }

    public void buttonAction(View view){
        System.out.println("This got called");
    }
}
