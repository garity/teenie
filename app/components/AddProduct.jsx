import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Forbidden from './Forbidden';

// import {createNewProduct} from './reducers/admin';

import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Addbox from 'material-ui/svg-icons/content/add-box';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function mapStateToProps(state) {
  return {
    user: state.auth,
    styles: styles
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addProduct: function(prod) {
//       dispatch(createNewProduct(prod))
//     }
//   }
// }

// function handleSubmit(evt) {
//   evt.preventDefault()
//   addProduct(evt.target.productName.value, evt.target.productDescription.value, event.target.tags.value, event.target.price.value)
// }

export class AddProduct extends Component {
  constructor (props) {
    super();
    this.state = {
      value: 1
    }
  }
  render () {
    const user = this.props.user;
    const styles = this.props.styles;
    const addProduct = this.props.addProduct;
    return (
    <div>
      <NavBar />
        {user && user.isAdmin ?
          <div style={styles.root} >
            <Paper style={styles.prodImageContainer} zDepth={2} >
              <div>
                <Addbox color='#FA8072' />
                <h1 style={styles.imageUpload}>Upload Image</h1>
              </div>
            </Paper>
            <Paper style={styles.prodDescriptionContainer} zDepth={1} >
                <div style={{display : 'block'}}>
                  <form >
                    <div style={styles.name}>
                      <TextField
                        name="productName"
                        hintText="Product Name"
                        floatingLabelText="Product Name"
                      /><br />
                      <br />
                      <SelectField
                        floatingLabelText="Stock Status"
                        autoWidth={true}
                        value={this.state.value}
                      >
                        <MenuItem value={1} primaryText="In Stock" />
                        <MenuItem value={2} primaryText="On Backorder" />
                        <MenuItem value={3} primaryText="Out of Stock" />
                      </SelectField><br />
                      <br />
                      <TextField
                        name="productDescription"
                        hintText="Product Description"
                        floatingLabelText="Product Description"
                      /><br />
                      <br />
                      <TextField
                        name="tags"
                        hintText="Product Tags"
                        floatingLabelText="Product Tags"
                      /><br />
                      <br />
                      <TextField
                        name="price"
                        hintText="Price"
                        floatingLabelText="Price"
                      /><br />
                      <br />
                    </div>
                  </form>
                </div>
                <div style={styles.buttonContainer}>
                <RaisedButton label="Add Product" labelColor='white' style={styles.button} backgroundColor="#FA8072"/>
                </div>
            </Paper>
          </div>
          : <Forbidden />
        }
    </div>)
    }
}
  
export default connect (mapStateToProps) (AddProduct)

const styles = {
  root: {
    height: '70%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  prodImageContainer: {
    maxHeight: '400px', 
    width: '40%', 
    margin : '20px'
  },
  imageUpload: {
    margin:'auto',
    color: '#808080'
  },
  prodDescriptionContainer: {
    height: 'auto', 
    width: '40%', 
    margin : '20px',  
    position: 'relative',
    textAlign: 'left',
    paddingLeft: '5%',
  },
  name:{
    textAlign:'left',
  },
  stockStatus:{
    textAlign:'center', 
    color:'green'
  },
  description: {
    textAlign:'left', 
    paddingLeft: '10px', 
    paddingRight: '10px'
  },
  tags:{
    textAlign:'left', 
    marginTop: '15px', 
    paddingLeft: '10px', 
    paddingRight: '10px'
  },
  price: {
    textAlign:'center'
  },
  buttonContainer:{
 
  },
  button:{ 
    display : 'block', 
    margin: 'auto'
  }
}

