import React from "react"

/* 
 * Component which serves the purpose of a "root route component". 
 */
class Page extends React.Component {
  componentDidMount() {
    document.title = `${this.props.title} | Zhang Zeyu`
  }
  
  render() {
    const PageComponent = this.props.component

    return (
      <PageComponent />
    )
  }
}

export default Page