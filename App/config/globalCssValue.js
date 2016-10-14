/**
 * 样式全局控制
 */

 import Dimensions from 'Dimensions';


const CSS_VALUE = {
/************************全局共用位置控制***********************************/
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
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
    flex: 1,
    flexDirection: 'row',
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
  ButtonColor: '#1ec2dc',  // 按钮颜色 下载、领取礼包按钮
/*****************************************************************/
  appName: {              // 应用名称 布局 下载、领取礼包
    paddingLeft: 5,
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(51,51,51)'
  },
  shortDesc: {  // 应用描述 下面描述文字
    fontSize: 12,
    paddingLeft: 5,
    fontWeight: 'bold',
    color: 'gray',
  },
  downLoadBtn: {   // 下载、领取按钮字体
    fontSize: 15,
    color: 'white',
  },
  downLoadBtnContainer: {  //下载、领取按钮字体容器
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#20a7d4', // 按钮颜色
    width: 60,
    height: 30,
  },
  gameIcon: {      // 左侧应用 icon
    resizeMode: 'contain',
    height: 60,
    width: 60,
  },
  registerBtn: {
    fontSize: 18,
    color: 'white',
  },
  registerBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#20a7d4', // 按钮颜色
    width: 310,
    height: 40,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 270,
    // borderColor: '#999999',
    // borderWidth: 1,
  },
/*****************************个人中心页面************************************/
   sectionTitle: {
     paddingLeft: 10,
     fontSize: 20,
     fontWeight: 'bold',
   },

};

export default CSS_VALUE;
