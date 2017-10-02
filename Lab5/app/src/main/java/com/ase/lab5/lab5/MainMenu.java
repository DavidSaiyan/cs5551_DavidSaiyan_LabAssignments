package com.ase.lab5.lab5;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;

/**
 * Created by david on 9/24/2017.
 */

public class MainMenu extends Activity {
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_screen);
    }

    public void takePhoto(View view){
        Intent myIntent = new Intent(getApplicationContext(), CameraActivity.class);
        startActivityForResult(myIntent, 0);
    }

    public void analyzePhoto(View view){

    }
}
