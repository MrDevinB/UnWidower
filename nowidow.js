/* Author: Devin Barth
 * Github: /MrDevinB
 * twitter: @MrDevinB
 */

(function($) {
  $.fn.nowidow = function() {
    return this.html(function() {
      return $(this).html().replace(/\s([^\s]*)(\s+)?$/, '&nbsp;$1');
    });
  }
})(jQuery);
