---
title: Live cloud maps
description: Near-real-time cloud maps of the whole Earth
img: /content/projects/live-cloud-maps/live-cloud-maps.png
displayOrder: 23
---

![Rectangular true-colour image of the Earth, overlaid with clouds](https://clouds.matteason.co.uk/images/1024x512/earth.jpg)

This project provides free, near real-time, high resolution cloud maps of the whole Earth. You can use them for whatever you like, including as cloud textures in 3D modelling in software like Blender or Xplanet, or in 2D graphics. The latest image is shown above.

[Learn more and get the images](https://github.com/matteason/live-cloud-maps)

If you find this service useful, I'd love to know how you're using it. Please contact me using the details at the bottom of the [homepage](/).

## Why?

I'd been tinkering with building a [live 3D ISS tracker](/projects/iss-tracker), and I wanted to include live clouds. There used to be services that provided this for free for the [Xplanet](https://xplanet.sourceforge.net/) software, but the only option now is a subscription service that charges $110 a year for 8192x4096 images.

I thought something like this should be provided for free, so I decided to build it. 

The first version of this service, [Daily Cloud Maps](https://github.com/matteason/daily-cloud-maps), provided images based on NASA's daily true colour images combined with their 'Clear Sky Confidence' mask to produce realistic cloud maps. Unfortunately NASA's data became quite unreliable, with big chunks of the image missing, so I started looking for an alternative data source.

The new service uses data provided by EUMETSAT, which updates every three hours, allowing me to provide much more up-to-date images than the old daily service. It combines infrared imagery with true colour images to product aesthetically pleasing, but maybe not-totally-meteorologically-accurate images.