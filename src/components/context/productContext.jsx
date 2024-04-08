import React, {createContext} from "react";
import {db} from '../config/Firebase'

export const ProductsContext = createContext();

export default class ProductsContextProvider extends React.Component{

    state={
        products:[]
    }

    componentDidMount(){
        const prevProducts = this.state.products;
        db.collection('Products').onSnapshot(snapshot=>{
            let changes = snapshot.docChanges();
            changes.forEach(change=>{
                if(change.type==='added'){
                    prevProducts.push({
                        id: change.doc.id,
                        title: change.doc.data().title,
                        description: change.doc.data().description,
                        imageUrl: change.doc.data().imageUrl,
                        price: change.doc.data().price,
                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })
    }

    render(){
        return(
            <ProductsContext.Provider value={{products:[...this.state.products]}}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}