const _ = require('lodash')

// 默认配置
const defaultOptions = {
}

/**
 *
 * vayne xx 插件 默认模板 请跟进实际情况自行修改
 * @param {any} config vayne 配置
 * @param {any} log  vayne log
 * @param {any} utils vayne 工具库
 * @returns webpack xx plugins
 */
class VaynePluginXX {
  constructor(config, log, utils) {
    log.debug('开始解析 vayne stylelint 插件')
    let styleLint = config.styleLint || {}
    let opts = _.defaults(defaultOptions, styleLint)
    log.debug(opts)
    this.name = 'VaynePluginXX'

    let result = {
      loaders: [],
      // 这里的插件的会加在通用 插件最后追加
      plugins: [
      ]
    }
    // 生产环境 才会具有此插件
    if (utils.isProduction()) {
      // 最前的插件 beforePlugins  afterPlugins 的会在 开发环境 和 生产环境追加 不会作用域 通用插件
      result.beforePlugins = []
      // 最后的插件
      result.afterPlugins = []
    }

    return result
  }
}

module.exports = VaynePluginXX
