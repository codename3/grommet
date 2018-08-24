'use strict';

exports.__esModule = true;
exports.TableBody = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableContext = require('../Table/TableContext');

var _StyledTable = require('../Table/StyledTable');

var _doc = require('./doc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = exports.TableBody = function TableBody(props) {
  return _react2.default.createElement(
    _TableContext.TableContext.Provider,
    { value: 'body' },
    _react2.default.createElement(_StyledTable.StyledTableBody, props)
  );
};

if (process.env.NODE_ENV !== 'production') {
  (0, _doc.doc)(TableBody);
}