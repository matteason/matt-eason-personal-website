---
title: 'Building Ambiphone (or: don''t touch web audio if you value your sanity)'
date: 2024-01-19
---

Last year I launched an online white noise app called [Ambiphone](https://ambiph.one). Go and have a look if you haven't already, because this post will make a lot more sense if you've played with it.

Although Ambiphone looks simple there were a lot of challenges in getting it working properly, mainly related to deficiencies or inconsistencies in how web browsers implement the Web Audio API and PWAs. This post will walk through my many, many failures in the hope that it can help you avoid making the same mistakes.

## What we want
The requirements for Ambiphone were incredibly simple. You should be able to press a button, and it'll loop a sound forever, or until you turn it off. You should be able to control the volume. Multiply that by however many sounds, and that's pretty much all Ambiphone is. (There's some other stuff, like global play/pause/volume and a sleep timer, but I wasn't worried about all of that to start with).

## Getting started
That sounds easy! HTML has an `<audio>` element, and the `<audio>` element has a `loop` attribute. Job done. Let's loop a sine wave MP3 just to double-check.

<audio src="/sounds/sine-440-1s.mp3" controls loop></audio>

If you're using Firefox, that probably sounds perfect. 
Ah. Hmm.

We have a gap when we loop the audio. That's not good. We want a seamless loop, and gaps in our playback are going to be really obvious.

It turns out that MP3s aren't designed for gapless playback, and almost always include a small amount of silence at the start or end of the track because of how they're compressed.

[Image of sine mp3 showing silence]

- iPhone silent switch
- Not persisting in PWA
- Audio object not gapless in some browsers
  - so can't stream, have to download whole file