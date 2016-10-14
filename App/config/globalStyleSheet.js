'use strict'
import React, {
  StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

const STYLE_SHEET = StyleSheet.create({
  // 水平容器
  ROW_CONTAINER: {
    flex: 1,
    flexDirection: 'row',
  },
  // 垂直容器
  COLUMN_CONTAINER: {
    flex: 1,
    flexDirection: 'column',
  },
  // 垂直居中容器
  COLUMN_CENTER_CONTAINER: {
    justifyContent: 'center',
  },
  // 居中容器
  CENTER_CONTAINER: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 水平居中容器
  ROW_CENTER_CONTAINER: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 分割线
  CALL_BORDER: {
    backgroundColor: 'black',
    height: 1,
  },
  // 顶部导航栏背景颜色
  NAVIGATIONBAR_TINTCOLOR: {
    tintColor: 'dodgerblue',
  },
});
export default STYLE_SHEET;
