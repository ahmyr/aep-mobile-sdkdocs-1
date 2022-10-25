# Optimize Setup Validation view

## Overview

You may use the Optimize Setup Validation view in order to quickly see if your app has been successfully set up to use AEP Optimize. The view validates all pre-requisites have been met, and offers feedback on how to fix your setup in cases where requirements have been missed.

## Getting Started

To use this view, complete the following steps:

1. [Set up Adobe Experience Platform Assurance](../set-up.md)
2. [Create](./index.md#creating-sessions) and [connect](./index.md#connecting-to-a-session) to an Assurance session
3. In the **Home** view, select **Validate Setup**

![Validate Setup](./assets/optimize-configuration/optimize-setup-view.png)

## Datastream Setup Validation

At the top of the Optimize Setup Validation view, Platform Assurance inspects your current app's datastream, and looks to see if Target or Offer Decisioning has been enabled. In order to use optimize, at least one of extensions needs to be enabled inside your datastream.

![Validate Datastream Section](./assets/optimize-configuration/datastream-validation.png)

To enable Target in your datastream, go to the datastream view for your app inside the Data Collection UI, and ensure that Adobe Target has been added and enabled.

![Enable Target Datastream](./assets/optimize-configuration/enable-target-datastream.png)

To enable Offer Decisioning in your datastream, go to the datastream view for your app inside the Data Collection UI, and then select Edit inside the actions menu for Adobe Experience Platform. Inside, you will see a checkbox that shows whether Offer Decisioning has been enabled.

![Enable Offer Decisioning Datastream](./assets/optimize-configuration/enable-offer-decisioning-datastream.png)

## SDK Setup Validation

Below the datastream validation section, the SDK Setup Validation section offers feedback on two major issues you could face in your application. Firstly, it offers validation that you have installed all the required SDKs Optimize requires in order to work correctly. Secondly, it validates that the request and response events are are flowing from your application in the way the platform expects them to. Errors may arise if your schemas have been improperly implemented, or your app may be sending requests that do not receive an appropriate response. In these cases, this section will give feedback about what is going wrong, and identify the events in error so that you can diagnose what went wrong.

![Enable Offer Decisioning Datastream](./assets/optimize-configuration/sdk-setup-validation.png)
