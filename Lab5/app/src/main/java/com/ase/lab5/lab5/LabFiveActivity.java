package com.ase.lab5.lab5;

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

public class LabFiveActivity extends AppCompatActivity {
    CallbackManager callbackManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FacebookSdk.sdkInitialize(getApplicationContext());
        setContentView(R.layout.activity_lab_five);

        init();
        handleFBCallback();
    }

    private void handleFBCallback(){
        LoginManager.getInstance().registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {
                System.out.println("Logged In With Facebook " + loginResult.getAccessToken());
                MainMenu();
            }

            @Override
            public void onCancel() {
                System.out.println("Cancelled Login");

            }

            @Override
            public void onError(FacebookException exception) {
                System.out.println("An error occurred while logging in with facebook");
            }
        });
    }

    private void CameraMenu(){
        Intent myIntent = new Intent(getApplicationContext(), CameraActivity.class);
        startActivityForResult(myIntent, 0);
    }

    private void MainMenu(){
        Intent myIntent = new Intent(getApplicationContext(), MainMenu.class);
        startActivityForResult(myIntent, 0);
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
        MainMenu();
    }
}
