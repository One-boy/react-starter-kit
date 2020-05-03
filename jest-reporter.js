/*
 * @Author: huyu
 * @Date: 2020-04-30 16:47:43
 * @Last Modified by: huyu
 * @Last Modified time: 2020-04-30 18:58:23
 */

// jest测试报告结果处理
const { dateFormat } = require('./scripts/util')
const fs = require('fs')

class JestReporter {

  constructor(globalConfig, options) {
    this._options = options
  }

  // 测试结束
  onRunComplete(contexts, results) {
    let txt = this._createReporterText(results)
    this._saveLog(txt)
    console.log(results.testResults[0].perfStats)
  }

  // 保存日志
  _saveLog(txt) {
    if (txt && txt.length > 0) {
      if (fs.existsSync(this._options.LOG_DIR)) {
        let filename = `test_ui_log_${dateFormat(new Date(), 'yyyyMMddhhmmss')}`
        fs.writeFileSync(`${this._options.LOG_DIR}/${filename}.md`, txt)
      }
    }
  }

  // 生成测试报告
  _createReporterText(results) {
    let text = ''

    const _createDetail2 = (testResults = []) => {
      let txt = ''
      testResults.forEach((t, i) => {
        txt += `
###### ${i + 1}、${t.title}
- 测试状态：**${t.status}**
          `
        if (t.status === 'failed') {
          txt += `
- 错误信息：
\`\`\`
${t.failureMessages}
\`\`\`
          `
        }
      })
      return txt
    }

    const _createDetail = (testResults = []) => {
      let txt = ''
      testResults.forEach((t, i) => {
        txt += `
#### ${i + 1}、测试用例文件：${t.testFilePath}
- 测试数 通过：**${t.numPassingTests}** 失败：**${t.numFailingTests}**
- 耗时：**${(t.perfStats.end - t.perfStats.start) / 1000}s**
${_createDetail2(t.testResults)}
          `
      })
      return txt
    }

    if (typeof results === 'object') {
      text = `
### 测试时间
${dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')}
### 测试组
总计：**${results.numTotalTestSuites}**  通过：**${results.numPassedTestSuites}**  失败：**${results.numTotalTestSuites - results.numPassedTestSuites}**
### 测试数
总计：**${results.numTotalTests}**  通过：**${results.numPassedTests}**  失败：**${results.numTotalTests - results.numPassedTests}**

### 测试详情
${_createDetail(results.testResults)}
        `
    }

    return text
  }

}


module.exports = JestReporter
