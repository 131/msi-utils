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

  static Packed2Guid(pack) {
    pack = msi.Guid2Packed(pack);
    return `${pack.substr(0, 8)}-${pack.substr(8, 4)}-${pack.substr(12, 4)}-${pack.substr(16, 4)}-${pack.substr(20, 12)}`;
  }

  static ParseVersion(input) {
    input = parseInt(input, 16).toString(16); //strip 0x
    let version = `0000000${input}`.substr(-8);
    let major = parseInt(version.substr(0, 2), 16);
    let minor = parseInt(version.substr(2, 2), 16);
    let build = parseInt(version.substr(4, 4), 16);
    return `${major}.${minor}.${build}`;
  }


  static CompareVersions(v1, v2) {
    let f = (v) => [...(v.split(/[.-]/)), 0, 0, 0, 0].slice(0, 4).map((a) => parseInt(a));
    let m1 = f(v1); let m2 = f(v2);

    for(let i = 0; i < 4; i++) {
      if(m1[i] !== m2[i])
        return m1[i] < m2[i] ? -1 : 1;
    }

    return 0;
  }

}


module.exports = msi;
