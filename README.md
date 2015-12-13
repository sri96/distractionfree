# DistractionFree
A Google Chrome extension for distraction free studying. I highly recommend using this extension with the uBlock ad blocking extension for complete distraction free studying. 

## Installation
The extension is not currently in the Google Chrome store. So you will have to dowload the zip file from Github and side load this extension through the extensions window. I will my level best to get this extension on the Google Chrome store asap. 

## Motivation
I started writing this extension after seeing a lot of my friends getting distracted by social media, news sites and other sites while they are working on their homeworks, exams and other class assignments. My main goal is to make sure that people are being productive and not wasting time. 

## Technical Introduction
DistractionFree is a Google Chrome extension to allow for distraction free studying. It includes three modes. 

1. Study Mode
2. Timer Mode
3. Off Mode

### Study Mode
When the Study Mode is on, the extension will prevent you from getting distracted. It achieves this goal by maintaining a list of distracting sites (you can add to this list!) and blocking outgoing requests from your browser to those sites. It is that simple! This blocking will be indefinite until you turn the study mode off. This mode works extremely well for me. If you close the browser with the study mode on, it will be automatically turned off. 

### Timer Mode
If you want to take study breaks between some time, you can use the timer mode. The timer mode allows for you to specify a period of time for which the blocking should be active and will turn off after that time. If you close the browser with the timer mode on, it will be automatically turned off. 

### Off Mode
When the Study Mode or Timer Mode is turned off, the extension will go into the off mode and will stop blocking sites. 

## uBlock 
Even though this extension will block outgoing requests to distracting sites, it will be unable to prevent you from getting distracted by ads on pages that you might find non distracting. So please use the uBlock extension to get rid of all the ads on a page for complete distraction free studying. 

## Technical Drawbacks
There is a major technical drawback that this extension suffers from. None of the extensions work in Google Chrome's Incognito mode. This means that a user can just open a new Incoginito window and might be able to browse to distracting page. This is something that the extension cannot prevent from happening. If you feel like you have that level of distraction, please take a look at my ongoing DFBrowser project. It is a full fledged browser instead of just an extension that is built from the ground up to avoid distraction and help people to study. 

## Stats Collection Disclosure
I have set up a simple server to collect some stats on what types of sites people try to visit while they have the extension on Study Mode. This will help me to do some research studies on the distractiveness of sites. I have turned data collection on in the extension by default. You can turn it off at any time. 

## Why only Google Chrome? I use X
Google Chrome is the most popular browser on the planet. So that's why I chose to go with Google Chrome instead of some other browser x. 

## Community Contributions
I welcome contributions from everyone. The list of distracting sites that I have is not very exhaustive. So please feel free to fork my project and add your sites to that list and send me a pull request. 

## License
The MIT License (MIT)

Copyright (c) 2015 Sri Madhavi Rajasekaran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
