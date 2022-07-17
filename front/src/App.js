import {PageLayout, ThemeProvider, NavList} from '@primer/react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import MyHeader from "./components/Header.js"
import Footer from "./components/Footer.js"
import Contents from './components/Contents.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function NavItem({to, children}) {
  const resolved = useResolvedPath(to)
  const isCurrent = useMatch({path: resolved.pathname, end: true})
  return (
    <NavList.Item as={Link} to={to} aria-current={isCurrent ? 'page' : undefined}>
      {children}
    </NavList.Item>
  )
}
function App() {
  return (
    <ThemeProvider>
      <MyHeader/>
      <PageLayout>
        <PageLayout.Pane position="start">
          <NavList>
            <NavList.Item href="/about" aria-current="page">About me</NavList.Item>
            <NavList.Item href="/history" aria-current="page">History</NavList.Item>
            <NavList.Item href="/contact">Qualification</NavList.Item>
            <NavList.Item>
              Links
              <NavList.SubNav>
                <NavList.Item href="https://github.com/shibukazu">
                  GitHub
                </NavList.Item>
                <NavList.Item href="https://atcoder.jp/users/s_k_526">
                  Atcoder
                </NavList.Item>
                <NavList.Item href="https://www.linkedin.com/in/sk526/">
                  LinkedIn
                </NavList.Item>
              </NavList.SubNav>
            </NavList.Item>
          </NavList>
        </PageLayout.Pane>
        <PageLayout.Content>
          <Contents/>
        </PageLayout.Content>
      </PageLayout>
      <Footer/>
      
    </ThemeProvider>
  );
}

export default App;