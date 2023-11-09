[![Build Status](https://github.com/131/msi-utils/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/131/msi-utils/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/131/msi-utils/badge.svg?branch=master)](https://coveralls.io/github/131/msi-utils?branch=master)
[![Version](https://img.shields.io/npm/v/msi-utils.svg)](https://www.npmjs.com/package/msi-utils)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Code style](https://img.shields.io/badge/code%2fstyle-ivs-green.svg)](https://www.npmjs.com/package/eslint-plugin-ivs)

**msi utils** (windows installer) is a tiny set of helpers for MSI related manipulation.

# API
## GUID2Packed
```
const MSI = require('msi-utils');

var myMSIGUID = '{12345678-ABCD-WXYZ-1234-ABCDEFGHIJKL}';
//get the derivated packed GUID 

var packed = MSI.GUID2Packed(myMSIGUID);
```

## CompareVersions




# Credits 
* [131](https://github.com/131)
* [packed](https://installpac.wordpress.com/2008/03/31/packed-guids-darwin-descriptors-and-windows-installer-reference-counting/)
