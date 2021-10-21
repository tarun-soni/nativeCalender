//
//  RCTCalendarModule.m
//  nativeCalender
//
//  Created by Tarun Soni on 14/10/21.
//

#import <Foundation/Foundation.h>
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location){
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}


RCT_EXPORT_METHOD(createCalendarEventCallback:(NSString *)title
                  location:(NSString *)location
                  errorCallback: (RCTResponseSenderBlock)errorCallback
                  successCallback: (RCTResponseSenderBlock)successCallback)
{
  @try {
    NSNumber *eventId = [NSNumber numberWithInt:123];
     RCTLogInfo(@"Title and location at multiple callbacks -  %@ at %@", title, location);
    successCallback(@[eventId]);
  }

  @catch ( NSException *e ) {
    errorCallback(@[e]);
  }
}

RCT_EXPORT_METHOD(createPromiseCalendarEvent:(NSString *)title
                 location:(NSString *)location
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSUInteger r = arc4random_uniform(100);

  NSInteger eventId = r;
  if (eventId) {
    resolve(@(eventId));
  } else {
    reject(@"event_failure", @"no event id returned", nil);
  }
}



@end
