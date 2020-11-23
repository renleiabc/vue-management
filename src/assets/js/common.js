/*
 * @Author: abc
 * @Date: 2020-11-10 10:05:03
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 10:23:27
 * @Description:公共函数文件
 */
// 根据不同的用户角色，去过滤不同的路由链接

export const handleRouterFilter = (arr, role) => {
  const showList = arr.filter(items => {
    if (items.meta.roles.includes(role)) {
      if (items.children) {
        const firstItems = items.children.filter(item => {
          if (item.meta.roles.includes(role)) {
            if (item.children) {
              const secondItem = item.children.filter(sub => {
                return sub.meta.roles.includes(role);
              });
              item.children = secondItem;
              return secondItem;
            }
          }
          return item.meta.roles.includes(role);
        });
        items.children = firstItems;
        return items;
      }
    }
    return items.meta.roles.includes(role);
  });
  return showList;
};
