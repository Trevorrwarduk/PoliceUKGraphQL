## Police UK GraphQL

The project uses the open Source Apollo GraphQL Server and creates a GraphQL interface into The UK's Police Forces Open Data.

The project is Open Source and has a sister Project for a ReactJS Application and Apollo GraphQL client

## Police Api Documentation

* <https://data.police.uk/docs/>  

## Implemented API's

#### All Forces  
* <https://data.police.uk/api/forces>  
  * forces   
    [ id:  
      name: ]  

-

#### Individual Force
* <https://data.police.uk/api/forces/{FORCEID}>  
  * force(id)  
    id:  
    name:  
    telephone:  
    url:  
    description:  
    engagement\_methods: [engagement\_method]  
     *  engagement\_method  
        [ url:   
          description:  
          title: ]   
           

-

#### Force Senior Officers
* <https://data.police.uk/api/forces/{FORCEID}/people>
  * seniorofficers(id)  
    [ name:   
      rank:  
      bio:  
      contact\_detail: contact\_detail ]  
      *  contact\_detail  
         email:  
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

-

#### Force Neighbourhoods
*  <https://data.police.uk/api/{FORCEID}/neighbourhoods>
  * force_neighbourhoods(id)  
    [ id:  
      name: ]  

-

#### Force Neighbourhood
* <https://data.police.uk/api/{FORCEID}/{NEIGHBOURHOODID}>
  * force\_neighbourhoods(forceID id)   
    id:  
    population:  
    url\_force:   
    name: String
    links: [neighbourhood\_links]  
    centre: neighbourhood\_centre  
    locations: [neighbourhood\_locations]  
    description:  
    
      *  neighbourhood\_links  
         [ url:  
           description:  
           title: ]
      *  neighbourhood\_centre  
         latitude:  
         longitude:  
      *  neighbourhood\_locations  
         [ name:  
           latitude:  
           longitude:  
           postcode:  
           address:  
           type:  
           description: ]  

-
    
#### Force Neighbourhood Boundary
* <https://data.police.uk/api/{FORCEID}/{NEIGHBOURHOODID}/boundary>
  * force\_neighbourhood\_boundary(forceID id)  
  [ latitude:  
    longitude: ]  
    
-

