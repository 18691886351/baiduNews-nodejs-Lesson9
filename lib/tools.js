/*对字符串进行转义*/
module.exports = {
    escapeHtml: function(string) {
        var entityMap = {
            "<": "&lt;",
            ">": "&gt;"
        };
        return String(string).replace(/[<>]/g, function(s) {
            return entityMap[s];
        });
    },
    escapeHtml_encode: function(string) {
        var entityMap = {
            "&lt;": "<",
            "&gt;": ">"
        };
        return String(string).replace(/(&lt;|&gt;)/g, function(s) {
            return entityMap[s];
        });
    }
}
