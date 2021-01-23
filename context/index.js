import React, { Component } from 'react';
import items from './data';
// import Client from './Contentful';

const DataContext = React.createContext();

class DataProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false 
    };

    //getData
    getData= async ()=>{
        try
        {
            // console.log("env : ",process.env);
            // let response=await Client.getEntries({
            //     content_type:"beachResortRoom",
            //      order:"fields.price"
            // });
            // let response=items;
            console.log(items)
            let rooms=this.formatData(items);
            let featuredRooms=rooms.filter(room=>room.featured===true);
            let maxPrice=Math.max(...rooms.map(item=>item.price));
            let maxSize=Math.max(...rooms.map(item=>item.size));
            
            this.setState({
                rooms, 
                featuredRooms,
                sortedRooms:rooms,
                loading:false,
                price:maxPrice,
                maxPrice,
                maxSize
            });
        }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getData();
     }

    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id;
            let images=item.fields.images.map(image=>image.fields.file.url);
        
            let room={...item.fields,images,id};
            return room;
        }); 
        return tempItems;
    }

    getRoom=(slug)=>{
        let {rooms:tempRooms}=this.state;
        const room=tempRooms.find(room=>room.slug===slug);
        return room;
    }

    handleChange=event=>{
        const target=event.target;

        const type=event.target.type;
        const name=event.target.name;
        const value=target.type==='checkbox'?target.checked:target.value;

        console.log(type,name,value);

        this.setState({
            [name]:value
        },this.filterRooms);
    }

    filterRooms=()=>{  
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        }=this.state;

        //cast state variables to wanted types
        capacity=parseInt(capacity);
        price=parseInt(price);
        //end casting

        //filter rooms by state variables
        let tempRooms=[...rooms];
        if(type!=="all"){
            tempRooms=tempRooms.filter(room=>room.type===type);
        }
        if(capacity!==1){
            tempRooms=tempRooms.filter(room=>room.capacity===capacity);
        }
        tempRooms=tempRooms.filter(room=>room.price<=price);
        tempRooms=tempRooms.filter(room=>room.size>=minSize && room.size<=maxSize);
        
        if(breakfast){
            tempRooms=tempRooms.filter(room=>room.breakfast ===true );
        }

        if(pets){
            tempRooms=tempRooms.filter(room=>room.pets ===true );
        }
        
        this.setState({
            sortedRooms:tempRooms
        });
    }

    render() {
        
        return (
            <DataContext.Provider value={
                {
                    ...this.state,
                    getRoom:this.getRoom,
                    handleChange:this.handleChange
                }
            }>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

const DataConsumer=DataContext.Consumer;

export function withDataConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <DataConsumer>
                {value=> <Component {...props} context={value}/> }
            </DataConsumer>
        );
    }
}

export{DataProvider,DataConsumer,DataContext};