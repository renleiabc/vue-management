/*
 * @Author: abc
 * @Date: 2020-11-03 11:50:42
 * @LastEditors: abc
 * @LastEditTime: 2020-11-25 16:52:37
 * @Description:按需引入ant design vue的UI组件
 */
import Vue from 'vue';
import {
  Button,
  Icon,
  Layout,
  Menu,
  FormModel,
  Input,
  Row,
  Col,
  ConfigProvider,
  Select,
  Calendar,
  Dropdown
} from 'ant-design-vue';
Vue.use(Button)
  .use(Input)
  .use(Icon)
  .use(Layout)
  .use(Menu)
  .use(FormModel)
  .use(Row)
  .use(Col)
  .use(ConfigProvider)
  .use(Select)
  .use(Calendar)
  .use(Dropdown);
