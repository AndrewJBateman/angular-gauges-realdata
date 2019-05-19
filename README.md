# Angular Gauges Real Data

App to display real data using an Angular component wrapper [ng-canvas-gauges](https://www.npmjs.com/package/ng-canvas-gauges) for the [canvas-gauges](https://canvas-gauges.com/) library.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Data displayed on analogue and digital gauges.

## Screenshots

![Example screenshot](./img/gauge.png)

## Technologies

* [Angular CLI v7.3.9](https://github.com/angular/angular-cli)

* [Angular framework v7.2.0](https://angular.io/)

* [ng-canvas-gauges v6.0.4](https://www.npmjs.com/package/ng-canvas-gauges)

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* app.component.html - defines the basic qualities of an analogue gauge with digital display.

```html
<radial-gauge
    title="Turbine Velocity"
    units="rpm"
    width="500"
    height="500"
    min-value="0"
    max-value="140"
    highlights='[]'
></radial-gauge>
```

## Features

* [Canvas Gauges website](https://canvas-gauges.com/) includes extensive [User documentation](https://canvas-gauges.com/documentation/user-guide/).

## Status & To-Do List

* Status: Very basic working app that displays a gauge, configurable from the `app.component.ts` file using values from [Highcharts documentation](https://api.highcharts.com/highcharts/chart#).

* To-Do: complete turorial. Add functionality and extend to include connection to an API.

## Inspiration

* [Post by Wayne Parrott: Add A Realtime Gauge To Your Angular Project](http://www.wayneparrott.com/add-a-realtime-gauge-to-your-angular-project/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
