import React, { Component } from 'react'

export default class FoodBox extends Component {
    constructor(props){
      super(props)
      this.setState={
      name:this.props.name,
      cal:this.props.cal
      }
    }
    render() {
        return (
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.img} width="100px" height="100px"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.cal} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="fieldhas-addons">
                  <div className="control">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )
    }
}
