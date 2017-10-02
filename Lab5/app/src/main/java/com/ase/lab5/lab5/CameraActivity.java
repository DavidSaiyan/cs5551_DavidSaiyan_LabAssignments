package com.ase.lab5.lab5;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import clarifai2.api.ClarifaiBuilder;
import clarifai2.api.ClarifaiClient;
import clarifai2.api.ClarifaiResponse;
import clarifai2.dto.input.ClarifaiInput;

/**
 * Created by david on 9/28/2017.
 */

public class CameraActivity extends AppCompatActivity {

    int TAKE_PHOTO_CODE = 0;
    ImageView userImage ;
    Bitmap _image;
    String file_path = Environment.getExternalStorageDirectory().getAbsolutePath() + "/StoredPics";
    ClarifaiResponse _response;

    private static final int MY_CAMERA_REQUEST_CODE = 100;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.camera_activity);
        Button capture = (Button) findViewById(R.id.btn_take_photo);
        userImage = (ImageView) findViewById(R.id.view_photo);
        Toast.makeText(this,"In camera activity",Toast.LENGTH_SHORT).show();
        if (checkSelfPermission(android.Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{android.Manifest.permission.CAMERA}, MY_CAMERA_REQUEST_CODE);
        }
    }

    public void callCamera(View v) {
        Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (cameraIntent.resolveActivity(getPackageManager()) != null) {
            startActivityForResult(cameraIntent, TAKE_PHOTO_CODE);
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == TAKE_PHOTO_CODE && resultCode == RESULT_OK) {
            _image = (Bitmap) data.getExtras().get("data");
            saveToFile(_image);
            userImage.setImageBitmap(_image);
        }
    }

    public void saveToFile(Bitmap image) {
        File dir = new File(file_path);
        FileOutputStream fOut = null;
        try{
            dir.mkdirs();
            if(!dir.isDirectory())
                dir.mkdirs();
            File file = new File(dir, "Photo" + 1 + ".jpg");
            fOut = new FileOutputStream(file);
            image.compress(Bitmap.CompressFormat.JPEG, 100, fOut);
            fOut.flush();
            fOut.close();
        }catch(IOException e){
            System.out.println("File Creation Failed");
            e.printStackTrace();
        }finally{
            try {
                if (fOut != null) {
                    fOut.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


    public void redirectToHome(View v) {
        Intent redirect = new Intent(CameraActivity.this, MainMenu.class);
        startActivity(redirect);
    }

    public void analyzePhoto(View view){
        ClarifaiClient client = new ClarifaiBuilder("f644b3c57dae4df7b5f7601de0b6fe73").buildSync();

        _response = client.getDefaultModels().generalModel().predict()
                        .withInputs(ClarifaiInput.forImage(new File(file_path + "/Photo1.jpg")))
                        .executeSync();

        System.out.println(_response);
    }
}