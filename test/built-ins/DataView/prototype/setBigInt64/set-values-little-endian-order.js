// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setbigint64
description: >
  Set values on the little endian order
features: [DataView, ArrayBuffer, BigInt]
---*/

var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);

var result;

result = sample.setBigInt64(0, -0x6f80ff08 n, true);
assert.sameValue(result, undefined, "returns undefined #1");
assert.sameValue(sample.getBigInt64(0), -0x7ff806f00000001 n);

result = sample.setBigInt64(0, -0x7ff8070 n, true);
assert.sameValue(result, undefined, "returns undefined #2");
assert.sameValue(sample.getBigInt64(0), -0x6f80ff0700000001 n);

result = sample.setBigInt64(0, 0x6f80ff08 n, true);
assert.sameValue(result, undefined, "returns undefined #3");
assert.sameValue(sample.getBigInt64(0), 0x8ff806f00000000 n);

result = sample.setBigInt64(0, 0x8ff806f n, true);
assert.sameValue(result, undefined, "returns undefined #4");
assert.sameValue(sample.getBigInt64(0), 0x6f80ff0800000000 n);

result = sample.setBigInt64(0, 0xf8007f90 n, true);
assert.sameValue(result, undefined, "returns undefined #5");
assert.sameValue(sample.getBigInt64(0), -0x6f80ff0800000000 n);

result = sample.setBigInt64(0, 0x907f00f8 n, true);
assert.sameValue(result, undefined, "returns undefined #6");
assert.sameValue(sample.getBigInt64(0), -0x7ff807000000000 n);
