"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = () => {
  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

exports.greeting = greeting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNPLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQzVCLFFBQU1DLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLElBQUssR0FBM0I7QUFDRCxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmV4cG9ydCBjb25zdCBncmVldGluZyA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX0hYCk7XG59O1xuIl19