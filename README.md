## Police UK GraphQL

The project uses the open Source Apollo GraphQL Server and creates a GraphQL interface into The UK's Police Forces Open Data.

The project is Open Source and has a sister Project for a ReactJS Application and Apollo GraphQL client

## Police Api Documentation

* <https://data.police.uk/docs/>  

## Implemented API's

####All Forces  
* <https://data.police.uk/api/forces>  
  * forces   
    [id:  
    name:]
  
#### Individual Force
* <https://data.police.uk/docs/method/{FORCEID}>  
  * force(id)  
    id:  
    name:  
    telephone:  
    url:  
    description:  
    engagement_methods: [engagement_method]  
     *  [url:   
    description:  
    title:]    
 
#### Force Senior Officers
* <https://data.police.uk/api/forces/{FORCEID}/people>
  * seniorofficers(id)  
    [name:   
    rank:  
    bio:  
    contact\_detail: contact\_detail]  
      *  email:  
    telephone:  
    mobile:  
    fax:  
    web:  
    address:  
    facebook:  
    twitter:  
    youtube:  
    myspace:  
    bebo:  
    flickr:  
    google\_plus:  
    forum:  
    e\_messaging:  
    blog:  
    rss:  



