export default {
    name:'saleproducts',
    type:'document',
    title:'Sale Products',
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string"
        },
        {
            title:'Slug',
            name:'slug',
            type:'slug',
            options:{
                source:'title',
                maxLength:200,
                slugify:(input:any) => input
                .toLowerCase()
                .replace(/\s+/g,'-')
                .slice(0,200)
            }
        },
        
        {
            name:"description",
            title:"Product Description",
            type:"string"
        },
        {
            name:"image",
            title:"Product Image",
            type:"image",
            
            
        },
        
        {
            name:'productTypes',
            type:'array',
            title:'ProductType',
            of:[{type:'string'}]
        },
        {
            name:"price",
            title:"Product Price",
            type:"number",
        },
        {
            name:'sizes',
            type:'array',
            title:'Size',
            of:[{type:'string'}]
        },
        {
            name:'quantity',
            type:'number',
            title:'Quantity'
        },  
    ]
}