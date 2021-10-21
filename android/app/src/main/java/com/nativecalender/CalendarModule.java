package com.nativecalender;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import java.util.Random;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "android Created event called with name: " + name
                + " and location: " + location);

        System.out.println("iN Calendar module " + name + location +"     --------- name and location" );
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "Test  evenntt 1 ");

        constants.put("DEFAULT_EVENT_NAME2", "Test New evenntt 2 ");
        return constants;
    }


    @ReactMethod
    public void createCalendarEventCallback(String name, String location, Callback myFailureCallback, Callback mySuccessCallback) {
        try {
            System.out.println("name:-----" + name + " location------ " + location);

            mySuccessCallback.invoke(10);
        }catch (Exception e){
            System.out.println("error in cb" + e);
            myFailureCallback.invoke(20);
        }
    }

    @ReactMethod
    public void createPromiseCalendarEvent(String name, String location, Promise promise) {
        try {
            final int random = new Random().nextInt(61) + 20;

            Integer eventId = random;

            promise.resolve(eventId);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }

    }

}