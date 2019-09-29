/*
 * @Author: Murphy Chu - shmilyclxy@163.com
 * @Description: 深拷贝
 * @Date: 2019-09-29 09:52:31
 * @Last Modified by: Murphy Chu
 * @Last Modified time: 2019-09-29 10:35:43
 */

function deepClone (o) {
  const res = Object.prototype.toString.call(o) === '[object Array]' ? [] : {}
  for (let key in o) {
    if (typeof o[key] === 'object' && o[key] !== null) {
      res[key] = deepClone(o[key])
    } else {
      res[key] = o[key]
    }
  }
  return res
}
