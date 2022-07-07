"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like() {
        this._initialCount = 0;
        this._likeButton = false;
    }
    Like.prototype.clickLike = function () {
        if (this._likeButton && this._initialCount > 0) {
            this._initialCount--;
        }
        else if (!this._likeButton) {
            this._initialCount++;
        }
        this._likeButton = !this._likeButton;
    };
    Object.defineProperty(Like.prototype, "initialCount", {
        get: function () {
            return this._initialCount;
        },
        set: function (_initialCount) {
            if (_initialCount >= 0)
                this._initialCount = _initialCount;
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
