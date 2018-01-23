INSIDE? IN SITE? INSIGHT!

Navigating around NTU was something we found hard to grapple with especially because the school is enormous. We thought to ourselves, how great would it be if we had an internal GPS system to tell us where we are and what is the best way to our destination. Ranting about this helped us realise that if we were to build a solution to solve our first-world problem, the benefits to customers, retailers, shopping mall operators, event managers and the everyday person are potentially far-reaching and constructive. That was how we got started, and the rest is history.

Our idea is to build 2 separate platforms to serve the needs of our intended audience:

B2C for Customer The first platform is built for the everyday user and customer who struggle with finding their way around inside of buildings. Think Google Maps but bigger (and simultaneously smaller, too). Upon entering special zones such as shopping malls, exhibitions, or commercial buildings, customers will be able to search for directions to their destination. These directions can be provided by building owners or be crowd-sourced via user-generated suggestions as well. Not only that, users will be able to get the latest deals around their vicinity which include shopping discounts, sales, but also, entertainment discovery as well.

B2B: Data and Analytics The second platform is targeted at businesses and building owners in general who would be able to track their customers traveling and be able to find a general behavioral pattern in customers within a specified shopping complex marked by these Bluetooth beacons. The entire concept of this idea is that we are able to provide a gamification environment to the end users and hence, help the businesses in promotion simultaneously.

We used Ionic framework to work on the mobile application -MySQL for building the database to update the current location of the customer within the marked area -Bluetooth beacons triangulation to detect customer location -Python and flask for backend



This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

