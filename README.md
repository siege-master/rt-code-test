rtcodetest
==========

This CLI is designed to meet the requirements of the Realtruck Back-End Dev Test ([Found Here](https://github.com/AutoCustoms/back-end-dev-test)).  It was built with [oclif](https://oclif.io/)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rtcodetest.svg)](https://npmjs.org/package/rtcodetest)
[![Downloads/week](https://img.shields.io/npm/dw/rtcodetest.svg)](https://npmjs.org/package/rtcodetest)
[![License](https://img.shields.io/npm/l/rtcodetest.svg)](https://github.com/siege-master/ideal-memory/blob/master/package.json)

# Installation

This is a Node CLI, which has been tested on Node 12.

If you do not have Node 12+ installed, download it [Here](https://nodejs.org/en/download/) first, and follow the instructions for installation.

With Node installed:

1.  Download this repository and extract it to the folder of your choosing.  

2.  Open the ".env" in the same folder you extracted the repository, and insert a valid Github API token where indicated, removing the angle brackets afterward.  

3.  Open a terminal or command prompt and navigate to the folder that it was extracted to, then do the following:

```sh-session
$ npm install -g rtcodetest
```
4. Then you can run rtcodetest by including the -u flag followed by a valid Github user name

```sh-session
$ rtcodetest -u autocustoms
```
To get additional information about other flags that can be run at startup use the -h flag

```sh-session
$ rtcodetest -h
```
<!-- usagestop -->

# Commands

