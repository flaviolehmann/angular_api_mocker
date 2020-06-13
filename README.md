# Angular API Mocker
Minimalist API mocker for very early development purpose. If you're starting your app from the frontend, or simply want to postpone the proper api access, this service can be really usefull.



### How it works
The service mocks the data inside an encapsulated array and provide methods to make operations over it, like listing all data, updating some, delete... A good thing is that when you're ready to connect to your api, you can just change the mocker for a proper service with very small impact.



### How do I use it?
1. Put the 2 files at /mocker inside your project
2. Create a model that extends Resource and a service that extends MockerService
3. Done!


Later, when you're to use your real api, you can just change the type of service injection inside your components. Easy, isn't it?



### I wanna see it working!
You can run the project at the folder /showcase, wich shows the mocker working. Don't forget to run the 'npm install'
Want some img? Here it is!

![alt text](https://lh3.googleusercontent.com/28s36QRiTgj66yOEXZ2uId5wvN0diAWk43VnHciN_POYwJ7FOEJwHy5d42gl5U8AeV5wgh3bm1rDXusSCOvZ=w784-h669)

I know, it's ugly as hell. But it gets the job done!



### I want to help!
Well, you could start helping me with the css of the showcase. Maybe some Material design would give it another feeling.



### I'm really new to angular, any reading suggestion?
Sure!
Try these:
* https://angular.io/docs
* https://medium.com/better-programming/a-generic-http-service-approach-for-angular-applications-a7bd8ff6a068
* https://angular.io/guide/architecture


If it helped you some way, please leave a star!
