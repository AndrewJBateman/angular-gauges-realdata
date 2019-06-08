# Angular Gauges Real Data

App to display real data using an Angular component wrapper [ng-canvas-gauges](https://www.npmjs.com/package/ng-canvas-gauges) for the open-source Javascript [canvas-gauges](https://canvas-gauges.com/) library.

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

* Data displayed on an analogue gauge. A random number function is used to simulate real-time data.

## Screenshots

![Example screenshot](./img/gauge.png)

## Technologies

* [Angular CLI v8.0.2](https://github.com/angular/angular-cli)

* [Angular framework v8.0.0](https://angular.io/)

* [ng-canvas-gauges v6.0.4](https://www.npmjs.com/package/ng-canvas-gauges)

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* app.component.html - extract - defines some of the qualities of the analogue gauge

```html
<radial-gauge
  [value]="(value$ | async)"
  title="Turbine Velocity"
  units="rpm"
  width="500"
  height="500"

  min-value="0"
  max-value="120"
  major-ticks="0, ,20, ,40, ,60, ,80, ,100, ,120"
  minor-ticks="2"
  font-numbers-size="25"
```

## Features

* [Canvas Gauges website](https://canvas-gauges.com/) includes extensive [User Documentation](https://canvas-gauges.com/documentation/user-guide/).

## Status & To-Do List

* Status: Working app that displays a gauge, configurable from `app.component.html`.

* To-Do: Add functionality and extend to include connection to an API.

## Inspiration

* [Post by Wayne Parrott: Add A Realtime Gauge To Your Angular Project](http://www.wayneparrott.com/add-a-realtime-gauge-to-your-angular-project/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
