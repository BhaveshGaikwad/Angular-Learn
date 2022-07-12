"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_initialCount, _likeButton) {
        this._initialCount = _initialCount;
        this._likeButton = _likeButton;
    }
    Like.prototype.clickLike = function () {
        this._initialCount += (this._likeButton && this._initialCount > 0) ? -1 : (!this._likeButton) ? 1 : 0;
        this._likeButton = !this._likeButton;
    };
    Object.defineProperty(Like.prototype, "initialCount", {
        get: function () {
            return this._initialCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "likeButton", {
        get: function () {
            return this._likeButton;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
