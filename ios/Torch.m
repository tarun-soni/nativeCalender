//
//  Torch.m
//  nativeCalender
//
//  Created by Tarun Soni on 22/10/21.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Torch, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)
RCT_EXTERN_METHOD(on)
RCT_EXTERN_METHOD(off)
@end
