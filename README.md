rtcodetest
==========

This CLI is designed to meet the requirements of the Realtruck Back-End Dev Test ([Found Here](https://github.com/AutoCustoms/back-end-dev-test)).  It was built with [oclif](https://oclif.io/)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rtcodetest.svg)](https://npmjs.org/package/rtcodetest)
[![Downloads/week](https://img.shields.io/npm/dw/rtcodetest.svg)](https://npmjs.org/package/rtcodetest)
[![License](https://img.shields.io/npm/l/rtcodetest.svg)](https://github.com/siege-master/ideal-memory/blob/master/package.json)

# Installation

This is a Node CLI, which has been tested on Node 12, and is available through the [npm registry](https://www.npmjs.com).

If you do not have Node 12+ installed, download it [Here](https://nodejs.org/en/download/) first, and follow the instructions for installation.

With Node installed:

1.  Download this repository and extract it to the folder of your choosing.  

2.  Open the ".env" in the same folder you extracted the repository, and insert a valid Github API token where indicated, removing the angle brackets afterward.  

3.  Open a terminal or command prompt and navigate to the folder that it was extracted to, and run the following command:

```sh-session
$ npm install rtcodetest --save
```
4. Run rtcodetest by including the -u flag followed by a valid Github user name

Example:

```sh-session
$ rtcodetest -u autocustoms

Querying Stargazers for autocustoms from Github       
.---------------------------------------------------. 
|                    autocustoms                    | 
|---------------------------------------------------| 
|         Repository Name         | Stargazer Count | 
|---------------------------------|-----------------| 
| front-end-dev-test              |               4 | 
| back-end-dev-test               |               1 | 
| amazon-mws-merchant-fulfillment |               0 | 
| yotpo-php                       |               0 | 
| laravel-traceable               |               0 | 
| qa-engineer-test                |               0 | 
| laravel-sftp                    |               0 | 
| fedex-tracking-api-wrapper      |               0 | 
| amazon-mws-products             |               0 | 
| yotpo-cli                       |               0 | 
| ansible-cloudflare              |               0 | 
| postcss-font-magician           |               0 | 
| google-fonts-complete           |               0 | 
| contentful-to-algolia           |               0 | 
| netsuite-php                    |               0 | 
| amazon-mws-orders               |               0 | 
'---------------------------------------------------'
```


#Flags
To get additional information about other flags that can be run at startup use the -h flag

```sh-session
$ rtcodetest -h

 -a, --ascending  Sort table by ascending number of  
                   stargazers

  -h, --help       show CLI help

  -u, --user=user  Name of user that will be sent to  
                   the Github REST API v3 for querying
  -v, --version    show CLI version
```
<!-- usagestop -->


