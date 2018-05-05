//
//  ScryptoStringTests.swift
//  ScryptoStringTests
//
//  Created by Perry Sh on 02/05/2018.
//  Copyright © 2018 Perry Sh. All rights reserved.
//

import XCTest
@testable import ScryptoString

class ScryptoStringTests: XCTestCase {
    static let PHRASE_TO_CIPHER: String = "my private key"

    override func setUp() {
        super.setUp()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testEcryption() {
        let encrypted = ScryptoStringTests.PHRASE_TO_CIPHER.encrypt(password: "1234")
        📘(encrypted)
        📘("decrypted: \(decrypted)")
    }

    func testDecryption() {
        let decrypted = encrypted.decrypt(password: "1234")
        📘("decrypted: \(decrypted)")
        assert(ScryptoStringTests.PHRASE_TO_CIPHER == decrypted, "the encryption did mot privide a matching decrypted string! 😲")
    }

    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }
    
}
