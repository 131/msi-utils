"use strict";

const reverse = (a) => a.split("").reverse().join("");

class msi {
  static Guid2Packed(guid) {
    guid = guid.replace(/[^0-9a-z]/ig, '').toUpperCase();

    var i = 0;
    guid = [
      reverse(guid.substring(0, i += 8)),
      reverse(guid.substring(i, i += 4)),
      reverse(guid.substring(i, i += 4)),
      reverse(guid.substring(i, i += 2)),
      reverse(guid.substring(i, i += 2)),
      reverse(guid.substring(i, i += 2)),
      reverse(guid.substring(i, i += 2)),
      reverse(guid.substring(i, i += 2)),
      reverse(guid.substring(i, i += 2)),
      reverse(guid.substring(i, i += 2)),
      reverse(guid.substring(i, i += 2)),
    ].join('');
    return guid;
  }

}


module.exports = msi;
