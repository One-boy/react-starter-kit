// 菜单工具

// 根据当前路由，获取打开的key
function getOpenKeys(props,menuData){
  const {pathname} = props.location
  let urlList = getMenuKeys(menuData)

  urlList = urlList.filter(d=>{
    if(d && pathname.indexOf(d) === 0){
      return true
    }
    return false
  })
  return [urlList[0]]
}

// 菜单生成数组
function getMenuKeys(menuData){
  let keys = []
  menuData.forEach(d=>{
    if(d.navKey){
      keys.push(d.navKey)
      if(d.children){
        keys = [...keys,...getMenuKeys(d.children)]
      }
    }
  })
  return keys
}

// 根据当前路由，获取选中的key
function getSelectKeys(props,menuData){
  const {pathname} = props.location
  let urlList = getMenuKeys(menuData)

  urlList = urlList.filter(d=>{
    if(d && pathname.indexOf(d) === 0){
      return true
    }
    return false
  })
  return [urlList[urlList.length-1]]
}

export {
  getOpenKeys,
  getSelectKeys,
}