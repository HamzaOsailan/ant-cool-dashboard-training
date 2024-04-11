import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      token:{
        colorPrimary:"#2123bF",
        colorBgLayout:"#313131",
        colorBgContainer:"#1A1A1A",
        colorText:"white"
      },
      }}>
    <App />
    </ConfigProvider>
  </React.StrictMode>,
)
