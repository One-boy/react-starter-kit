// 登录页测试
import { TIMEOUT, LOG_DIR, URL_PREFIX } from './base'

describe('Login', () => {
  beforeAll(async () => {
    await page.goto(`${URL_PREFIX}/login`, { waitUntil: 'networkidle2' })
  })

  it('should login with failure', async () => {
    await page.waitForSelector('#username')
    await page.type('#username', 'admin')
    await page.type('#password', '')
    await page.click('button[type="submit"]')
    await page.waitForSelector('.ant-form-item-explain-error') // should display error
  })

  it('should login successfully', async () => {
    await page.waitForSelector('#username')
    await page.type('#username', 'admin')
    await page.type('#password', '1')
    await page.click('button[type="submit"]')
    // 截图
    await page.screenshot({
      path: `${LOG_DIR}/login.png`,
      type: 'png',
      fullPage: true,
    })
    const text = await page.evaluate(() => document.body.innerHTML)
    expect(text).toContain('中后台管理系统') // 登录成功并跳转后，页面应该包含该文本
  })
})
