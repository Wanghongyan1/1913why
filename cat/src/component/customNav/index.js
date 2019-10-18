import React ,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu } from 'antd'
// import { MenuItem } from 'rc-menu'

let navData=[
    {name:'首页',path:'/home'},
    {name:'设置',path:'/setting'},
    {name:'用户管理',
     path:'/user',
     children:[
         {name:'用户列表',path:'/user/list'},
         {name:'用户删除',path:'/user/del',
         children:[
             {name:'用户删除1',path:'/user/del/del1'},
             {name:'用户删除2',path:'/user/del/del2'}
         ]
        
        
        }
     ]
    },
]
const {SubMenu} = Menu

class CustomNav extends Component {
    renderItem=(data)=>{
        return data.map((item,index)=>{
            if(item.children){
                return(
                    <SubMenu title={item.name}>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return <Menu.Item>{item.name}</Menu.Item>
            }
        })
    }
    render(){
        console.log(this,'自定义导航')
        return(
            <div className='customNav'>
                <Menu style={{width:256}} mode="vertical">
                    {this.renderItem(navData)}
                    {/* <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">设置</Menu.Item>
                    <SubMenu title="用户管理">
                        <Menu.Item key="1">用户列表</Menu.Item>
                        <Menu.Item key="2">用户删除</Menu.Item>
                    </SubMenu>
                    <SubMenu title="权限管理">
                        <Menu.Item key="1">权限列表</Menu.Item>
                        <Menu.Item key="2">权限删除</Menu.Item>
                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}
export default withRouter(CustomNav)