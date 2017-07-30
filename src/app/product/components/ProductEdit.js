import React from "react";

export default class ProductEdit extends React.Component{

    constructor(props) {
        super();

        this.state = {
            product: {
                name: '',
                year: 2010
            }
        }
    }

    componentDidMount()
    {
        console.log(this.props.match);
        let id=this.props.match.params["id"];
        this.props.productActions.getProduct(id);//
        this.props.productActions.getBrands();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: Object.assign({}, nextProps.product)
        })
    }

    onValueChange(e)
    {
        let name = e.target.name;
        
        let product = Object.assign({}, 
                            this.state.product, 
                            {[name]: e.target.value})

        this.setState({
            product: product
        })
        
        //this.props.productActions.updateProduct(product);
        
    }

     
    saveProduct(e) {
        // cancel browser from submission
        e.preventDefault();
        this.props.productActions.saveProduct(this.state.product);
    }


    render() {  
     
    let options = this.props.brands.map ( brand => (
        <option value={brand.id} 
                 >
            {brand.name}
        </option>
    ));

    return(
        <div>
            <h2>
                Product Edit
               
            </h2>
            <form onSubmit={(e)=> this.saveProduct(e)} >
                <input name="name" 
                        value={this.state.product.name} 
                        onChange={(e)=>this.onValueChange(e)}/>
            
                <input name="year" 
                        value={this.state.product.year} 
                        onChange={(e)=>this.onValueChange(e)}/>
            
                <select name="brandId"
                        onChange={(e)=>this.onValueChange(e)}
                        value={this.state.product.brandId}
                    >
                    {options}
                </select>

            <button type="submit">Save</button>
</form>

        </div>
    )
}}
