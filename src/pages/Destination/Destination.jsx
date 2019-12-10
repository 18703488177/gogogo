import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./css/bourn.css"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Bourn extends Component {
    state={
        title : ["日本","欧洲","泰国","东南亚","海岛","中东/非洲","美洲/澳新","国内"],
        typeIndex: 0
    }
    handleClick=(i)=>{
        
        this.setState({
            typeIndex : i
        })
        
    }
    render(){
        return(
            <Layout>
            <Content>
              <Layout>
                  <div className="no">
                        <div className="L-letf">
                            {this.state.title[this.state.typeIndex]}
                        </div>
                  </div>
                  
                <Sider width={100} height={800} style={{ background: '#F9F9F9',fontSize: "14px" ,lineHeight:"48px"}}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                  >
                      {
                          this.state.title.map((item,index)=>{
                          return <SubMenu key={index} title={<span onClick={this.handleClick.bind(this,index)}>{item}</span>}></SubMenu>
                          })
                      }
                   
                  </Menu>
                </Sider>
              </Layout>
            </Content>
          </Layout>
        )
    }
}
