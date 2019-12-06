import React from 'react'
class Recommendations extends React.Component {
  render() {
    const { params } = this.props.match.params;
    console.log(params.movie);
    return <h1>Recommendations {params.movie}</h1>
  }
}
export default Recommendations