/*
 * @Author: Murphy Chu - shmilyclxy@163.com
 * @Description: 判断浏览器类型
 * @Date: 2019-09-29 09:48:09
 * @Last Modified by: Murphy Chu
 * @Last Modified time: 2019-09-29 09:49:16
 */
BrowserInfo = {
  isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
  isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
  isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)),
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
}
