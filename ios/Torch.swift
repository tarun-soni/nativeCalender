//
//  Torch.swift
//  nativeCalender
//
//  Created by Tarun Soni on 22/10/21.
//

import Foundation
import AVFoundation


@objc(Torch)
class Torch : NSObject{
  
  @objc
  func on () {
    print("in Native ON")
    toggleTorch(on: true)
  }
  
  @objc
  func off () {
    print("in Native OFF")
    toggleTorch(on: false)
  }
  
 private func toggleTorch(on: Bool) {
      guard
          let device = AVCaptureDevice.default(for: AVMediaType.video),
          device.hasTorch
      else { return }

      do {
          try device.lockForConfiguration()
          device.torchMode = on ? .on : .off
          device.unlockForConfiguration()
      } catch {
          print("Torch could not be used")
      }
  }
  
  
  
  @objc(addEvent:location:date:)
  func addEvent(_ name: String, location: String, date: NSNumber) -> Void {
    // Date is ready to use!
    
    print("---- in Native add Event------")
    print("date",date)
    
    func constantsToExport() -> [String: Any]! {
      return ["someKey": "someValue"]
    }
  }
  
}
