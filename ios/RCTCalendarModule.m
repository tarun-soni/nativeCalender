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


RCT_EXPORT_METHOD(createCalendarEventCallback:(NSString *)title location:(NSString *)location callback: (RCTResponseSenderBlock)callback) {
  NSNumber *eventId = [NSNumber numberWithInt:123];
  callback(@[[NSNull null], eventId]);
}

@end
