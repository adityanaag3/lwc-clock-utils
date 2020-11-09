# Clock Utils for Lightning Web Components

[![npm version](https://badge.fury.io/js/lwc-clock-utils.svg)](https://badge.fury.io/js/lwc-clock-utils)

## Installation and Usage

-   Run the command `npm install lwc-clock-utils` in your LWC OSS project's root folder.
-   Update the `lwc.config.json` file in your project to include a new object `{ "npm": "lwc-clock-utils" }` in the `modules` array.
-   Use any of the components listed below.

## Timer Component

A visually stunning countdown timer.

### Usage

Use the tag `<clock-timer></clock-timer>`.

### Attributes

| Name                  | Description                                                                    |
| --------------------- | ------------------------------------------------------------------------------ |
| `duration-in-seconds` | Required. The duration of the timer in seconds                                 |
| `start-on-load`       | Optional. If specified, the timer starts immediately when the component loads. |

### Methods

| Name           | Description                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| `startTimer()` | Starts the timer. You dont need to call it if `start-on-load` attribute is set. |
| `resetTimer()` | Resets the timer to restart from the `duration-in-seconds` specified            |

### Events

The component emits a `timeup` event when the timer runs out.

### Example

Check the component `src/modules/my/app` to see how the Timer Component is used.

---

## Make it your own

Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.

The source files are located in the [`src`](./src) folder. All web components are within the [`src/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components.
