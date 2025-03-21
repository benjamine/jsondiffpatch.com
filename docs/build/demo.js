"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/diff-match-patch/index.js
  var require_diff_match_patch = __commonJS({
    "../../node_modules/diff-match-patch/index.js"(exports, module) {
      var diff_match_patch = function() {
        this.Diff_Timeout = 1;
        this.Diff_EditCost = 4;
        this.Match_Threshold = 0.5;
        this.Match_Distance = 1e3;
        this.Patch_DeleteThreshold = 0.5;
        this.Patch_Margin = 4;
        this.Match_MaxBits = 32;
      };
      var DIFF_DELETE = -1;
      var DIFF_INSERT = 1;
      var DIFF_EQUAL = 0;
      diff_match_patch.Diff = function(op, text) {
        return [op, text];
      };
      diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines, opt_deadline) {
        if (typeof opt_deadline == "undefined") {
          if (this.Diff_Timeout <= 0) {
            opt_deadline = Number.MAX_VALUE;
          } else {
            opt_deadline = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3;
          }
        }
        var deadline = opt_deadline;
        if (text1 == null || text2 == null) {
          throw new Error("Null input. (diff_main)");
        }
        if (text1 == text2) {
          if (text1) {
            return [new diff_match_patch.Diff(DIFF_EQUAL, text1)];
          }
          return [];
        }
        if (typeof opt_checklines == "undefined") {
          opt_checklines = true;
        }
        var checklines = opt_checklines;
        var commonlength = this.diff_commonPrefix(text1, text2);
        var commonprefix = text1.substring(0, commonlength);
        text1 = text1.substring(commonlength);
        text2 = text2.substring(commonlength);
        commonlength = this.diff_commonSuffix(text1, text2);
        var commonsuffix = text1.substring(text1.length - commonlength);
        text1 = text1.substring(0, text1.length - commonlength);
        text2 = text2.substring(0, text2.length - commonlength);
        var diffs = this.diff_compute_(text1, text2, checklines, deadline);
        if (commonprefix) {
          diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, commonprefix));
        }
        if (commonsuffix) {
          diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, commonsuffix));
        }
        this.diff_cleanupMerge(diffs);
        return diffs;
      };
      diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines, deadline) {
        var diffs;
        if (!text1) {
          return [new diff_match_patch.Diff(DIFF_INSERT, text2)];
        }
        if (!text2) {
          return [new diff_match_patch.Diff(DIFF_DELETE, text1)];
        }
        var longtext = text1.length > text2.length ? text1 : text2;
        var shorttext = text1.length > text2.length ? text2 : text1;
        var i2 = longtext.indexOf(shorttext);
        if (i2 != -1) {
          diffs = [
            new diff_match_patch.Diff(DIFF_INSERT, longtext.substring(0, i2)),
            new diff_match_patch.Diff(DIFF_EQUAL, shorttext),
            new diff_match_patch.Diff(
              DIFF_INSERT,
              longtext.substring(i2 + shorttext.length)
            )
          ];
          if (text1.length > text2.length) {
            diffs[0][0] = diffs[2][0] = DIFF_DELETE;
          }
          return diffs;
        }
        if (shorttext.length == 1) {
          return [
            new diff_match_patch.Diff(DIFF_DELETE, text1),
            new diff_match_patch.Diff(DIFF_INSERT, text2)
          ];
        }
        var hm = this.diff_halfMatch_(text1, text2);
        if (hm) {
          var text1_a = hm[0];
          var text1_b = hm[1];
          var text2_a = hm[2];
          var text2_b = hm[3];
          var mid_common = hm[4];
          var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
          var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
          return diffs_a.concat(
            [new diff_match_patch.Diff(DIFF_EQUAL, mid_common)],
            diffs_b
          );
        }
        if (checklines && text1.length > 100 && text2.length > 100) {
          return this.diff_lineMode_(text1, text2, deadline);
        }
        return this.diff_bisect_(text1, text2, deadline);
      };
      diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
        var a = this.diff_linesToChars_(text1, text2);
        text1 = a.chars1;
        text2 = a.chars2;
        var linearray = a.lineArray;
        var diffs = this.diff_main(text1, text2, false, deadline);
        this.diff_charsToLines_(diffs, linearray);
        this.diff_cleanupSemantic(diffs);
        diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, ""));
        var pointer = 0;
        var count_delete = 0;
        var count_insert = 0;
        var text_delete = "";
        var text_insert = "";
        while (pointer < diffs.length) {
          switch (diffs[pointer][0]) {
            case DIFF_INSERT:
              count_insert++;
              text_insert += diffs[pointer][1];
              break;
            case DIFF_DELETE:
              count_delete++;
              text_delete += diffs[pointer][1];
              break;
            case DIFF_EQUAL:
              if (count_delete >= 1 && count_insert >= 1) {
                diffs.splice(
                  pointer - count_delete - count_insert,
                  count_delete + count_insert
                );
                pointer = pointer - count_delete - count_insert;
                var subDiff = this.diff_main(text_delete, text_insert, false, deadline);
                for (var j = subDiff.length - 1; j >= 0; j--) {
                  diffs.splice(pointer, 0, subDiff[j]);
                }
                pointer = pointer + subDiff.length;
              }
              count_insert = 0;
              count_delete = 0;
              text_delete = "";
              text_insert = "";
              break;
          }
          pointer++;
        }
        diffs.pop();
        return diffs;
      };
      diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
        var text1_length = text1.length;
        var text2_length = text2.length;
        var max_d = Math.ceil((text1_length + text2_length) / 2);
        var v_offset = max_d;
        var v_length = 2 * max_d;
        var v1 = new Array(v_length);
        var v2 = new Array(v_length);
        for (var x = 0; x < v_length; x++) {
          v1[x] = -1;
          v2[x] = -1;
        }
        v1[v_offset + 1] = 0;
        v2[v_offset + 1] = 0;
        var delta = text1_length - text2_length;
        var front = delta % 2 != 0;
        var k1start = 0;
        var k1end = 0;
        var k2start = 0;
        var k2end = 0;
        for (var d = 0; d < max_d; d++) {
          if ((/* @__PURE__ */ new Date()).getTime() > deadline) {
            break;
          }
          for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
            var k1_offset = v_offset + k1;
            var x1;
            if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
              x1 = v1[k1_offset + 1];
            } else {
              x1 = v1[k1_offset - 1] + 1;
            }
            var y1 = x1 - k1;
            while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
              x1++;
              y1++;
            }
            v1[k1_offset] = x1;
            if (x1 > text1_length) {
              k1end += 2;
            } else if (y1 > text2_length) {
              k1start += 2;
            } else if (front) {
              var k2_offset = v_offset + delta - k1;
              if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
                var x2 = text1_length - v2[k2_offset];
                if (x1 >= x2) {
                  return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
                }
              }
            }
          }
          for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
            var k2_offset = v_offset + k2;
            var x2;
            if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
              x2 = v2[k2_offset + 1];
            } else {
              x2 = v2[k2_offset - 1] + 1;
            }
            var y2 = x2 - k2;
            while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
              x2++;
              y2++;
            }
            v2[k2_offset] = x2;
            if (x2 > text1_length) {
              k2end += 2;
            } else if (y2 > text2_length) {
              k2start += 2;
            } else if (!front) {
              var k1_offset = v_offset + delta - k2;
              if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
                var x1 = v1[k1_offset];
                var y1 = v_offset + x1 - k1_offset;
                x2 = text1_length - x2;
                if (x1 >= x2) {
                  return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
                }
              }
            }
          }
        }
        return [
          new diff_match_patch.Diff(DIFF_DELETE, text1),
          new diff_match_patch.Diff(DIFF_INSERT, text2)
        ];
      };
      diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y, deadline) {
        var text1a = text1.substring(0, x);
        var text2a = text2.substring(0, y);
        var text1b = text1.substring(x);
        var text2b = text2.substring(y);
        var diffs = this.diff_main(text1a, text2a, false, deadline);
        var diffsb = this.diff_main(text1b, text2b, false, deadline);
        return diffs.concat(diffsb);
      };
      diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
        var lineArray = [];
        var lineHash = {};
        lineArray[0] = "";
        function diff_linesToCharsMunge_(text) {
          var chars = "";
          var lineStart = 0;
          var lineEnd = -1;
          var lineArrayLength = lineArray.length;
          while (lineEnd < text.length - 1) {
            lineEnd = text.indexOf("\n", lineStart);
            if (lineEnd == -1) {
              lineEnd = text.length - 1;
            }
            var line = text.substring(lineStart, lineEnd + 1);
            if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== void 0) {
              chars += String.fromCharCode(lineHash[line]);
            } else {
              if (lineArrayLength == maxLines) {
                line = text.substring(lineStart);
                lineEnd = text.length;
              }
              chars += String.fromCharCode(lineArrayLength);
              lineHash[line] = lineArrayLength;
              lineArray[lineArrayLength++] = line;
            }
            lineStart = lineEnd + 1;
          }
          return chars;
        }
        var maxLines = 4e4;
        var chars1 = diff_linesToCharsMunge_(text1);
        maxLines = 65535;
        var chars2 = diff_linesToCharsMunge_(text2);
        return { chars1, chars2, lineArray };
      };
      diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
        for (var i2 = 0; i2 < diffs.length; i2++) {
          var chars = diffs[i2][1];
          var text = [];
          for (var j = 0; j < chars.length; j++) {
            text[j] = lineArray[chars.charCodeAt(j)];
          }
          diffs[i2][1] = text.join("");
        }
      };
      diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
        if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
          return 0;
        }
        var pointermin = 0;
        var pointermax = Math.min(text1.length, text2.length);
        var pointermid = pointermax;
        var pointerstart = 0;
        while (pointermin < pointermid) {
          if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
            pointermin = pointermid;
            pointerstart = pointermin;
          } else {
            pointermax = pointermid;
          }
          pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
        }
        return pointermid;
      };
      diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
        if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
          return 0;
        }
        var pointermin = 0;
        var pointermax = Math.min(text1.length, text2.length);
        var pointermid = pointermax;
        var pointerend = 0;
        while (pointermin < pointermid) {
          if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
            pointermin = pointermid;
            pointerend = pointermin;
          } else {
            pointermax = pointermid;
          }
          pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
        }
        return pointermid;
      };
      diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
        var text1_length = text1.length;
        var text2_length = text2.length;
        if (text1_length == 0 || text2_length == 0) {
          return 0;
        }
        if (text1_length > text2_length) {
          text1 = text1.substring(text1_length - text2_length);
        } else if (text1_length < text2_length) {
          text2 = text2.substring(0, text1_length);
        }
        var text_length = Math.min(text1_length, text2_length);
        if (text1 == text2) {
          return text_length;
        }
        var best = 0;
        var length = 1;
        while (true) {
          var pattern = text1.substring(text_length - length);
          var found = text2.indexOf(pattern);
          if (found == -1) {
            return best;
          }
          length += found;
          if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
            best = length;
            length++;
          }
        }
      };
      diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
        if (this.Diff_Timeout <= 0) {
          return null;
        }
        var longtext = text1.length > text2.length ? text1 : text2;
        var shorttext = text1.length > text2.length ? text2 : text1;
        if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
          return null;
        }
        var dmp = this;
        function diff_halfMatchI_(longtext2, shorttext2, i2) {
          var seed = longtext2.substring(i2, i2 + Math.floor(longtext2.length / 4));
          var j = -1;
          var best_common = "";
          var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
          while ((j = shorttext2.indexOf(seed, j + 1)) != -1) {
            var prefixLength = dmp.diff_commonPrefix(
              longtext2.substring(i2),
              shorttext2.substring(j)
            );
            var suffixLength = dmp.diff_commonSuffix(
              longtext2.substring(0, i2),
              shorttext2.substring(0, j)
            );
            if (best_common.length < suffixLength + prefixLength) {
              best_common = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
              best_longtext_a = longtext2.substring(0, i2 - suffixLength);
              best_longtext_b = longtext2.substring(i2 + prefixLength);
              best_shorttext_a = shorttext2.substring(0, j - suffixLength);
              best_shorttext_b = shorttext2.substring(j + prefixLength);
            }
          }
          if (best_common.length * 2 >= longtext2.length) {
            return [
              best_longtext_a,
              best_longtext_b,
              best_shorttext_a,
              best_shorttext_b,
              best_common
            ];
          } else {
            return null;
          }
        }
        var hm1 = diff_halfMatchI_(
          longtext,
          shorttext,
          Math.ceil(longtext.length / 4)
        );
        var hm2 = diff_halfMatchI_(
          longtext,
          shorttext,
          Math.ceil(longtext.length / 2)
        );
        var hm;
        if (!hm1 && !hm2) {
          return null;
        } else if (!hm2) {
          hm = hm1;
        } else if (!hm1) {
          hm = hm2;
        } else {
          hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
        }
        var text1_a, text1_b, text2_a, text2_b;
        if (text1.length > text2.length) {
          text1_a = hm[0];
          text1_b = hm[1];
          text2_a = hm[2];
          text2_b = hm[3];
        } else {
          text2_a = hm[0];
          text2_b = hm[1];
          text1_a = hm[2];
          text1_b = hm[3];
        }
        var mid_common = hm[4];
        return [text1_a, text1_b, text2_a, text2_b, mid_common];
      };
      diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
        var changes = false;
        var equalities = [];
        var equalitiesLength = 0;
        var lastEquality = null;
        var pointer = 0;
        var length_insertions1 = 0;
        var length_deletions1 = 0;
        var length_insertions2 = 0;
        var length_deletions2 = 0;
        while (pointer < diffs.length) {
          if (diffs[pointer][0] == DIFF_EQUAL) {
            equalities[equalitiesLength++] = pointer;
            length_insertions1 = length_insertions2;
            length_deletions1 = length_deletions2;
            length_insertions2 = 0;
            length_deletions2 = 0;
            lastEquality = diffs[pointer][1];
          } else {
            if (diffs[pointer][0] == DIFF_INSERT) {
              length_insertions2 += diffs[pointer][1].length;
            } else {
              length_deletions2 += diffs[pointer][1].length;
            }
            if (lastEquality && lastEquality.length <= Math.max(length_insertions1, length_deletions1) && lastEquality.length <= Math.max(
              length_insertions2,
              length_deletions2
            )) {
              diffs.splice(
                equalities[equalitiesLength - 1],
                0,
                new diff_match_patch.Diff(DIFF_DELETE, lastEquality)
              );
              diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
              equalitiesLength--;
              equalitiesLength--;
              pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
              length_insertions1 = 0;
              length_deletions1 = 0;
              length_insertions2 = 0;
              length_deletions2 = 0;
              lastEquality = null;
              changes = true;
            }
          }
          pointer++;
        }
        if (changes) {
          this.diff_cleanupMerge(diffs);
        }
        this.diff_cleanupSemanticLossless(diffs);
        pointer = 1;
        while (pointer < diffs.length) {
          if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
            var deletion = diffs[pointer - 1][1];
            var insertion = diffs[pointer][1];
            var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
            var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
            if (overlap_length1 >= overlap_length2) {
              if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
                diffs.splice(pointer, 0, new diff_match_patch.Diff(
                  DIFF_EQUAL,
                  insertion.substring(0, overlap_length1)
                ));
                diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
                diffs[pointer + 1][1] = insertion.substring(overlap_length1);
                pointer++;
              }
            } else {
              if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
                diffs.splice(pointer, 0, new diff_match_patch.Diff(
                  DIFF_EQUAL,
                  deletion.substring(0, overlap_length2)
                ));
                diffs[pointer - 1][0] = DIFF_INSERT;
                diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
                diffs[pointer + 1][0] = DIFF_DELETE;
                diffs[pointer + 1][1] = deletion.substring(overlap_length2);
                pointer++;
              }
            }
            pointer++;
          }
          pointer++;
        }
      };
      diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
        function diff_cleanupSemanticScore_(one, two) {
          if (!one || !two) {
            return 6;
          }
          var char1 = one.charAt(one.length - 1);
          var char2 = two.charAt(0);
          var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
          var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
          var whitespace1 = nonAlphaNumeric1 && char1.match(diff_match_patch.whitespaceRegex_);
          var whitespace2 = nonAlphaNumeric2 && char2.match(diff_match_patch.whitespaceRegex_);
          var lineBreak1 = whitespace1 && char1.match(diff_match_patch.linebreakRegex_);
          var lineBreak2 = whitespace2 && char2.match(diff_match_patch.linebreakRegex_);
          var blankLine1 = lineBreak1 && one.match(diff_match_patch.blanklineEndRegex_);
          var blankLine2 = lineBreak2 && two.match(diff_match_patch.blanklineStartRegex_);
          if (blankLine1 || blankLine2) {
            return 5;
          } else if (lineBreak1 || lineBreak2) {
            return 4;
          } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
            return 3;
          } else if (whitespace1 || whitespace2) {
            return 2;
          } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
            return 1;
          }
          return 0;
        }
        var pointer = 1;
        while (pointer < diffs.length - 1) {
          if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
            var equality1 = diffs[pointer - 1][1];
            var edit = diffs[pointer][1];
            var equality2 = diffs[pointer + 1][1];
            var commonOffset = this.diff_commonSuffix(equality1, edit);
            if (commonOffset) {
              var commonString = edit.substring(edit.length - commonOffset);
              equality1 = equality1.substring(0, equality1.length - commonOffset);
              edit = commonString + edit.substring(0, edit.length - commonOffset);
              equality2 = commonString + equality2;
            }
            var bestEquality1 = equality1;
            var bestEdit = edit;
            var bestEquality2 = equality2;
            var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
            while (edit.charAt(0) === equality2.charAt(0)) {
              equality1 += edit.charAt(0);
              edit = edit.substring(1) + equality2.charAt(0);
              equality2 = equality2.substring(1);
              var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
              if (score >= bestScore) {
                bestScore = score;
                bestEquality1 = equality1;
                bestEdit = edit;
                bestEquality2 = equality2;
              }
            }
            if (diffs[pointer - 1][1] != bestEquality1) {
              if (bestEquality1) {
                diffs[pointer - 1][1] = bestEquality1;
              } else {
                diffs.splice(pointer - 1, 1);
                pointer--;
              }
              diffs[pointer][1] = bestEdit;
              if (bestEquality2) {
                diffs[pointer + 1][1] = bestEquality2;
              } else {
                diffs.splice(pointer + 1, 1);
                pointer--;
              }
            }
          }
          pointer++;
        }
      };
      diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
      diff_match_patch.whitespaceRegex_ = /\s/;
      diff_match_patch.linebreakRegex_ = /[\r\n]/;
      diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
      diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;
      diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
        var changes = false;
        var equalities = [];
        var equalitiesLength = 0;
        var lastEquality = null;
        var pointer = 0;
        var pre_ins = false;
        var pre_del = false;
        var post_ins = false;
        var post_del = false;
        while (pointer < diffs.length) {
          if (diffs[pointer][0] == DIFF_EQUAL) {
            if (diffs[pointer][1].length < this.Diff_EditCost && (post_ins || post_del)) {
              equalities[equalitiesLength++] = pointer;
              pre_ins = post_ins;
              pre_del = post_del;
              lastEquality = diffs[pointer][1];
            } else {
              equalitiesLength = 0;
              lastEquality = null;
            }
            post_ins = post_del = false;
          } else {
            if (diffs[pointer][0] == DIFF_DELETE) {
              post_del = true;
            } else {
              post_ins = true;
            }
            if (lastEquality && (pre_ins && pre_del && post_ins && post_del || lastEquality.length < this.Diff_EditCost / 2 && pre_ins + pre_del + post_ins + post_del == 3)) {
              diffs.splice(
                equalities[equalitiesLength - 1],
                0,
                new diff_match_patch.Diff(DIFF_DELETE, lastEquality)
              );
              diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
              equalitiesLength--;
              lastEquality = null;
              if (pre_ins && pre_del) {
                post_ins = post_del = true;
                equalitiesLength = 0;
              } else {
                equalitiesLength--;
                pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                post_ins = post_del = false;
              }
              changes = true;
            }
          }
          pointer++;
        }
        if (changes) {
          this.diff_cleanupMerge(diffs);
        }
      };
      diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
        diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, ""));
        var pointer = 0;
        var count_delete = 0;
        var count_insert = 0;
        var text_delete = "";
        var text_insert = "";
        var commonlength;
        while (pointer < diffs.length) {
          switch (diffs[pointer][0]) {
            case DIFF_INSERT:
              count_insert++;
              text_insert += diffs[pointer][1];
              pointer++;
              break;
            case DIFF_DELETE:
              count_delete++;
              text_delete += diffs[pointer][1];
              pointer++;
              break;
            case DIFF_EQUAL:
              if (count_delete + count_insert > 1) {
                if (count_delete !== 0 && count_insert !== 0) {
                  commonlength = this.diff_commonPrefix(text_insert, text_delete);
                  if (commonlength !== 0) {
                    if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                      diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                    } else {
                      diffs.splice(0, 0, new diff_match_patch.Diff(
                        DIFF_EQUAL,
                        text_insert.substring(0, commonlength)
                      ));
                      pointer++;
                    }
                    text_insert = text_insert.substring(commonlength);
                    text_delete = text_delete.substring(commonlength);
                  }
                  commonlength = this.diff_commonSuffix(text_insert, text_delete);
                  if (commonlength !== 0) {
                    diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                    text_insert = text_insert.substring(0, text_insert.length - commonlength);
                    text_delete = text_delete.substring(0, text_delete.length - commonlength);
                  }
                }
                pointer -= count_delete + count_insert;
                diffs.splice(pointer, count_delete + count_insert);
                if (text_delete.length) {
                  diffs.splice(
                    pointer,
                    0,
                    new diff_match_patch.Diff(DIFF_DELETE, text_delete)
                  );
                  pointer++;
                }
                if (text_insert.length) {
                  diffs.splice(
                    pointer,
                    0,
                    new diff_match_patch.Diff(DIFF_INSERT, text_insert)
                  );
                  pointer++;
                }
                pointer++;
              } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
                diffs[pointer - 1][1] += diffs[pointer][1];
                diffs.splice(pointer, 1);
              } else {
                pointer++;
              }
              count_insert = 0;
              count_delete = 0;
              text_delete = "";
              text_insert = "";
              break;
          }
        }
        if (diffs[diffs.length - 1][1] === "") {
          diffs.pop();
        }
        var changes = false;
        pointer = 1;
        while (pointer < diffs.length - 1) {
          if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
            if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
              diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
              diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
              diffs.splice(pointer - 1, 1);
              changes = true;
            } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
              diffs[pointer - 1][1] += diffs[pointer + 1][1];
              diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
              diffs.splice(pointer + 1, 1);
              changes = true;
            }
          }
          pointer++;
        }
        if (changes) {
          this.diff_cleanupMerge(diffs);
        }
      };
      diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
        var chars1 = 0;
        var chars2 = 0;
        var last_chars1 = 0;
        var last_chars2 = 0;
        var x;
        for (x = 0; x < diffs.length; x++) {
          if (diffs[x][0] !== DIFF_INSERT) {
            chars1 += diffs[x][1].length;
          }
          if (diffs[x][0] !== DIFF_DELETE) {
            chars2 += diffs[x][1].length;
          }
          if (chars1 > loc) {
            break;
          }
          last_chars1 = chars1;
          last_chars2 = chars2;
        }
        if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
          return last_chars2;
        }
        return last_chars2 + (loc - last_chars1);
      };
      diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
        var html = [];
        var pattern_amp = /&/g;
        var pattern_lt = /</g;
        var pattern_gt = />/g;
        var pattern_para = /\n/g;
        for (var x = 0; x < diffs.length; x++) {
          var op = diffs[x][0];
          var data = diffs[x][1];
          var text = data.replace(pattern_amp, "&amp;").replace(pattern_lt, "&lt;").replace(pattern_gt, "&gt;").replace(pattern_para, "&para;<br>");
          switch (op) {
            case DIFF_INSERT:
              html[x] = '<ins style="background:#e6ffe6;">' + text + "</ins>";
              break;
            case DIFF_DELETE:
              html[x] = '<del style="background:#ffe6e6;">' + text + "</del>";
              break;
            case DIFF_EQUAL:
              html[x] = "<span>" + text + "</span>";
              break;
          }
        }
        return html.join("");
      };
      diff_match_patch.prototype.diff_text1 = function(diffs) {
        var text = [];
        for (var x = 0; x < diffs.length; x++) {
          if (diffs[x][0] !== DIFF_INSERT) {
            text[x] = diffs[x][1];
          }
        }
        return text.join("");
      };
      diff_match_patch.prototype.diff_text2 = function(diffs) {
        var text = [];
        for (var x = 0; x < diffs.length; x++) {
          if (diffs[x][0] !== DIFF_DELETE) {
            text[x] = diffs[x][1];
          }
        }
        return text.join("");
      };
      diff_match_patch.prototype.diff_levenshtein = function(diffs) {
        var levenshtein = 0;
        var insertions = 0;
        var deletions = 0;
        for (var x = 0; x < diffs.length; x++) {
          var op = diffs[x][0];
          var data = diffs[x][1];
          switch (op) {
            case DIFF_INSERT:
              insertions += data.length;
              break;
            case DIFF_DELETE:
              deletions += data.length;
              break;
            case DIFF_EQUAL:
              levenshtein += Math.max(insertions, deletions);
              insertions = 0;
              deletions = 0;
              break;
          }
        }
        levenshtein += Math.max(insertions, deletions);
        return levenshtein;
      };
      diff_match_patch.prototype.diff_toDelta = function(diffs) {
        var text = [];
        for (var x = 0; x < diffs.length; x++) {
          switch (diffs[x][0]) {
            case DIFF_INSERT:
              text[x] = "+" + encodeURI(diffs[x][1]);
              break;
            case DIFF_DELETE:
              text[x] = "-" + diffs[x][1].length;
              break;
            case DIFF_EQUAL:
              text[x] = "=" + diffs[x][1].length;
              break;
          }
        }
        return text.join("	").replace(/%20/g, " ");
      };
      diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
        var diffs = [];
        var diffsLength = 0;
        var pointer = 0;
        var tokens = delta.split(/\t/g);
        for (var x = 0; x < tokens.length; x++) {
          var param = tokens[x].substring(1);
          switch (tokens[x].charAt(0)) {
            case "+":
              try {
                diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_INSERT, decodeURI(param));
              } catch (ex) {
                throw new Error("Illegal escape in diff_fromDelta: " + param);
              }
              break;
            case "-":
            case "=":
              var n = parseInt(param, 10);
              if (isNaN(n) || n < 0) {
                throw new Error("Invalid number in diff_fromDelta: " + param);
              }
              var text = text1.substring(pointer, pointer += n);
              if (tokens[x].charAt(0) == "=") {
                diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_EQUAL, text);
              } else {
                diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_DELETE, text);
              }
              break;
            default:
              if (tokens[x]) {
                throw new Error("Invalid diff operation in diff_fromDelta: " + tokens[x]);
              }
          }
        }
        if (pointer != text1.length) {
          throw new Error("Delta length (" + pointer + ") does not equal source text length (" + text1.length + ").");
        }
        return diffs;
      };
      diff_match_patch.prototype.match_main = function(text, pattern, loc) {
        if (text == null || pattern == null || loc == null) {
          throw new Error("Null input. (match_main)");
        }
        loc = Math.max(0, Math.min(loc, text.length));
        if (text == pattern) {
          return 0;
        } else if (!text.length) {
          return -1;
        } else if (text.substring(loc, loc + pattern.length) == pattern) {
          return loc;
        } else {
          return this.match_bitap_(text, pattern, loc);
        }
      };
      diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
        if (pattern.length > this.Match_MaxBits) {
          throw new Error("Pattern too long for this browser.");
        }
        var s2 = this.match_alphabet_(pattern);
        var dmp = this;
        function match_bitapScore_(e, x) {
          var accuracy = e / pattern.length;
          var proximity = Math.abs(loc - x);
          if (!dmp.Match_Distance) {
            return proximity ? 1 : accuracy;
          }
          return accuracy + proximity / dmp.Match_Distance;
        }
        var score_threshold = this.Match_Threshold;
        var best_loc = text.indexOf(pattern, loc);
        if (best_loc != -1) {
          score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
          best_loc = text.lastIndexOf(pattern, loc + pattern.length);
          if (best_loc != -1) {
            score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
          }
        }
        var matchmask = 1 << pattern.length - 1;
        best_loc = -1;
        var bin_min, bin_mid;
        var bin_max = pattern.length + text.length;
        var last_rd;
        for (var d = 0; d < pattern.length; d++) {
          bin_min = 0;
          bin_mid = bin_max;
          while (bin_min < bin_mid) {
            if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
              bin_min = bin_mid;
            } else {
              bin_max = bin_mid;
            }
            bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
          }
          bin_max = bin_mid;
          var start = Math.max(1, loc - bin_mid + 1);
          var finish = Math.min(loc + bin_mid, text.length) + pattern.length;
          var rd = Array(finish + 2);
          rd[finish + 1] = (1 << d) - 1;
          for (var j = finish; j >= start; j--) {
            var charMatch = s2[text.charAt(j - 1)];
            if (d === 0) {
              rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
            } else {
              rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((last_rd[j + 1] | last_rd[j]) << 1 | 1) | last_rd[j + 1];
            }
            if (rd[j] & matchmask) {
              var score = match_bitapScore_(d, j - 1);
              if (score <= score_threshold) {
                score_threshold = score;
                best_loc = j - 1;
                if (best_loc > loc) {
                  start = Math.max(1, 2 * loc - best_loc);
                } else {
                  break;
                }
              }
            }
          }
          if (match_bitapScore_(d + 1, loc) > score_threshold) {
            break;
          }
          last_rd = rd;
        }
        return best_loc;
      };
      diff_match_patch.prototype.match_alphabet_ = function(pattern) {
        var s2 = {};
        for (var i2 = 0; i2 < pattern.length; i2++) {
          s2[pattern.charAt(i2)] = 0;
        }
        for (var i2 = 0; i2 < pattern.length; i2++) {
          s2[pattern.charAt(i2)] |= 1 << pattern.length - i2 - 1;
        }
        return s2;
      };
      diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
        if (text.length == 0) {
          return;
        }
        if (patch.start2 === null) {
          throw Error("patch not initialized");
        }
        var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
        var padding = 0;
        while (text.indexOf(pattern) != text.lastIndexOf(pattern) && pattern.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin) {
          padding += this.Patch_Margin;
          pattern = text.substring(
            patch.start2 - padding,
            patch.start2 + patch.length1 + padding
          );
        }
        padding += this.Patch_Margin;
        var prefix = text.substring(patch.start2 - padding, patch.start2);
        if (prefix) {
          patch.diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, prefix));
        }
        var suffix = text.substring(
          patch.start2 + patch.length1,
          patch.start2 + patch.length1 + padding
        );
        if (suffix) {
          patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, suffix));
        }
        patch.start1 -= prefix.length;
        patch.start2 -= prefix.length;
        patch.length1 += prefix.length + suffix.length;
        patch.length2 += prefix.length + suffix.length;
      };
      diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
        var text1, diffs;
        if (typeof a == "string" && typeof opt_b == "string" && typeof opt_c == "undefined") {
          text1 = /** @type {string} */
          a;
          diffs = this.diff_main(
            text1,
            /** @type {string} */
            opt_b,
            true
          );
          if (diffs.length > 2) {
            this.diff_cleanupSemantic(diffs);
            this.diff_cleanupEfficiency(diffs);
          }
        } else if (a && typeof a == "object" && typeof opt_b == "undefined" && typeof opt_c == "undefined") {
          diffs = /** @type {!Array.<!diff_match_patch.Diff>} */
          a;
          text1 = this.diff_text1(diffs);
        } else if (typeof a == "string" && opt_b && typeof opt_b == "object" && typeof opt_c == "undefined") {
          text1 = /** @type {string} */
          a;
          diffs = /** @type {!Array.<!diff_match_patch.Diff>} */
          opt_b;
        } else if (typeof a == "string" && typeof opt_b == "string" && opt_c && typeof opt_c == "object") {
          text1 = /** @type {string} */
          a;
          diffs = /** @type {!Array.<!diff_match_patch.Diff>} */
          opt_c;
        } else {
          throw new Error("Unknown call format to patch_make.");
        }
        if (diffs.length === 0) {
          return [];
        }
        var patches = [];
        var patch = new diff_match_patch.patch_obj();
        var patchDiffLength = 0;
        var char_count1 = 0;
        var char_count2 = 0;
        var prepatch_text = text1;
        var postpatch_text = text1;
        for (var x = 0; x < diffs.length; x++) {
          var diff_type = diffs[x][0];
          var diff_text = diffs[x][1];
          if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
            patch.start1 = char_count1;
            patch.start2 = char_count2;
          }
          switch (diff_type) {
            case DIFF_INSERT:
              patch.diffs[patchDiffLength++] = diffs[x];
              patch.length2 += diff_text.length;
              postpatch_text = postpatch_text.substring(0, char_count2) + diff_text + postpatch_text.substring(char_count2);
              break;
            case DIFF_DELETE:
              patch.length1 += diff_text.length;
              patch.diffs[patchDiffLength++] = diffs[x];
              postpatch_text = postpatch_text.substring(0, char_count2) + postpatch_text.substring(char_count2 + diff_text.length);
              break;
            case DIFF_EQUAL:
              if (diff_text.length <= 2 * this.Patch_Margin && patchDiffLength && diffs.length != x + 1) {
                patch.diffs[patchDiffLength++] = diffs[x];
                patch.length1 += diff_text.length;
                patch.length2 += diff_text.length;
              } else if (diff_text.length >= 2 * this.Patch_Margin) {
                if (patchDiffLength) {
                  this.patch_addContext_(patch, prepatch_text);
                  patches.push(patch);
                  patch = new diff_match_patch.patch_obj();
                  patchDiffLength = 0;
                  prepatch_text = postpatch_text;
                  char_count1 = char_count2;
                }
              }
              break;
          }
          if (diff_type !== DIFF_INSERT) {
            char_count1 += diff_text.length;
          }
          if (diff_type !== DIFF_DELETE) {
            char_count2 += diff_text.length;
          }
        }
        if (patchDiffLength) {
          this.patch_addContext_(patch, prepatch_text);
          patches.push(patch);
        }
        return patches;
      };
      diff_match_patch.prototype.patch_deepCopy = function(patches) {
        var patchesCopy = [];
        for (var x = 0; x < patches.length; x++) {
          var patch = patches[x];
          var patchCopy = new diff_match_patch.patch_obj();
          patchCopy.diffs = [];
          for (var y = 0; y < patch.diffs.length; y++) {
            patchCopy.diffs[y] = new diff_match_patch.Diff(patch.diffs[y][0], patch.diffs[y][1]);
          }
          patchCopy.start1 = patch.start1;
          patchCopy.start2 = patch.start2;
          patchCopy.length1 = patch.length1;
          patchCopy.length2 = patch.length2;
          patchesCopy[x] = patchCopy;
        }
        return patchesCopy;
      };
      diff_match_patch.prototype.patch_apply = function(patches, text) {
        if (patches.length == 0) {
          return [text, []];
        }
        patches = this.patch_deepCopy(patches);
        var nullPadding = this.patch_addPadding(patches);
        text = nullPadding + text + nullPadding;
        this.patch_splitMax(patches);
        var delta = 0;
        var results = [];
        for (var x = 0; x < patches.length; x++) {
          var expected_loc = patches[x].start2 + delta;
          var text1 = this.diff_text1(patches[x].diffs);
          var start_loc;
          var end_loc = -1;
          if (text1.length > this.Match_MaxBits) {
            start_loc = this.match_main(
              text,
              text1.substring(0, this.Match_MaxBits),
              expected_loc
            );
            if (start_loc != -1) {
              end_loc = this.match_main(
                text,
                text1.substring(text1.length - this.Match_MaxBits),
                expected_loc + text1.length - this.Match_MaxBits
              );
              if (end_loc == -1 || start_loc >= end_loc) {
                start_loc = -1;
              }
            }
          } else {
            start_loc = this.match_main(text, text1, expected_loc);
          }
          if (start_loc == -1) {
            results[x] = false;
            delta -= patches[x].length2 - patches[x].length1;
          } else {
            results[x] = true;
            delta = start_loc - expected_loc;
            var text2;
            if (end_loc == -1) {
              text2 = text.substring(start_loc, start_loc + text1.length);
            } else {
              text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
            }
            if (text1 == text2) {
              text = text.substring(0, start_loc) + this.diff_text2(patches[x].diffs) + text.substring(start_loc + text1.length);
            } else {
              var diffs = this.diff_main(text1, text2, false);
              if (text1.length > this.Match_MaxBits && this.diff_levenshtein(diffs) / text1.length > this.Patch_DeleteThreshold) {
                results[x] = false;
              } else {
                this.diff_cleanupSemanticLossless(diffs);
                var index1 = 0;
                var index2;
                for (var y = 0; y < patches[x].diffs.length; y++) {
                  var mod = patches[x].diffs[y];
                  if (mod[0] !== DIFF_EQUAL) {
                    index2 = this.diff_xIndex(diffs, index1);
                  }
                  if (mod[0] === DIFF_INSERT) {
                    text = text.substring(0, start_loc + index2) + mod[1] + text.substring(start_loc + index2);
                  } else if (mod[0] === DIFF_DELETE) {
                    text = text.substring(0, start_loc + index2) + text.substring(start_loc + this.diff_xIndex(
                      diffs,
                      index1 + mod[1].length
                    ));
                  }
                  if (mod[0] !== DIFF_DELETE) {
                    index1 += mod[1].length;
                  }
                }
              }
            }
          }
        }
        text = text.substring(nullPadding.length, text.length - nullPadding.length);
        return [text, results];
      };
      diff_match_patch.prototype.patch_addPadding = function(patches) {
        var paddingLength = this.Patch_Margin;
        var nullPadding = "";
        for (var x = 1; x <= paddingLength; x++) {
          nullPadding += String.fromCharCode(x);
        }
        for (var x = 0; x < patches.length; x++) {
          patches[x].start1 += paddingLength;
          patches[x].start2 += paddingLength;
        }
        var patch = patches[0];
        var diffs = patch.diffs;
        if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
          diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, nullPadding));
          patch.start1 -= paddingLength;
          patch.start2 -= paddingLength;
          patch.length1 += paddingLength;
          patch.length2 += paddingLength;
        } else if (paddingLength > diffs[0][1].length) {
          var extraLength = paddingLength - diffs[0][1].length;
          diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
          patch.start1 -= extraLength;
          patch.start2 -= extraLength;
          patch.length1 += extraLength;
          patch.length2 += extraLength;
        }
        patch = patches[patches.length - 1];
        diffs = patch.diffs;
        if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
          diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, nullPadding));
          patch.length1 += paddingLength;
          patch.length2 += paddingLength;
        } else if (paddingLength > diffs[diffs.length - 1][1].length) {
          var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
          diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
          patch.length1 += extraLength;
          patch.length2 += extraLength;
        }
        return nullPadding;
      };
      diff_match_patch.prototype.patch_splitMax = function(patches) {
        var patch_size = this.Match_MaxBits;
        for (var x = 0; x < patches.length; x++) {
          if (patches[x].length1 <= patch_size) {
            continue;
          }
          var bigpatch = patches[x];
          patches.splice(x--, 1);
          var start1 = bigpatch.start1;
          var start2 = bigpatch.start2;
          var precontext = "";
          while (bigpatch.diffs.length !== 0) {
            var patch = new diff_match_patch.patch_obj();
            var empty = true;
            patch.start1 = start1 - precontext.length;
            patch.start2 = start2 - precontext.length;
            if (precontext !== "") {
              patch.length1 = patch.length2 = precontext.length;
              patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, precontext));
            }
            while (bigpatch.diffs.length !== 0 && patch.length1 < patch_size - this.Patch_Margin) {
              var diff_type = bigpatch.diffs[0][0];
              var diff_text = bigpatch.diffs[0][1];
              if (diff_type === DIFF_INSERT) {
                patch.length2 += diff_text.length;
                start2 += diff_text.length;
                patch.diffs.push(bigpatch.diffs.shift());
                empty = false;
              } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 && patch.diffs[0][0] == DIFF_EQUAL && diff_text.length > 2 * patch_size) {
                patch.length1 += diff_text.length;
                start1 += diff_text.length;
                empty = false;
                patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text));
                bigpatch.diffs.shift();
              } else {
                diff_text = diff_text.substring(
                  0,
                  patch_size - patch.length1 - this.Patch_Margin
                );
                patch.length1 += diff_text.length;
                start1 += diff_text.length;
                if (diff_type === DIFF_EQUAL) {
                  patch.length2 += diff_text.length;
                  start2 += diff_text.length;
                } else {
                  empty = false;
                }
                patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text));
                if (diff_text == bigpatch.diffs[0][1]) {
                  bigpatch.diffs.shift();
                } else {
                  bigpatch.diffs[0][1] = bigpatch.diffs[0][1].substring(diff_text.length);
                }
              }
            }
            precontext = this.diff_text2(patch.diffs);
            precontext = precontext.substring(precontext.length - this.Patch_Margin);
            var postcontext = this.diff_text1(bigpatch.diffs).substring(0, this.Patch_Margin);
            if (postcontext !== "") {
              patch.length1 += postcontext.length;
              patch.length2 += postcontext.length;
              if (patch.diffs.length !== 0 && patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
                patch.diffs[patch.diffs.length - 1][1] += postcontext;
              } else {
                patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, postcontext));
              }
            }
            if (!empty) {
              patches.splice(++x, 0, patch);
            }
          }
        }
      };
      diff_match_patch.prototype.patch_toText = function(patches) {
        var text = [];
        for (var x = 0; x < patches.length; x++) {
          text[x] = patches[x];
        }
        return text.join("");
      };
      diff_match_patch.prototype.patch_fromText = function(textline) {
        var patches = [];
        if (!textline) {
          return patches;
        }
        var text = textline.split("\n");
        var textPointer = 0;
        var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
        while (textPointer < text.length) {
          var m = text[textPointer].match(patchHeader);
          if (!m) {
            throw new Error("Invalid patch string: " + text[textPointer]);
          }
          var patch = new diff_match_patch.patch_obj();
          patches.push(patch);
          patch.start1 = parseInt(m[1], 10);
          if (m[2] === "") {
            patch.start1--;
            patch.length1 = 1;
          } else if (m[2] == "0") {
            patch.length1 = 0;
          } else {
            patch.start1--;
            patch.length1 = parseInt(m[2], 10);
          }
          patch.start2 = parseInt(m[3], 10);
          if (m[4] === "") {
            patch.start2--;
            patch.length2 = 1;
          } else if (m[4] == "0") {
            patch.length2 = 0;
          } else {
            patch.start2--;
            patch.length2 = parseInt(m[4], 10);
          }
          textPointer++;
          while (textPointer < text.length) {
            var sign = text[textPointer].charAt(0);
            try {
              var line = decodeURI(text[textPointer].substring(1));
            } catch (ex) {
              throw new Error("Illegal escape in patch_fromText: " + line);
            }
            if (sign == "-") {
              patch.diffs.push(new diff_match_patch.Diff(DIFF_DELETE, line));
            } else if (sign == "+") {
              patch.diffs.push(new diff_match_patch.Diff(DIFF_INSERT, line));
            } else if (sign == " ") {
              patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, line));
            } else if (sign == "@") {
              break;
            } else if (sign === "") {
            } else {
              throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
            }
            textPointer++;
          }
        }
        return patches;
      };
      diff_match_patch.patch_obj = function() {
        this.diffs = [];
        this.start1 = null;
        this.start2 = null;
        this.length1 = 0;
        this.length2 = 0;
      };
      diff_match_patch.patch_obj.prototype.toString = function() {
        var coords1, coords2;
        if (this.length1 === 0) {
          coords1 = this.start1 + ",0";
        } else if (this.length1 == 1) {
          coords1 = this.start1 + 1;
        } else {
          coords1 = this.start1 + 1 + "," + this.length1;
        }
        if (this.length2 === 0) {
          coords2 = this.start2 + ",0";
        } else if (this.length2 == 1) {
          coords2 = this.start2 + 1;
        } else {
          coords2 = this.start2 + 1 + "," + this.length2;
        }
        var text = ["@@ -" + coords1 + " +" + coords2 + " @@\n"];
        var op;
        for (var x = 0; x < this.diffs.length; x++) {
          switch (this.diffs[x][0]) {
            case DIFF_INSERT:
              op = "+";
              break;
            case DIFF_DELETE:
              op = "-";
              break;
            case DIFF_EQUAL:
              op = " ";
              break;
          }
          text[x + 1] = op + encodeURI(this.diffs[x][1]) + "\n";
        }
        return text.join("").replace(/%20/g, " ");
      };
      module.exports = diff_match_patch;
      module.exports["diff_match_patch"] = diff_match_patch;
      module.exports["DIFF_DELETE"] = DIFF_DELETE;
      module.exports["DIFF_INSERT"] = DIFF_INSERT;
      module.exports["DIFF_EQUAL"] = DIFF_EQUAL;
    }
  });

  // ../../packages/jsondiffpatch/lib/with-text-diffs.js
  var import_diff_match_patch = __toESM(require_diff_match_patch(), 1);

  // ../../packages/jsondiffpatch/lib/processor.js
  var Processor = class {
    constructor(options) {
      this.selfOptions = options || {};
      this.pipes = {};
    }
    options(options) {
      if (options) {
        this.selfOptions = options;
      }
      return this.selfOptions;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pipe(name, pipeArg) {
      let pipe = pipeArg;
      if (typeof name === "string") {
        if (typeof pipe === "undefined") {
          return this.pipes[name];
        } else {
          this.pipes[name] = pipe;
        }
      }
      if (name && name.name) {
        pipe = name;
        if (pipe.processor === this) {
          return pipe;
        }
        this.pipes[pipe.name] = pipe;
      }
      pipe.processor = this;
      return pipe;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process(input, pipe) {
      let context = input;
      context.options = this.options();
      let nextPipe = pipe || input.pipe || "default";
      let lastPipe;
      while (nextPipe) {
        if (typeof context.nextAfterChildren !== "undefined") {
          context.next = context.nextAfterChildren;
          context.nextAfterChildren = null;
        }
        if (typeof nextPipe === "string") {
          nextPipe = this.pipe(nextPipe);
        }
        nextPipe.process(context);
        lastPipe = nextPipe;
        nextPipe = null;
        if (context) {
          if (context.next) {
            context = context.next;
            nextPipe = context.pipe || lastPipe;
          }
        }
      }
      return context.hasResult ? context.result : void 0;
    }
  };
  var processor_default = Processor;

  // ../../packages/jsondiffpatch/lib/pipe.js
  var Pipe = class {
    constructor(name) {
      this.name = name;
      this.filters = [];
    }
    process(input) {
      if (!this.processor) {
        throw new Error("add this pipe to a processor before using it");
      }
      const debug = this.debug;
      const length = this.filters.length;
      const context = input;
      for (let index = 0; index < length; index++) {
        const filter = this.filters[index];
        if (debug) {
          this.log(`filter: ${filter.filterName}`);
        }
        filter(context);
        if (typeof context === "object" && context.exiting) {
          context.exiting = false;
          break;
        }
      }
      if (!context.next && this.resultCheck) {
        this.resultCheck(context);
      }
    }
    log(msg) {
      console.log(`[jsondiffpatch] ${this.name} pipe, ${msg}`);
    }
    append(...args) {
      this.filters.push(...args);
      return this;
    }
    prepend(...args) {
      this.filters.unshift(...args);
      return this;
    }
    indexOf(filterName) {
      if (!filterName) {
        throw new Error("a filter name is required");
      }
      for (let index = 0; index < this.filters.length; index++) {
        const filter = this.filters[index];
        if (filter.filterName === filterName) {
          return index;
        }
      }
      throw new Error(`filter not found: ${filterName}`);
    }
    list() {
      return this.filters.map((f) => f.filterName);
    }
    after(filterName, ...params) {
      const index = this.indexOf(filterName);
      this.filters.splice(index + 1, 0, ...params);
      return this;
    }
    before(filterName, ...params) {
      const index = this.indexOf(filterName);
      this.filters.splice(index, 0, ...params);
      return this;
    }
    replace(filterName, ...params) {
      const index = this.indexOf(filterName);
      this.filters.splice(index, 1, ...params);
      return this;
    }
    remove(filterName) {
      const index = this.indexOf(filterName);
      this.filters.splice(index, 1);
      return this;
    }
    clear() {
      this.filters.length = 0;
      return this;
    }
    shouldHaveResult(should) {
      if (should === false) {
        this.resultCheck = null;
        return;
      }
      if (this.resultCheck) {
        return;
      }
      this.resultCheck = (context) => {
        if (!context.hasResult) {
          console.log(context);
          const error = new Error(`${this.name} failed`);
          error.noResult = true;
          throw error;
        }
      };
      return this;
    }
  };
  var pipe_default = Pipe;

  // ../../packages/jsondiffpatch/lib/contexts/context.js
  var Context = class {
    setResult(result) {
      this.result = result;
      this.hasResult = true;
      return this;
    }
    exit() {
      this.exiting = true;
      return this;
    }
    push(child, name) {
      child.parent = this;
      if (typeof name !== "undefined") {
        child.childName = name;
      }
      child.root = this.root || this;
      child.options = child.options || this.options;
      if (!this.children) {
        this.children = [child];
        this.nextAfterChildren = this.next || null;
        this.next = child;
      } else {
        this.children[this.children.length - 1].next = child;
        this.children.push(child);
      }
      child.next = this;
      return this;
    }
  };

  // ../../packages/jsondiffpatch/lib/clone.js
  function cloneRegExp(re) {
    const regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString());
    return new RegExp(regexMatch[1], regexMatch[2]);
  }
  function clone(arg) {
    if (typeof arg !== "object") {
      return arg;
    }
    if (arg === null) {
      return null;
    }
    if (Array.isArray(arg)) {
      return arg.map(clone);
    }
    if (arg instanceof Date) {
      return new Date(arg.getTime());
    }
    if (arg instanceof RegExp) {
      return cloneRegExp(arg);
    }
    const cloned = {};
    for (const name in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, name)) {
        cloned[name] = clone(arg[name]);
      }
    }
    return cloned;
  }

  // ../../packages/jsondiffpatch/lib/contexts/diff.js
  var DiffContext = class extends Context {
    constructor(left, right) {
      super();
      this.left = left;
      this.right = right;
      this.pipe = "diff";
    }
    setResult(result) {
      if (this.options.cloneDiffValues && typeof result === "object") {
        const clone2 = typeof this.options.cloneDiffValues === "function" ? this.options.cloneDiffValues : clone;
        if (typeof result[0] === "object") {
          result[0] = clone2(result[0]);
        }
        if (typeof result[1] === "object") {
          result[1] = clone2(result[1]);
        }
      }
      return super.setResult(result);
    }
  };
  var diff_default = DiffContext;

  // ../../packages/jsondiffpatch/lib/contexts/patch.js
  var PatchContext = class extends Context {
    constructor(left, delta) {
      super();
      this.left = left;
      this.delta = delta;
      this.pipe = "patch";
    }
  };
  var patch_default = PatchContext;

  // ../../packages/jsondiffpatch/lib/contexts/reverse.js
  var ReverseContext = class extends Context {
    constructor(delta) {
      super();
      this.delta = delta;
      this.pipe = "reverse";
    }
  };
  var reverse_default = ReverseContext;

  // ../../packages/jsondiffpatch/lib/filters/trivial.js
  var diffFilter = function trivialMatchesDiffFilter(context) {
    if (context.left === context.right) {
      context.setResult(void 0).exit();
      return;
    }
    if (typeof context.left === "undefined") {
      if (typeof context.right === "function") {
        throw new Error("functions are not supported");
      }
      context.setResult([context.right]).exit();
      return;
    }
    if (typeof context.right === "undefined") {
      context.setResult([context.left, 0, 0]).exit();
      return;
    }
    if (typeof context.left === "function" || typeof context.right === "function") {
      throw new Error("functions are not supported");
    }
    context.leftType = context.left === null ? "null" : typeof context.left;
    context.rightType = context.right === null ? "null" : typeof context.right;
    if (context.leftType !== context.rightType) {
      context.setResult([context.left, context.right]).exit();
      return;
    }
    if (context.leftType === "boolean" || context.leftType === "number") {
      context.setResult([context.left, context.right]).exit();
      return;
    }
    if (context.leftType === "object") {
      context.leftIsArray = Array.isArray(context.left);
    }
    if (context.rightType === "object") {
      context.rightIsArray = Array.isArray(context.right);
    }
    if (context.leftIsArray !== context.rightIsArray) {
      context.setResult([context.left, context.right]).exit();
      return;
    }
    if (context.left instanceof RegExp) {
      if (context.right instanceof RegExp) {
        context.setResult([context.left.toString(), context.right.toString()]).exit();
      } else {
        context.setResult([context.left, context.right]).exit();
      }
    }
  };
  diffFilter.filterName = "trivial";
  var patchFilter = function trivialMatchesPatchFilter(context) {
    if (typeof context.delta === "undefined") {
      context.setResult(context.left).exit();
      return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
      return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
      context.setResult(nonNestedDelta[0]).exit();
      return;
    }
    if (nonNestedDelta.length === 2) {
      if (context.left instanceof RegExp) {
        const regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(nonNestedDelta[1]);
        if (regexArgs) {
          context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
          return;
        }
      }
      context.setResult(nonNestedDelta[1]).exit();
      return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
      context.setResult(void 0).exit();
    }
  };
  patchFilter.filterName = "trivial";
  var reverseFilter = function trivialReferseFilter(context) {
    if (typeof context.delta === "undefined") {
      context.setResult(context.delta).exit();
      return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
      return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
      context.setResult([nonNestedDelta[0], 0, 0]).exit();
      return;
    }
    if (nonNestedDelta.length === 2) {
      context.setResult([nonNestedDelta[1], nonNestedDelta[0]]).exit();
      return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
      context.setResult([nonNestedDelta[0]]).exit();
    }
  };
  reverseFilter.filterName = "trivial";

  // ../../packages/jsondiffpatch/lib/filters/nested.js
  var collectChildrenDiffFilter = (context) => {
    if (!context || !context.children) {
      return;
    }
    const length = context.children.length;
    let child;
    let result = context.result;
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      if (typeof child.result === "undefined") {
        continue;
      }
      result = result || {};
      result[child.childName] = child.result;
    }
    if (result && context.leftIsArray) {
      result._t = "a";
    }
    context.setResult(result).exit();
  };
  collectChildrenDiffFilter.filterName = "collectChildren";
  var objectsDiffFilter = (context) => {
    if (context.leftIsArray || context.leftType !== "object") {
      return;
    }
    const left = context.left;
    const right = context.right;
    let name;
    let child;
    const propertyFilter = context.options.propertyFilter;
    for (name in left) {
      if (!Object.prototype.hasOwnProperty.call(left, name)) {
        continue;
      }
      if (propertyFilter && !propertyFilter(name, context)) {
        continue;
      }
      child = new diff_default(left[name], right[name]);
      context.push(child, name);
    }
    for (name in right) {
      if (!Object.prototype.hasOwnProperty.call(right, name)) {
        continue;
      }
      if (propertyFilter && !propertyFilter(name, context)) {
        continue;
      }
      if (typeof left[name] === "undefined") {
        child = new diff_default(void 0, right[name]);
        context.push(child, name);
      }
    }
    if (!context.children || context.children.length === 0) {
      context.setResult(void 0).exit();
      return;
    }
    context.exit();
  };
  objectsDiffFilter.filterName = "objects";
  var patchFilter2 = function nestedPatchFilter(context) {
    if (!context.nested) {
      return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
      return;
    }
    const objectDelta = nestedDelta;
    let name;
    let child;
    for (name in objectDelta) {
      child = new patch_default(context.left[name], objectDelta[name]);
      context.push(child, name);
    }
    context.exit();
  };
  patchFilter2.filterName = "objects";
  var collectChildrenPatchFilter = function collectChildrenPatchFilter2(context) {
    if (!context || !context.children) {
      return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
      return;
    }
    const object = context.left;
    const length = context.children.length;
    let child;
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      const property = child.childName;
      if (Object.prototype.hasOwnProperty.call(context.left, property) && child.result === void 0) {
        delete object[property];
      } else if (object[property] !== child.result) {
        object[property] = child.result;
      }
    }
    context.setResult(object).exit();
  };
  collectChildrenPatchFilter.filterName = "collectChildren";
  var reverseFilter2 = function nestedReverseFilter(context) {
    if (!context.nested) {
      return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
      return;
    }
    const objectDelta = context.delta;
    let name;
    let child;
    for (name in objectDelta) {
      child = new reverse_default(objectDelta[name]);
      context.push(child, name);
    }
    context.exit();
  };
  reverseFilter2.filterName = "objects";
  var collectChildrenReverseFilter = (context) => {
    if (!context || !context.children) {
      return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
      return;
    }
    const length = context.children.length;
    let child;
    const delta = {};
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      const property = child.childName;
      if (delta[property] !== child.result) {
        delta[property] = child.result;
      }
    }
    context.setResult(delta).exit();
  };
  collectChildrenReverseFilter.filterName = "collectChildren";

  // ../../packages/jsondiffpatch/lib/filters/lcs.js
  var defaultMatch = function(array1, array2, index1, index2) {
    return array1[index1] === array2[index2];
  };
  var lengthMatrix = function(array1, array2, match, context) {
    const len1 = array1.length;
    const len2 = array2.length;
    let x, y;
    const matrix = new Array(len1 + 1);
    for (x = 0; x < len1 + 1; x++) {
      matrix[x] = new Array(len2 + 1);
      for (y = 0; y < len2 + 1; y++) {
        matrix[x][y] = 0;
      }
    }
    matrix.match = match;
    for (x = 1; x < len1 + 1; x++) {
      for (y = 1; y < len2 + 1; y++) {
        if (match(array1, array2, x - 1, y - 1, context)) {
          matrix[x][y] = matrix[x - 1][y - 1] + 1;
        } else {
          matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
        }
      }
    }
    return matrix;
  };
  var backtrack = function(matrix, array1, array2, context) {
    let index1 = array1.length;
    let index2 = array2.length;
    const subsequence = {
      sequence: [],
      indices1: [],
      indices2: []
    };
    while (index1 !== 0 && index2 !== 0) {
      const sameLetter = matrix.match(array1, array2, index1 - 1, index2 - 1, context);
      if (sameLetter) {
        subsequence.sequence.unshift(array1[index1 - 1]);
        subsequence.indices1.unshift(index1 - 1);
        subsequence.indices2.unshift(index2 - 1);
        --index1;
        --index2;
      } else {
        const valueAtMatrixAbove = matrix[index1][index2 - 1];
        const valueAtMatrixLeft = matrix[index1 - 1][index2];
        if (valueAtMatrixAbove > valueAtMatrixLeft) {
          --index2;
        } else {
          --index1;
        }
      }
    }
    return subsequence;
  };
  var get = function(array1, array2, match, context) {
    const innerContext = context || {};
    const matrix = lengthMatrix(array1, array2, match || defaultMatch, innerContext);
    return backtrack(matrix, array1, array2, innerContext);
  };
  var lcs_default = {
    get
  };

  // ../../packages/jsondiffpatch/lib/filters/arrays.js
  var ARRAY_MOVE = 3;
  function arraysHaveMatchByRef(array1, array2, len1, len2) {
    for (let index1 = 0; index1 < len1; index1++) {
      const val1 = array1[index1];
      for (let index2 = 0; index2 < len2; index2++) {
        const val2 = array2[index2];
        if (index1 !== index2 && val1 === val2) {
          return true;
        }
      }
    }
  }
  function matchItems(array1, array2, index1, index2, context) {
    const value1 = array1[index1];
    const value2 = array2[index2];
    if (value1 === value2) {
      return true;
    }
    if (typeof value1 !== "object" || typeof value2 !== "object") {
      return false;
    }
    const objectHash = context.objectHash;
    if (!objectHash) {
      return context.matchByPosition && index1 === index2;
    }
    context.hashCache1 = context.hashCache1 || [];
    let hash1 = context.hashCache1[index1];
    if (typeof hash1 === "undefined") {
      context.hashCache1[index1] = hash1 = objectHash(value1, index1);
    }
    if (typeof hash1 === "undefined") {
      return false;
    }
    context.hashCache2 = context.hashCache2 || [];
    let hash2 = context.hashCache2[index2];
    if (typeof hash2 === "undefined") {
      context.hashCache2[index2] = hash2 = objectHash(value2, index2);
    }
    if (typeof hash2 === "undefined") {
      return false;
    }
    return hash1 === hash2;
  }
  var diffFilter2 = function arraysDiffFilter(context) {
    if (!context.leftIsArray) {
      return;
    }
    const matchContext = {
      objectHash: context.options && context.options.objectHash,
      matchByPosition: context.options && context.options.matchByPosition
    };
    let commonHead = 0;
    let commonTail = 0;
    let index;
    let index1;
    let index2;
    const array1 = context.left;
    const array2 = context.right;
    const len1 = array1.length;
    const len2 = array2.length;
    let child;
    if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== "boolean") {
      matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
    }
    while (commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)) {
      index = commonHead;
      child = new diff_default(array1[index], array2[index]);
      context.push(child, index);
      commonHead++;
    }
    while (commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)) {
      index1 = len1 - 1 - commonTail;
      index2 = len2 - 1 - commonTail;
      child = new diff_default(array1[index1], array2[index2]);
      context.push(child, index2);
      commonTail++;
    }
    let result;
    if (commonHead + commonTail === len1) {
      if (len1 === len2) {
        context.setResult(void 0).exit();
        return;
      }
      result = result || {
        _t: "a"
      };
      for (index = commonHead; index < len2 - commonTail; index++) {
        result[index] = [array2[index]];
      }
      context.setResult(result).exit();
      return;
    }
    if (commonHead + commonTail === len2) {
      result = result || {
        _t: "a"
      };
      for (index = commonHead; index < len1 - commonTail; index++) {
        result[`_${index}`] = [array1[index], 0, 0];
      }
      context.setResult(result).exit();
      return;
    }
    delete matchContext.hashCache1;
    delete matchContext.hashCache2;
    const trimmed1 = array1.slice(commonHead, len1 - commonTail);
    const trimmed2 = array2.slice(commonHead, len2 - commonTail);
    const seq = lcs_default.get(trimmed1, trimmed2, matchItems, matchContext);
    const removedItems = [];
    result = result || {
      _t: "a"
    };
    for (index = commonHead; index < len1 - commonTail; index++) {
      if (seq.indices1.indexOf(index - commonHead) < 0) {
        result[`_${index}`] = [array1[index], 0, 0];
        removedItems.push(index);
      }
    }
    let detectMove = true;
    if (context.options && context.options.arrays && context.options.arrays.detectMove === false) {
      detectMove = false;
    }
    let includeValueOnMove = false;
    if (context.options && context.options.arrays && context.options.arrays.includeValueOnMove) {
      includeValueOnMove = true;
    }
    const removedItemsLength = removedItems.length;
    for (index = commonHead; index < len2 - commonTail; index++) {
      const indexOnArray2 = seq.indices2.indexOf(index - commonHead);
      if (indexOnArray2 < 0) {
        let isMove = false;
        if (detectMove && removedItemsLength > 0) {
          for (let removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++) {
            index1 = removedItems[removeItemIndex1];
            if (matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
              result[`_${index1}`].splice(1, 2, index, ARRAY_MOVE);
              if (!includeValueOnMove) {
                result[`_${index1}`][0] = "";
              }
              index2 = index;
              child = new diff_default(array1[index1], array2[index2]);
              context.push(child, index2);
              removedItems.splice(removeItemIndex1, 1);
              isMove = true;
              break;
            }
          }
        }
        if (!isMove) {
          result[index] = [array2[index]];
        }
      } else {
        index1 = seq.indices1[indexOnArray2] + commonHead;
        index2 = seq.indices2[indexOnArray2] + commonHead;
        child = new diff_default(array1[index1], array2[index2]);
        context.push(child, index2);
      }
    }
    context.setResult(result).exit();
  };
  diffFilter2.filterName = "arrays";
  var compare = {
    numerically(a, b) {
      return a - b;
    },
    numericallyBy(name) {
      return (a, b) => a[name] - b[name];
    }
  };
  var patchFilter3 = function nestedPatchFilter2(context) {
    if (!context.nested) {
      return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== "a") {
      return;
    }
    let index;
    let index1;
    const delta = nestedDelta;
    const array = context.left;
    let toRemove = [];
    let toInsert = [];
    const toModify = [];
    for (index in delta) {
      if (index !== "_t") {
        if (index[0] === "_") {
          const removedOrMovedIndex = index;
          if (delta[removedOrMovedIndex][2] === 0 || delta[removedOrMovedIndex][2] === ARRAY_MOVE) {
            toRemove.push(parseInt(index.slice(1), 10));
          } else {
            throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${delta[removedOrMovedIndex][2]}`);
          }
        } else {
          const numberIndex = index;
          if (delta[numberIndex].length === 1) {
            toInsert.push({
              index: parseInt(numberIndex, 10),
              value: delta[numberIndex][0]
            });
          } else {
            toModify.push({
              index: parseInt(numberIndex, 10),
              delta: delta[numberIndex]
            });
          }
        }
      }
    }
    toRemove = toRemove.sort(compare.numerically);
    for (index = toRemove.length - 1; index >= 0; index--) {
      index1 = toRemove[index];
      const indexDiff = delta[`_${index1}`];
      const removedValue = array.splice(index1, 1)[0];
      if (indexDiff[2] === ARRAY_MOVE) {
        toInsert.push({
          index: indexDiff[1],
          value: removedValue
        });
      }
    }
    toInsert = toInsert.sort(compare.numericallyBy("index"));
    const toInsertLength = toInsert.length;
    for (index = 0; index < toInsertLength; index++) {
      const insertion = toInsert[index];
      array.splice(insertion.index, 0, insertion.value);
    }
    const toModifyLength = toModify.length;
    let child;
    if (toModifyLength > 0) {
      for (index = 0; index < toModifyLength; index++) {
        const modification = toModify[index];
        child = new patch_default(array[modification.index], modification.delta);
        context.push(child, modification.index);
      }
    }
    if (!context.children) {
      context.setResult(array).exit();
      return;
    }
    context.exit();
  };
  patchFilter3.filterName = "arrays";
  var collectChildrenPatchFilter3 = function collectChildrenPatchFilter4(context) {
    if (!context || !context.children) {
      return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== "a") {
      return;
    }
    const array = context.left;
    const length = context.children.length;
    let child;
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      const arrayIndex = child.childName;
      array[arrayIndex] = child.result;
    }
    context.setResult(array).exit();
  };
  collectChildrenPatchFilter3.filterName = "arraysCollectChildren";
  var reverseFilter3 = function arraysReverseFilter(context) {
    if (!context.nested) {
      const nonNestedDelta = context.delta;
      if (nonNestedDelta[2] === ARRAY_MOVE) {
        const arrayMoveDelta = nonNestedDelta;
        context.newName = `_${arrayMoveDelta[1]}`;
        context.setResult([
          arrayMoveDelta[0],
          parseInt(context.childName.substring(1), 10),
          ARRAY_MOVE
        ]).exit();
      }
      return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== "a") {
      return;
    }
    const arrayDelta = nestedDelta;
    let name;
    let child;
    for (name in arrayDelta) {
      if (name === "_t") {
        continue;
      }
      child = new reverse_default(arrayDelta[name]);
      context.push(child, name);
    }
    context.exit();
  };
  reverseFilter3.filterName = "arrays";
  var reverseArrayDeltaIndex = (delta, index, itemDelta) => {
    if (typeof index === "string" && index[0] === "_") {
      return parseInt(index.substring(1), 10);
    } else if (Array.isArray(itemDelta) && itemDelta[2] === 0) {
      return `_${index}`;
    }
    let reverseIndex = +index;
    for (const deltaIndex in delta) {
      const deltaItem = delta[deltaIndex];
      if (Array.isArray(deltaItem)) {
        if (deltaItem[2] === ARRAY_MOVE) {
          const moveFromIndex = parseInt(deltaIndex.substring(1), 10);
          const moveToIndex = deltaItem[1];
          if (moveToIndex === +index) {
            return moveFromIndex;
          }
          if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
            reverseIndex++;
          } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
            reverseIndex--;
          }
        } else if (deltaItem[2] === 0) {
          const deleteIndex = parseInt(deltaIndex.substring(1), 10);
          if (deleteIndex <= reverseIndex) {
            reverseIndex++;
          }
        } else if (deltaItem.length === 1 && parseInt(deltaIndex, 10) <= reverseIndex) {
          reverseIndex--;
        }
      }
    }
    return reverseIndex;
  };
  var collectChildrenReverseFilter2 = (context) => {
    if (!context || !context.children) {
      return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== "a") {
      return;
    }
    const arrayDelta = deltaWithChildren;
    const length = context.children.length;
    let child;
    const delta = {
      _t: "a"
    };
    for (let index = 0; index < length; index++) {
      child = context.children[index];
      let name = child.newName;
      if (typeof name === "undefined") {
        name = reverseArrayDeltaIndex(arrayDelta, child.childName, child.result);
      }
      if (delta[name] !== child.result) {
        delta[name] = child.result;
      }
    }
    context.setResult(delta).exit();
  };
  collectChildrenReverseFilter2.filterName = "arraysCollectChildren";

  // ../../packages/jsondiffpatch/lib/filters/dates.js
  var diffFilter3 = function datesDiffFilter(context) {
    if (context.left instanceof Date) {
      if (context.right instanceof Date) {
        if (context.left.getTime() !== context.right.getTime()) {
          context.setResult([context.left, context.right]);
        } else {
          context.setResult(void 0);
        }
      } else {
        context.setResult([context.left, context.right]);
      }
      context.exit();
    } else if (context.right instanceof Date) {
      context.setResult([context.left, context.right]).exit();
    }
  };
  diffFilter3.filterName = "dates";

  // ../../packages/jsondiffpatch/lib/filters/texts.js
  var TEXT_DIFF = 2;
  var DEFAULT_MIN_LENGTH = 60;
  var cachedDiffPatch = null;
  function getDiffMatchPatch(options, required) {
    var _a;
    if (!cachedDiffPatch) {
      let instance2;
      if ((_a = options === null || options === void 0 ? void 0 : options.textDiff) === null || _a === void 0 ? void 0 : _a.diffMatchPatch) {
        instance2 = new options.textDiff.diffMatchPatch();
      } else {
        if (!required) {
          return null;
        }
        const error = new Error("The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point.");
        error.diff_match_patch_not_found = true;
        throw error;
      }
      cachedDiffPatch = {
        diff: function(txt1, txt2) {
          return instance2.patch_toText(instance2.patch_make(txt1, txt2));
        },
        patch: function(txt1, patch) {
          const results = instance2.patch_apply(instance2.patch_fromText(patch), txt1);
          for (let i2 = 0; i2 < results[1].length; i2++) {
            if (!results[1][i2]) {
              const error = new Error("text patch failed");
              error.textPatchFailed = true;
            }
          }
          return results[0];
        }
      };
    }
    return cachedDiffPatch;
  }
  var diffFilter4 = function textsDiffFilter(context) {
    if (context.leftType !== "string") {
      return;
    }
    const left = context.left;
    const right = context.right;
    const minLength = context.options && context.options.textDiff && context.options.textDiff.minLength || DEFAULT_MIN_LENGTH;
    if (left.length < minLength || right.length < minLength) {
      context.setResult([left, right]).exit();
      return;
    }
    const diffMatchPatch = getDiffMatchPatch(context.options);
    if (!diffMatchPatch) {
      context.setResult([left, right]).exit();
      return;
    }
    const diff = diffMatchPatch.diff;
    context.setResult([diff(left, right), 0, TEXT_DIFF]).exit();
  };
  diffFilter4.filterName = "texts";
  var patchFilter4 = function textsPatchFilter(context) {
    if (context.nested) {
      return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
      return;
    }
    const textDiffDelta = nonNestedDelta;
    const patch = getDiffMatchPatch(context.options, true).patch;
    context.setResult(patch(context.left, textDiffDelta[0])).exit();
  };
  patchFilter4.filterName = "texts";
  var textDeltaReverse = function(delta) {
    let i2;
    let l;
    let line;
    let lineTmp;
    let header = null;
    const headerRegex = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
    let lineHeader;
    const lines = delta.split("\n");
    for (i2 = 0, l = lines.length; i2 < l; i2++) {
      line = lines[i2];
      const lineStart = line.slice(0, 1);
      if (lineStart === "@") {
        header = headerRegex.exec(line);
        lineHeader = i2;
        lines[lineHeader] = "@@ -" + header[3] + "," + header[4] + " +" + header[1] + "," + header[2] + " @@";
      } else if (lineStart === "+") {
        lines[i2] = "-" + lines[i2].slice(1);
        if (lines[i2 - 1].slice(0, 1) === "+") {
          lineTmp = lines[i2];
          lines[i2] = lines[i2 - 1];
          lines[i2 - 1] = lineTmp;
        }
      } else if (lineStart === "-") {
        lines[i2] = "+" + lines[i2].slice(1);
      }
    }
    return lines.join("\n");
  };
  var reverseFilter4 = function textsReverseFilter(context) {
    if (context.nested) {
      return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
      return;
    }
    const textDiffDelta = nonNestedDelta;
    context.setResult([textDeltaReverse(textDiffDelta[0]), 0, TEXT_DIFF]).exit();
  };
  reverseFilter4.filterName = "texts";

  // ../../packages/jsondiffpatch/lib/diffpatcher.js
  var DiffPatcher = class {
    constructor(options) {
      this.processor = new processor_default(options);
      this.processor.pipe(new pipe_default("diff").append(collectChildrenDiffFilter, diffFilter, diffFilter3, diffFilter4, objectsDiffFilter, diffFilter2).shouldHaveResult());
      this.processor.pipe(new pipe_default("patch").append(collectChildrenPatchFilter, collectChildrenPatchFilter3, patchFilter, patchFilter4, patchFilter2, patchFilter3).shouldHaveResult());
      this.processor.pipe(new pipe_default("reverse").append(collectChildrenReverseFilter, collectChildrenReverseFilter2, reverseFilter, reverseFilter4, reverseFilter2, reverseFilter3).shouldHaveResult());
    }
    options(options) {
      return this.processor.options(options);
    }
    diff(left, right) {
      return this.processor.process(new diff_default(left, right));
    }
    patch(left, delta) {
      return this.processor.process(new patch_default(left, delta));
    }
    reverse(delta) {
      return this.processor.process(new reverse_default(delta));
    }
    unpatch(right, delta) {
      return this.patch(right, this.reverse(delta));
    }
    clone(value) {
      return clone(value);
    }
  };
  var diffpatcher_default = DiffPatcher;

  // ../../packages/jsondiffpatch/lib/date-reviver.js
  function dateReviver(key, value) {
    let parts;
    if (typeof value === "string") {
      parts = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(value);
      if (parts) {
        return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4], +parts[5], +parts[6], +(parts[7] || 0)));
      }
    }
    return value;
  }

  // ../../packages/jsondiffpatch/lib/with-text-diffs.js
  function create(options) {
    return new diffpatcher_default(Object.assign(Object.assign({}, options), { textDiff: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.textDiff), { diffMatchPatch: import_diff_match_patch.default }) }));
  }

  // ../../packages/jsondiffpatch/lib/formatters/base.js
  var trimUnderscore = (str) => {
    if (str.substring(0, 1) === "_") {
      return str.slice(1);
    }
    return str;
  };
  var arrayKeyToSortNumber = (key) => {
    if (key === "_t") {
      return -1;
    } else {
      if (key.substring(0, 1) === "_") {
        return parseInt(key.slice(1), 10);
      } else {
        return parseInt(key, 10) + 0.1;
      }
    }
  };
  var arrayKeyComparer = (key1, key2) => arrayKeyToSortNumber(key1) - arrayKeyToSortNumber(key2);
  var BaseFormatter = class {
    format(delta, left) {
      const context = {};
      this.prepareContext(context);
      const preparedContext = context;
      this.recurse(preparedContext, delta, left);
      return this.finalize(preparedContext);
    }
    prepareContext(context) {
      context.buffer = [];
      context.out = function(...args) {
        this.buffer.push(...args);
      };
    }
    typeFormattterNotFound(context, deltaType) {
      throw new Error(`cannot format delta type: ${deltaType}`);
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom) {
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    finalize({ buffer }) {
      if (Array.isArray(buffer)) {
        return buffer.join("");
      }
    }
    recurse(context, delta, left, key, leftKey, movedFrom, isLast) {
      const useMoveOriginHere = delta && movedFrom;
      const leftValue = useMoveOriginHere ? movedFrom.value : left;
      if (typeof delta === "undefined" && typeof key === "undefined") {
        return void 0;
      }
      const type = this.getDeltaType(delta, movedFrom);
      const nodeType = type === "node" ? delta._t === "a" ? "array" : "object" : "";
      if (typeof key !== "undefined") {
        this.nodeBegin(context, key, leftKey, type, nodeType, isLast);
      } else {
        this.rootBegin(context, type, nodeType);
      }
      let typeFormattter;
      try {
        typeFormattter = type !== "unknown" ? this[`format_${type}`] : this.typeFormattterNotFound(context, type);
        typeFormattter.call(this, context, delta, leftValue, key, leftKey, movedFrom);
      } catch (err) {
        this.typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom);
        if (typeof console !== "undefined" && console.error) {
          console.error(err.stack);
        }
      }
      if (typeof key !== "undefined") {
        this.nodeEnd(context, key, leftKey, type, nodeType, isLast);
      } else {
        this.rootEnd(context, type, nodeType);
      }
    }
    formatDeltaChildren(context, delta, left) {
      this.forEachDeltaKey(delta, left, (key, leftKey, movedFrom, isLast) => {
        this.recurse(context, delta[key], left ? left[leftKey] : void 0, key, leftKey, movedFrom, isLast);
      });
    }
    forEachDeltaKey(delta, left, fn) {
      const keys = Object.keys(delta);
      const arrayKeys = delta._t === "a";
      const moveDestinations = {};
      let name;
      if (typeof left !== "undefined") {
        for (name in left) {
          if (Object.prototype.hasOwnProperty.call(left, name)) {
            if (typeof delta[name] === "undefined" && (!arrayKeys || typeof delta[`_${name}`] === "undefined")) {
              keys.push(name);
            }
          }
        }
      }
      for (name in delta) {
        if (Object.prototype.hasOwnProperty.call(delta, name)) {
          const value = delta[name];
          if (Array.isArray(value) && value[2] === 3) {
            const movedDelta = value;
            moveDestinations[`${movedDelta[1]}`] = {
              key: name,
              value: left && left[parseInt(name.substring(1), 10)]
            };
            if (this.includeMoveDestinations !== false) {
              if (typeof left === "undefined" && typeof delta[movedDelta[1]] === "undefined") {
                keys.push(movedDelta[1].toString());
              }
            }
          }
        }
      }
      if (arrayKeys) {
        keys.sort(arrayKeyComparer);
      } else {
        keys.sort();
      }
      for (let index = 0, length = keys.length; index < length; index++) {
        const key = keys[index];
        if (arrayKeys && key === "_t") {
          continue;
        }
        const leftKey = arrayKeys ? parseInt(trimUnderscore(key), 10) : key;
        const isLast = index === length - 1;
        fn(key, leftKey, moveDestinations[leftKey], isLast);
      }
    }
    getDeltaType(delta, movedFrom) {
      if (typeof delta === "undefined") {
        if (typeof movedFrom !== "undefined") {
          return "movedestination";
        }
        return "unchanged";
      }
      if (Array.isArray(delta)) {
        if (delta.length === 1) {
          return "added";
        }
        if (delta.length === 2) {
          return "modified";
        }
        if (delta.length === 3 && delta[2] === 0) {
          return "deleted";
        }
        if (delta.length === 3 && delta[2] === 2) {
          return "textdiff";
        }
        if (delta.length === 3 && delta[2] === 3) {
          return "moved";
        }
      } else if (typeof delta === "object") {
        return "node";
      }
      return "unknown";
    }
    parseTextDiff(value) {
      const output = [];
      const lines = value.split("\n@@ ");
      for (let i2 = 0, l = lines.length; i2 < l; i2++) {
        const line = lines[i2];
        const lineOutput = {
          pieces: []
        };
        const location = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(line).slice(1);
        lineOutput.location = {
          line: location[0],
          chr: location[1]
        };
        const pieces = line.split("\n").slice(1);
        for (let pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          const piece = pieces[pieceIndex];
          if (!piece.length) {
            continue;
          }
          const pieceOutput = {
            type: "context"
          };
          if (piece.substring(0, 1) === "+") {
            pieceOutput.type = "added";
          } else if (piece.substring(0, 1) === "-") {
            pieceOutput.type = "deleted";
          }
          pieceOutput.text = piece.slice(1);
          lineOutput.pieces.push(pieceOutput);
        }
        output.push(lineOutput);
      }
      return output;
    }
  };
  var base_default = BaseFormatter;

  // ../../packages/jsondiffpatch/lib/formatters/annotated.js
  var AnnotatedFormatter = class extends base_default {
    constructor() {
      super();
      this.includeMoveDestinations = false;
    }
    prepareContext(context) {
      super.prepareContext(context);
      context.indent = function(levels) {
        this.indentLevel = (this.indentLevel || 0) + (typeof levels === "undefined" ? 1 : levels);
        this.indentPad = new Array(this.indentLevel + 1).join("&nbsp;&nbsp;");
      };
      context.row = (json, htmlNote) => {
        context.out('<tr><td style="white-space: nowrap;"><pre class="jsondiffpatch-annotated-indent" style="display: inline-block">');
        if (context.indentPad != null)
          context.out(context.indentPad);
        context.out('</pre><pre style="display: inline-block">');
        context.out(json);
        context.out('</pre></td><td class="jsondiffpatch-delta-note"><div>');
        if (htmlNote != null)
          context.out(htmlNote);
        context.out("</div></td></tr>");
      };
    }
    typeFormattterErrorFormatter(context, err) {
      context.row("", `<pre class="jsondiffpatch-error">${err}</pre>`);
    }
    formatTextDiffString(context, value) {
      const lines = this.parseTextDiff(value);
      context.out('<ul class="jsondiffpatch-textdiff">');
      for (let i2 = 0, l = lines.length; i2 < l; i2++) {
        const line = lines[i2];
        context.out(`<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">${line.location.line}</span><span class="jsondiffpatch-textdiff-char">${line.location.chr}</span></div><div class="jsondiffpatch-textdiff-line">`);
        const pieces = line.pieces;
        for (let pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          const piece = pieces[pieceIndex];
          context.out(`<span class="jsondiffpatch-textdiff-${piece.type}">${piece.text}</span>`);
        }
        context.out("</div></li>");
      }
      context.out("</ul>");
    }
    rootBegin(context, type, nodeType) {
      context.out('<table class="jsondiffpatch-annotated-delta">');
      if (type === "node") {
        context.row("{");
        context.indent();
      }
      if (nodeType === "array") {
        context.row('"_t": "a",', "Array delta (member names indicate array indices)");
      }
    }
    rootEnd(context, type) {
      if (type === "node") {
        context.indent(-1);
        context.row("}");
      }
      context.out("</table>");
    }
    nodeBegin(context, key, leftKey, type, nodeType) {
      context.row(`&quot;${key}&quot;: {`);
      if (type === "node") {
        context.indent();
      }
      if (nodeType === "array") {
        context.row('"_t": "a",', "Array delta (member names indicate array indices)");
      }
    }
    nodeEnd(context, key, leftKey, type, nodeType, isLast) {
      if (type === "node") {
        context.indent(-1);
      }
      context.row(`}${isLast ? "" : ","}`);
    }
    format_unchanged() {
    }
    format_movedestination() {
    }
    format_node(context, delta, left) {
      this.formatDeltaChildren(context, delta, left);
    }
    format_added(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
    format_modified(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
    format_deleted(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
    format_moved(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
    format_textdiff(context, delta, left, key, leftKey) {
      formatAnyChange.call(this, context, delta, left, key, leftKey);
    }
  };
  var wrapPropertyName = (name) => `<pre style="display:inline-block">&quot;${name}&quot;</pre>`;
  var deltaAnnotations = {
    added(delta, left, key, leftKey) {
      const formatLegend = " <pre>([newValue])</pre>";
      if (typeof leftKey === "undefined") {
        return `new value${formatLegend}`;
      }
      if (typeof leftKey === "number") {
        return `insert at index ${leftKey}${formatLegend}`;
      }
      return `add property ${wrapPropertyName(leftKey)}${formatLegend}`;
    },
    modified(delta, left, key, leftKey) {
      const formatLegend = " <pre>([previousValue, newValue])</pre>";
      if (typeof leftKey === "undefined") {
        return `modify value${formatLegend}`;
      }
      if (typeof leftKey === "number") {
        return `modify at index ${leftKey}${formatLegend}`;
      }
      return `modify property ${wrapPropertyName(leftKey)}${formatLegend}`;
    },
    deleted(delta, left, key, leftKey) {
      const formatLegend = " <pre>([previousValue, 0, 0])</pre>";
      if (typeof leftKey === "undefined") {
        return `delete value${formatLegend}`;
      }
      if (typeof leftKey === "number") {
        return `remove index ${leftKey}${formatLegend}`;
      }
      return `delete property ${wrapPropertyName(leftKey)}${formatLegend}`;
    },
    moved(delta, left, key, leftKey) {
      return `move from <span title="(position to remove at original state)">index ${leftKey}</span> to <span title="(position to insert at final state)">index ${delta[1]}</span>`;
    },
    textdiff(delta, left, key, leftKey) {
      const location = typeof leftKey === "undefined" ? "" : typeof leftKey === "number" ? ` at index ${leftKey}` : ` at property ${wrapPropertyName(leftKey)}`;
      return `text diff${location}, format is <a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>`;
    }
  };
  var formatAnyChange = function(context, delta, left, key, leftKey) {
    const deltaType = this.getDeltaType(delta);
    const annotator = deltaAnnotations[deltaType];
    const htmlNote = annotator && annotator(delta, left, key, leftKey);
    let json = JSON.stringify(delta, null, 2);
    if (deltaType === "textdiff") {
      json = json.split("\\n").join('\\n"+\n   "');
    }
    context.indent();
    context.row(json, htmlNote);
    context.indent(-1);
  };
  var defaultInstance;
  function format(delta, left) {
    if (!defaultInstance) {
      defaultInstance = new AnnotatedFormatter();
    }
    return defaultInstance.format(delta, left);
  }

  // ../../packages/jsondiffpatch/lib/formatters/html.js
  var HtmlFormatter = class extends base_default {
    typeFormattterErrorFormatter(context, err) {
      context.out(`<pre class="jsondiffpatch-error">${err}</pre>`);
    }
    formatValue(context, value) {
      context.out(`<pre>${htmlEscape(JSON.stringify(value, null, 2))}</pre>`);
    }
    formatTextDiffString(context, value) {
      const lines = this.parseTextDiff(value);
      context.out('<ul class="jsondiffpatch-textdiff">');
      for (let i2 = 0, l = lines.length; i2 < l; i2++) {
        const line = lines[i2];
        context.out(`<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">${line.location.line}</span><span class="jsondiffpatch-textdiff-char">${line.location.chr}</span></div><div class="jsondiffpatch-textdiff-line">`);
        const pieces = line.pieces;
        for (let pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          const piece = pieces[pieceIndex];
          context.out(`<span class="jsondiffpatch-textdiff-${piece.type}">${htmlEscape(decodeURI(piece.text))}</span>`);
        }
        context.out("</div></li>");
      }
      context.out("</ul>");
    }
    rootBegin(context, type, nodeType) {
      const nodeClass = `jsondiffpatch-${type}${nodeType ? ` jsondiffpatch-child-node-type-${nodeType}` : ""}`;
      context.out(`<div class="jsondiffpatch-delta ${nodeClass}">`);
    }
    rootEnd(context) {
      context.out(`</div>${context.hasArrows ? `<script type="text/javascript">setTimeout(${adjustArrows.toString()},10);<\/script>` : ""}`);
    }
    nodeBegin(context, key, leftKey, type, nodeType) {
      const nodeClass = `jsondiffpatch-${type}${nodeType ? ` jsondiffpatch-child-node-type-${nodeType}` : ""}`;
      context.out(`<li class="${nodeClass}" data-key="${leftKey}"><div class="jsondiffpatch-property-name">${leftKey}</div>`);
    }
    nodeEnd(context) {
      context.out("</li>");
    }
    format_unchanged(context, delta, left) {
      if (typeof left === "undefined") {
        return;
      }
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, left);
      context.out("</div>");
    }
    format_movedestination(context, delta, left) {
      if (typeof left === "undefined") {
        return;
      }
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, left);
      context.out("</div>");
    }
    format_node(context, delta, left) {
      const nodeType = delta._t === "a" ? "array" : "object";
      context.out(`<ul class="jsondiffpatch-node jsondiffpatch-node-type-${nodeType}">`);
      this.formatDeltaChildren(context, delta, left);
      context.out("</ul>");
    }
    format_added(context, delta) {
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, delta[0]);
      context.out("</div>");
    }
    format_modified(context, delta) {
      context.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">');
      this.formatValue(context, delta[0]);
      context.out('</div><div class="jsondiffpatch-value jsondiffpatch-right-value">');
      this.formatValue(context, delta[1]);
      context.out("</div>");
    }
    format_deleted(context, delta) {
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, delta[0]);
      context.out("</div>");
    }
    format_moved(context, delta) {
      context.out('<div class="jsondiffpatch-value">');
      this.formatValue(context, delta[0]);
      context.out(`</div><div class="jsondiffpatch-moved-destination">${delta[1]}</div>`);
      context.out(
        /* jshint multistr: true */
        `<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">
          <svg width="30" height="60" style="position: absolute; display: none;">
          <defs>
              <marker id="markerArrow" markerWidth="8" markerHeight="8"
                 refx="2" refy="4"
                     orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />
              </marker>
          </defs>
          <path d="M30,0 Q-10,25 26,50"
            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"
          ></path>
          </svg>
      </div>`
      );
      context.hasArrows = true;
    }
    format_textdiff(context, delta) {
      context.out('<div class="jsondiffpatch-value">');
      this.formatTextDiffString(context, delta[0]);
      context.out("</div>");
    }
  };
  function htmlEscape(text) {
    let html = text;
    const replacements = [
      [/&/g, "&amp;"],
      [/</g, "&lt;"],
      [/>/g, "&gt;"],
      [/'/g, "&apos;"],
      [/"/g, "&quot;"]
    ];
    for (let i2 = 0; i2 < replacements.length; i2++) {
      html = html.replace(replacements[i2][0], replacements[i2][1]);
    }
    return html;
  }
  var adjustArrows = function jsondiffpatchHtmlFormatterAdjustArrows(nodeArg) {
    const node = nodeArg || document;
    const getElementText = ({ textContent, innerText }) => textContent || innerText;
    const eachByQuery = (el2, query, fn) => {
      const elems = el2.querySelectorAll(query);
      for (let i2 = 0, l = elems.length; i2 < l; i2++) {
        fn(elems[i2]);
      }
    };
    const eachChildren = ({ children }, fn) => {
      for (let i2 = 0, l = children.length; i2 < l; i2++) {
        fn(children[i2], i2);
      }
    };
    eachByQuery(node, ".jsondiffpatch-arrow", ({ parentNode, children, style }) => {
      const arrowParent = parentNode;
      const svg = children[0];
      const path = svg.children[1];
      svg.style.display = "none";
      const destination = getElementText(arrowParent.querySelector(".jsondiffpatch-moved-destination"));
      const container = arrowParent.parentNode;
      let destinationElem;
      eachChildren(container, (child) => {
        if (child.getAttribute("data-key") === destination) {
          destinationElem = child;
        }
      });
      if (!destinationElem) {
        return;
      }
      try {
        const distance = destinationElem.offsetTop - arrowParent.offsetTop;
        svg.setAttribute("height", `${Math.abs(distance) + 6}`);
        style.top = `${-8 + (distance > 0 ? 0 : distance)}px`;
        const curve = distance > 0 ? `M30,0 Q-10,${Math.round(distance / 2)} 26,${distance - 4}` : `M30,${-distance} Q-10,${Math.round(-distance / 2)} 26,4`;
        path.setAttribute("d", curve);
        svg.style.display = "";
      } catch (err) {
      }
    });
  };
  var showUnchanged = (show, node, delay) => {
    const el2 = node || document.body;
    const prefix = "jsondiffpatch-unchanged-";
    const classes = {
      showing: `${prefix}showing`,
      hiding: `${prefix}hiding`,
      visible: `${prefix}visible`,
      hidden: `${prefix}hidden`
    };
    const list = el2.classList;
    if (!list) {
      return;
    }
    if (!delay) {
      list.remove(classes.showing);
      list.remove(classes.hiding);
      list.remove(classes.visible);
      list.remove(classes.hidden);
      if (show === false) {
        list.add(classes.hidden);
      }
      return;
    }
    if (show === false) {
      list.remove(classes.showing);
      list.add(classes.visible);
      setTimeout(() => {
        list.add(classes.hiding);
      }, 10);
    } else {
      list.remove(classes.hiding);
      list.add(classes.showing);
      list.remove(classes.hidden);
    }
    const intervalId = setInterval(() => {
      adjustArrows(el2);
    }, 100);
    setTimeout(() => {
      list.remove(classes.showing);
      list.remove(classes.hiding);
      if (show === false) {
        list.add(classes.hidden);
        list.remove(classes.visible);
      } else {
        list.add(classes.visible);
        list.remove(classes.hidden);
      }
      setTimeout(() => {
        list.remove(classes.visible);
        clearInterval(intervalId);
      }, delay + 400);
    }, delay);
  };
  var hideUnchanged = (node, delay) => showUnchanged(false, node, delay);
  var defaultInstance2;
  function format2(delta, left) {
    if (!defaultInstance2) {
      defaultInstance2 = new HtmlFormatter();
    }
    return defaultInstance2.format(delta, left);
  }

  // demo.ts
  var getExampleJson = function() {
    const data = {
      name: "South America",
      summary: "South America (Spanish: Am\xE9rica del Sur, Sudam\xE9rica or  \nSuram\xE9rica; Portuguese: Am\xE9rica do Sul; Quechua and Aymara:  \nUrin Awya Yala; Guarani: \xD1embyam\xE9rika; Dutch: Zuid-Amerika;  \nFrench: Am\xE9rique du Sud) is a continent situated in the  \nWestern Hemisphere, mostly in the Southern Hemisphere, with  \na relatively small portion in the Northern Hemisphere.  \nThe continent is also considered a subcontinent of the  \nAmericas.[2][3] It is bordered on the west by the Pacific  \nOcean and on the north and east by the Atlantic Ocean;  \nNorth America and the Caribbean Sea lie to the northwest.  \nIt includes twelve countries: Argentina, Bolivia, Brazil,  \nChile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname,  \nUruguay, and Venezuela. The South American nations that  \nborder the Caribbean Sea\u2014including Colombia, Venezuela,  \nGuyana, Suriname, as well as French Guiana, which is an  \noverseas region of France\u2014are also known as Caribbean South  \nAmerica. South America has an area of 17,840,000 square  \nkilometers (6,890,000 sq mi). Its population as of 2005  \nhas been estimated at more than 371,090,000. South America  \nranks fourth in area (after Asia, Africa, and North America)  \nand fifth in population (after Asia, Africa, Europe, and  \nNorth America). The word America was coined in 1507 by  \ncartographers Martin Waldseem\xFCller and Matthias Ringmann,  \nafter Amerigo Vespucci, who was the first European to  \nsuggest that the lands newly discovered by Europeans were  \nnot India, but a New World unknown to Europeans.",
      surface: 1784e4,
      timezone: [-4, -2],
      demographics: {
        population: 385742554,
        largestCities: [
          "S\xE3o Paulo",
          "Buenos Aires",
          "Rio de Janeiro",
          "Lima",
          "Bogot\xE1"
        ]
      },
      languages: [
        "spanish",
        "portuguese",
        "english",
        "dutch",
        "french",
        "quechua",
        "guaran\xED",
        "aimara",
        "mapudungun"
      ],
      countries: [
        {
          name: "Argentina",
          capital: "Buenos Aires",
          independence: new Date(1816, 6, 9),
          unasur: true
        },
        {
          name: "Bolivia",
          capital: "La Paz",
          independence: new Date(1825, 7, 6),
          unasur: true
        },
        {
          name: "Brazil",
          capital: "Brasilia",
          independence: new Date(1822, 8, 7),
          unasur: true
        },
        {
          name: "Chile",
          capital: "Santiago",
          independence: new Date(1818, 1, 12),
          unasur: true
        },
        {
          name: "Colombia",
          capital: "Bogot\xE1",
          independence: new Date(1810, 6, 20),
          unasur: true
        },
        {
          name: "Ecuador",
          capital: "Quito",
          independence: new Date(1809, 7, 10),
          unasur: true
        },
        {
          name: "Guyana",
          capital: "Georgetown",
          independence: new Date(1966, 4, 26),
          unasur: true
        },
        {
          name: "Paraguay",
          capital: "Asunci\xF3n",
          independence: new Date(1811, 4, 14),
          unasur: true
        },
        {
          name: "Peru",
          capital: "Lima",
          independence: new Date(1821, 6, 28),
          unasur: true
        },
        {
          name: "Suriname",
          capital: "Paramaribo",
          independence: new Date(1975, 10, 25),
          unasur: true
        },
        {
          name: "Uruguay",
          capital: "Montevideo",
          independence: new Date(1825, 7, 25),
          unasur: true
        },
        {
          name: "Venezuela",
          capital: "Caracas",
          independence: new Date(1811, 6, 5),
          unasur: true
        }
      ]
    };
    const json = [JSON.stringify(data, null, 2)];
    data.summary = data.summary.replace("Brazil", "Brasil").replace("also known as", "a.k.a.");
    data.languages[2] = "ingl\xE9s";
    data.countries.pop();
    data.countries.pop();
    data.countries[0].capital = "Rawson";
    data.countries.push({
      name: "Ant\xE1rtida",
      unasur: false
    });
    data.countries[4].population = 42888594;
    data.countries.splice(11, 0, data.countries.splice(4, 1)[0]);
    data.countries.splice(2, 0, data.countries.splice(7, 1)[0]);
    delete data.surface;
    data.spanishName = "Sudam\xE9rica";
    data.demographics.population += 2342;
    json.push(JSON.stringify(data, null, 2));
    return json;
  };
  var instance = create({
    objectHash: function(obj, index) {
      const objRecord = obj;
      if (typeof objRecord._id !== "undefined") {
        return objRecord._id;
      }
      if (typeof objRecord.id !== "undefined") {
        return objRecord.id;
      }
      if (typeof objRecord.name !== "undefined") {
        return objRecord.name;
      }
      return "$$index:" + index;
    }
  });
  var dom = {
    addClass: function(el2, className) {
      if (el2.classList) {
        el2.classList.add(className);
      } else {
        el2.className += " " + className;
      }
    },
    removeClass: function(el2, className) {
      if (el2.classList) {
        el2.classList.remove(className);
      } else {
        el2.className = el2.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
      }
    },
    text: function(el2, text) {
      if (typeof el2.textContent !== "undefined") {
        if (typeof text === "undefined") {
          return el2.textContent;
        }
        el2.textContent = text;
      } else {
        if (typeof text === "undefined") {
          return el2.innerText;
        }
        el2.innerText = text;
      }
    },
    getJson: function(url, callback) {
      let request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.onreadystatechange = function() {
        if (this.readyState === 4) {
          let data;
          try {
            data = JSON.parse(this.responseText, dateReviver);
          } catch (parseError) {
            return callback("parse error: " + parseError);
          }
          if (this.status >= 200 && this.status < 400) {
            callback(null, data);
          } else {
            callback(new Error("request failed"), data);
          }
        }
      };
      request.send();
      request = null;
    },
    runScriptTags: function(el) {
      const scripts = el.querySelectorAll("script");
      for (let i = 0; i < scripts.length; i++) {
        const s = scripts[i];
        eval(s.innerHTML);
      }
    }
  };
  var trim = function(str) {
    return str.replace(/^\s+|\s+$/g, "");
  };
  var JsonArea = class {
    constructor(element) {
      this.error = (err) => {
        const errorElement = this.container.querySelector(".error-message");
        if (!err) {
          dom.removeClass(this.container, "json-error");
          errorElement.innerHTML = "";
          return;
        }
        errorElement.innerHTML = err + "";
        dom.addClass(this.container, "json-error");
      };
      this.getValue = () => {
        if (!this.editor) {
          return this.element.value;
        }
        return this.editor.getValue();
      };
      this.parse = () => {
        const txt = trim(this.getValue());
        try {
          this.error(false);
          if (/^\d+(.\d+)?(e[+-]?\d+)?$/i.test(txt) || /^(true|false)$/.test(txt) || /^["].*["]$/.test(txt) || /^[{[](.|\n)*[}\]]$/.test(txt)) {
            return JSON.parse(txt, dateReviver);
          }
          return this.getValue();
        } catch (err) {
          this.error(err);
          throw err;
        }
      };
      this.setValue = (value) => {
        if (!this.editor) {
          this.element.value = value;
          return;
        }
        this.editor.setValue(value);
      };
      this.prettyfy = () => {
        const value = this.parse();
        const prettyJson = typeof value === "string" ? value : JSON.stringify(value, null, 2);
        this.setValue(prettyJson);
      };
      /* global CodeMirror */
      this.makeEditor = (readOnly) => {
        if (typeof CodeMirror === "undefined") {
          return;
        }
        this.editor = CodeMirror.fromTextArea(this.element, {
          mode: "javascript",
          json: true,
          readOnly
        });
        if (!readOnly) {
          this.editor.on("change", compare2);
        }
      };
      this.element = element;
      this.container = element.parentNode;
      const self = this;
      const prettifyButton = this.container.querySelector(
        ".prettyfy"
      );
      if (prettifyButton) {
        prettifyButton.addEventListener("click", function() {
          self.prettyfy();
        });
      }
    }
  };
  var areas = {
    left: new JsonArea(
      document.getElementById("json-input-left")
    ),
    right: new JsonArea(
      document.getElementById("json-input-right")
    ),
    delta: new JsonArea(
      document.getElementById("json-delta")
    )
  };
  var compare2 = function() {
    let left, right, error;
    document.getElementById("results").style.display = "none";
    try {
      left = areas.left.parse();
    } catch (err) {
      error = err;
    }
    try {
      right = areas.right.parse();
    } catch (err) {
      error = err;
    }
    areas.delta.error(false);
    if (error) {
      areas.delta.setValue("");
      return;
    }
    const selectedType = getSelectedDeltaType();
    const visualdiff = document.getElementById("visualdiff");
    const annotateddiff = document.getElementById("annotateddiff");
    const jsondifflength = document.getElementById("jsondifflength");
    try {
      const delta = instance.diff(left, right);
      if (typeof delta === "undefined") {
        switch (selectedType) {
          case "visual":
            visualdiff.innerHTML = "no diff";
            break;
          case "annotated":
            annotateddiff.innerHTML = "no diff";
            break;
          case "json":
            areas.delta.setValue("no diff");
            jsondifflength.innerHTML = "0";
            break;
        }
      } else {
        switch (selectedType) {
          case "visual":
            visualdiff.innerHTML = format2(delta, left);
            if (!document.getElementById("showunchanged").checked) {
              hideUnchanged();
            }
            dom.runScriptTags(visualdiff);
            break;
          case "annotated":
            annotateddiff.innerHTML = format(delta);
            break;
          case "json":
            areas.delta.setValue(JSON.stringify(delta, null, 2));
            jsondifflength.innerHTML = Math.round(JSON.stringify(delta).length / 102.4) / 10 + "";
            break;
        }
      }
    } catch (err) {
      jsondifflength.innerHTML = "0";
      visualdiff.innerHTML = "";
      annotateddiff.innerHTML = "";
      areas.delta.setValue("");
      areas.delta.error(err);
      if (typeof console !== "undefined" && console.error) {
        console.error(err);
        console.error(err.stack);
      }
    }
    document.getElementById("results").style.display = "";
  };
  areas.left.makeEditor();
  areas.right.makeEditor();
  areas.left.element.addEventListener("change", compare2);
  areas.right.element.addEventListener("change", compare2);
  areas.left.element.addEventListener("keyup", compare2);
  areas.right.element.addEventListener("keyup", compare2);
  var getSelectedDeltaType = function() {
    if (document.getElementById("show-delta-type-visual").checked) {
      return "visual";
    }
    if (document.getElementById("show-delta-type-annotated").checked) {
      return "annotated";
    }
    if (document.getElementById("show-delta-type-json").checked) {
      return "json";
    }
  };
  var showSelectedDeltaType = function() {
    const type = getSelectedDeltaType();
    document.getElementById("delta-panel-visual").style.display = type === "visual" ? "" : "none";
    document.getElementById("delta-panel-annotated").style.display = type === "annotated" ? "" : "none";
    document.getElementById("delta-panel-json").style.display = type === "json" ? "" : "none";
    compare2();
  };
  document.getElementById("show-delta-type-visual").addEventListener("click", showSelectedDeltaType);
  document.getElementById("show-delta-type-annotated").addEventListener("click", showSelectedDeltaType);
  document.getElementById("show-delta-type-json").addEventListener("click", showSelectedDeltaType);
  document.getElementById("swap").addEventListener("click", function() {
    const leftValue = areas.left.getValue();
    areas.left.setValue(areas.right.getValue());
    areas.right.setValue(leftValue);
    compare2();
  });
  document.getElementById("clear").addEventListener("click", function() {
    areas.left.setValue("");
    areas.right.setValue("");
    compare2();
  });
  document.getElementById("showunchanged").addEventListener("change", function() {
    showUnchanged(
      document.getElementById("showunchanged").checked,
      null,
      800
    );
  });
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(compare2);
  });
  var load = {
    data: function(dataArg) {
      const data = dataArg || {};
      dom.text(document.getElementById("description"), data.description || "");
      if (data.url && trim(data.url).substring(0, 10) !== "javascript") {
        document.getElementById("external-link").setAttribute("href", data.url);
        document.getElementById("external-link").style.display = "";
      } else {
        document.getElementById("external-link").style.display = "none";
      }
      const leftValue = data.left ? data.left.content || data.left : "";
      areas.left.setValue(leftValue);
      const rightValue = data.right ? data.right.content || data.right : "";
      areas.right.setValue(rightValue);
      dom.text(
        document.getElementById("json-panel-left").querySelector("h2"),
        data.left && data.left.name || "left.json"
      );
      dom.text(
        document.getElementById("json-panel-right").querySelector("h2"),
        data.right && data.right.name || "right.json"
      );
      document.getElementById("json-panel-left").querySelector("h2").setAttribute(
        "title",
        data.left && data.left.fullname || ""
      );
      document.getElementById("json-panel-right").querySelector("h2").setAttribute(
        "title",
        data.right && data.right.fullname || ""
      );
      if (data.error) {
        areas.left.setValue("ERROR LOADING: " + data.error);
        areas.right.setValue("");
      }
    },
    gist: function(id) {
      dom.getJson("https://api.github.com/gists/" + id, function(error, data) {
        if (error) {
          const gistError = data;
          const message = error + (gistError && gistError.message ? gistError.message : "");
          load.data({
            error: message
          });
          return;
        }
        const gistData = data;
        const filenames = [];
        for (const filename in gistData.files) {
          const file = gistData.files[filename];
          if (file.language === "JSON") {
            filenames.push(filename);
          }
        }
        filenames.sort();
        const files = [
          gistData.files[filenames[0]],
          gistData.files[filenames[1]]
        ];
        load.data({
          url: gistData.html_url,
          description: gistData.description,
          left: {
            name: files[0].filename,
            content: files[0].content
          },
          right: {
            name: files[1].filename,
            content: files[1].content
          }
        });
      });
    },
    leftright: function(descriptionArg, leftValueArg, rightValueArg) {
      try {
        const description = decodeURIComponent(descriptionArg || "");
        const leftValue = decodeURIComponent(leftValueArg);
        const rightValue = decodeURIComponent(rightValueArg);
        const urlmatch = /https?:\/\/.*\/([^/]+\.json)(?:[?#].*)?/;
        const dataLoaded = {
          description,
          left: {},
          right: {}
        };
        const loadIfReady = function() {
          if (typeof dataLoaded.left.content !== "undefined" && typeof dataLoaded.right.content !== "undefined") {
            load.data(dataLoaded);
          }
        };
        if (urlmatch.test(leftValue)) {
          dataLoaded.left.name = urlmatch.exec(leftValue)[1];
          dataLoaded.left.fullname = leftValue;
          dom.getJson(leftValue, function(error, data) {
            if (error) {
              dataLoaded.left.content = error + (data && data.message ? data.message : "");
            } else {
              dataLoaded.left.content = JSON.stringify(data, null, 2);
            }
            loadIfReady();
          });
        } else {
          dataLoaded.left.content = leftValue;
        }
        if (urlmatch.test(rightValue)) {
          dataLoaded.right.name = urlmatch.exec(rightValue)[1];
          dataLoaded.right.fullname = rightValue;
          dom.getJson(rightValue, function(error, data) {
            if (error) {
              dataLoaded.right.content = error + (data && data.message ? data.message : "");
            } else {
              dataLoaded.right.content = JSON.stringify(data, null, 2);
            }
            loadIfReady();
          });
        } else {
          dataLoaded.right.content = rightValue;
        }
        loadIfReady();
      } catch (err) {
        load.data({
          error: err
        });
      }
    },
    key: function(key) {
      const matchers = {
        gist: /^(?:https?:\/\/)?(?:gist\.github\.com\/)?(?:[\w0-9\-a-f]+\/)?([0-9a-f]+)$/i,
        leftright: /^(?:desc=(.*)?&)?left=(.*)&right=(.*)&?$/i
      };
      for (const loader in matchers) {
        const match = matchers[loader].exec(key);
        if (match) {
          return load[loader].apply(load, match.slice(1));
        }
      }
      load.data({
        error: "unsupported source: " + key
      });
    }
  };
  var urlQuery = /^[^?]*\?([^#]+)/.exec(document.location.href);
  if (urlQuery) {
    load.key(urlQuery[1]);
  } else {
    const exampleJson = getExampleJson();
    load.data({
      left: exampleJson[0],
      right: exampleJson[1]
    });
  }
  document.getElementById("examples").addEventListener(
    "change",
    function() {
      const example = trim(this.value);
      switch (example) {
        case "text": {
          const exampleJson = getExampleJson();
          load.data({
            left: {
              name: "left.txt",
              content: JSON.parse(exampleJson[0]).summary
            },
            right: {
              name: "right.txt",
              content: JSON.parse(exampleJson[1]).summary
            }
          });
          break;
        }
        case "gist":
          document.location = "?benjamine/9188826";
          break;
        case "moving":
          document.location = "?desc=moving%20around&left=" + encodeURIComponent(
            JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
          ) + "&right=" + encodeURIComponent(
            JSON.stringify([10, 0, 1, 7, 2, 4, 5, 6, 88, 9, 3])
          );
          break;
        case "query":
          document.location = "?desc=encoded%20in%20url&left=" + /* jshint quotmark: false */
          encodeURIComponent(
            JSON.stringify({
              "don't": "abuse",
              with: ["large", "urls"]
            })
          ) + "&right=" + encodeURIComponent(
            JSON.stringify({
              "don't": "use",
              with: [">", 2, "KB urls"]
            })
          );
          break;
        case "urls":
          document.location = "?desc=http%20raw%20file%20urls&left=" + encodeURIComponent(
            "https://rawgithub.com/benjamine/JsonDiffPatch/c83e942971c627f61ef874df3cfdd50a95f1c5a2/package.json"
          ) + "&right=" + encodeURIComponent(
            "https://rawgithub.com/benjamine/JsonDiffPatch/master/package.json"
          );
          break;
        default:
          document.location = "?";
          break;
      }
    }
  );
})();
