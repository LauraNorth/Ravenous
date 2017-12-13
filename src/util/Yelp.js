const apiKey = 'hzdncJSydJpt_IXDv7teFeFysyROQn5pd_ItUCtr6ANHxocVHiknB4qKgli0i58Lkq-o0t9J5uxeI4mtSlqHGAb573HhRZPQeHOXEt4q_u4lU7spsiBDrkGOYZQwWnYx';

export const Yelp = {

search(term, location, sortBy) {
  return(
  fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers:
          {Authorization: `Bearer ${apiKey}`}
        }
      ).then(response=>{
        return response.json();
      }).then(jsonResponse=>{
        if(jsonResponse.businesses){

          return jsonResponse.businesses.map(business=>{
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state:business.location.state,
              zipCode: business.location.zip_code,
              category: business.category,
              rating: business.rating,
              review_count: business.review_count
            }
          })
        }
      })
);
  }
  };
