package com.nativecalender;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

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


    //    events
    private void sendEvent(ReactContext reactContext,String eventName,@Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
    @ReactMethod
    public void addListener(String eventName) {

        // Set up any upstream listeners or background tasks as necessary
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        
        // Remove upstream listeners, stop unnecessary background tasks
    }




    @ReactMethod
    public void createCalendarEvent(String name, String location) {

        Log.d("CalendarModule", "android Created event called with name: " + name
                + " and location: " + location);
        System.out.println("iN Calendar module " + name + location +"     --------- name and location" );

        WritableMap params = Arguments.createMap();
        params.putString("eventProperty", "someValue");
        params.putString("eventProperty2", "someValue2");

        System.out.println("params---" + params);


        ReactContext context = getReactApplicationContext();
        System.out.println("CONtext----"+ context);
        sendEvent(context, "EventReminder", params);
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


    // promise
    @ReactMethod
    public void createPromiseCalendarEvent(String name, String location, Promise promise) {
        try {
            final int random = new Random().nextInt(61) + 20;

            Integer eventId = random;

            promise.resolve(eventId);

        } catch(Exception e) {
            promise.reject("Create Event error", "Error parsing date", e);

        }
    }




}