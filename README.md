## Sweata Weatha
This is a frontend-only project and was my first deep dive in jQuery, so be kind!

## Started from the bottom
<img width="1429" alt="Screen Shot 2019-03-12 at 10 04 27 PM" src="https://user-images.githubusercontent.com/42391567/54253754-42926c00-4516-11e9-8aa1-05bdbf16ac6f.png">

## Now we're here
<img width="1430" alt="Screen Shot 2019-03-17 at 3 05 41 PM" src="https://user-images.githubusercontent.com/42391567/54497979-c35eb880-48c6-11e9-9b31-c0dfc68a0640.png">

## Running the Server Locally

To see the code in action locally, you need to fire up a development server. First you will need to clone the repo, after this, run the following commands:

```shell
npm install
```

```shell
npm start
```

Once the server is running, visit in your browser:

http://localhost:8080/ to run your application.


## GitHub Deployment
You can visit this site in production at
https://le3ah.github.io/fe_sweata_weatha/

## Backend Data
This project was originally backend only.  You can see the original backend work at
https://sweata-weatha.herokuapp.com/

## Code Sneak Peek
I practiced with AJAX and Fetch calls in this project, and for an example look at some of the code, please see the following:
```
$("#deleteLocationBtn").click(function(){
  event.preventDefault();
  $("#deleteLocationBtn").hide()
  var cityState = $("#locationInfo").val();
  $.ajax({
    url: `https://sweata-weatha.herokuapp.com/api/v1/favorites?location=${cityState}&api_key=79ce1d358a436822b0ce&`,
    type: 'DELETE',
    success: function(data, status){
      window.alert("You've just removed " + data["location"] + " from your favorites!")
    },
  });
})
```

For the background images, I relied on the Flickr API (do not recommend!), and it worked out okay!
```
$.get(`https://sweata-weatha.herokuapp.com/api/v1/backgrounds?location=${cityState}`, function(data, status){
  let backgroundImage = data["data"]["attributes"]["background_url"]
  $("body").css('background-image', `url(${backgroundImage})`)
});
```

## Frontend Built With

* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)
