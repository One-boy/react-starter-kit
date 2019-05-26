
// 登录页测试
import '@babel/polyfill'

const loginUrl = 'http://localhost:8888/'

describe('Login', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    jest.setTimeout(1000000)
  })

  beforeEach(async () => {
    await page.goto(`${loginUrl}#/login`, { waitUntil: 'networkidle2' })

  })

  it('should login with failure', async () => {
    await page.waitForSelector('#username', {
      timeout: 2000,
    })
    await page.type('#username', 'admin')
    await page.type('#password', '')
    await page.click('button[type="submit"]')
    await page.waitForSelector('.ant-form-explain') // should display error
  })

  it('should login successfully', async () => {
    await page.waitForSelector('#username', {
      timeout: 2000,
    })
    await page.type('#username', 'admin')
    await page.type('#password', '1')
    await page.click('button[type="submit"]')

    const text = await page.evaluate(() => document.body.innerHTML)
    expect(text).toContain('中后台管理系统')
  })
})