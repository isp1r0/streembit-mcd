﻿/*
 
This file is part of Streembit application. 
Streembit is an open source project to create a real time communication system for humans and machines. 

Streembit is a free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3.0 of the License, or (at your option) any later version.

Streembit is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Streembit software.  
If not, see http://www.gnu.org/licenses/.
 
-------------------------------------------------------------------------------------------------------------------------
Author: Tibor Zsolt Pardi 
Copyright (C) 2016 The Streembit software development team
-------------------------------------------------------------------------------------------------------------------------

*/

'use strict';

var dgram = require('dgram'); 

var streembit = streembit || {};

var ip_addresss = "230.255.255.1";
var port = 32399 ;

var client = dgram.createSocket('udp4');

client.on('listening', function () {
	var address = client.address();
	console.log('UDP Client listening on ' + address.address + ":" + address.port);
	client.setBroadcast(true)
	client.setMulticastTTL(128); 
	client.addMembership(ip_addresss);
});

client.on('message', function (message, remote) {   
  console.log('Subscriber received message From: ' + remote.address + ':' + remote.port +' - Payload: ' + message);
});

client.bind(port);


