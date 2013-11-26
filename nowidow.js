/* Author: Devin Barth
 * Github: /MrDevinB
 * twitter: @MrDevinB
 */

(function(_) {
  _.fn.nowidow = function() {
    return this.html(function() {
      return _(this).html().replace(/\s([^\s]*)(\s+)?$/, '&nbsp;$1');
    });
  }
  _(document).ready(function(){
    _('.nowidow').nowidow();
  })
})(jQuery);
