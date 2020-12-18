## WARNING:
> This stuff is archived because I've moved on to manufacturing my *own* keyboards. Feel free to look around, but I don't touch this stuff at all anymore (I no longer even own an ErgoDox)

Why do you want to use my fork? 1 reason: pure, unbridled awesomeness.
This awesomeness exists in 2 primary places. The first is this: I've fixed a nasty bug that didn't allow more than 254 macros (if you want all my awesomeness, you should go get my kll stuff, too, to see why I have 254 macros). The second is that I have an updated (rewritten) version of bitmap2struct (I rewrote it in NodeJS, cuz I don't really do Python) that lets you create all sorts of cool, nifty icons instead of the goofy "I:C" and the numbers 0-9. As an example, I have a little ErgoDox icon as the base layer, and then I have a Left (and Right) ErgoDox icon as 1, the Start button as 2, the Apple icon as 3, and a number of other images that indicate at a glance what your keyboard is up to.

I also have a work-around for a wacky bug that I haven't been able to track down related to the lower right button when you're using the left side as your master: it repeats indefinitely. VERY annoying! So I've added a couple of phantom locations to the base layers.

Be warned: I modified base layers for my KLL, because I found it easier to deal with.

The Kiibohd Controller
======================

This is the main Kiibohd Firmware.
In general, this should be the **only** git repo you need to clone.
The [KLL](https://github.com/kiibohd/kll) git repo is automatically cloned during the build process.

Please refer to the [KLL](https://github.com/kiibohd/kll) repo or [kiibohd.com](http://kiibohd.com) for details on the KLL (Keyboard Layout Language) Spec.

[![Travis Status](https://travis-ci.org/kiibohd/controller.svg?branch=master)](https://travis-ci.org/kiibohd/controller) [![Appveyor Status](https://ci.appveyor.com/api/projects/status/67yk8tiyt88xmd15?svg=true)](https://ci.appveyor.com/project/kiibohd/controller/branch/master)


[![Visit our IRC channel](https://kiwiirc.com/buttons/irc.freenode.net/input.club.png)](https://kiwiirc.com/client/irc.freenode.net/#input.club)

[Visit our Discord Channel](https://discord.gg/GACJa4f)



Official Keyboards
------------------

* Infinity 60%
* Infinity 60% LED
* Infinity Ergodox
* WhiteFox
* K-Type (coming soon)


The Kiibohd firmware supports a lot of other keyboards, but these are more obscure/custom/lesser known.



Compilation
-----------

Compilation is possible and tested on Windows/Linux/Mac.
Linux is the easiest using this [VM](https://s3.amazonaws.com/configurator-assets/ArchLinux_kiibohd_2015-02-13.tar.gz).

For most people refer [here](https://github.com/kiibohd/controller/tree/master/Keyboards).

For the full compilation details, please refer to the [wiki](https://github.com/kiibohd/controller/wiki).



Supported Microcontrollers
--------------------------

* Teensy 2.0 (Deprecated)
* Teensy 2.0++ (Deprecated)
* Teensy 3.0
* Teensy 3.1/3.2
* mk20dx128vlf5
* mk20dx256vlh7


Adding support for more microcontrollers is possible.
Some considerations for minimum specs:

* ~8  kB of SRAM
* ~25 kB of Flash

It's possible to port chips with lower specs, but will be more effort and have fewer features.



Bootloader
----------

A custom bootloader (based off of [McHCK](https://github.com/mchck/mchck)) is available.
This is only necessary when assembling a keybaord with a blank MCU or if you're attempting to re-flash your bootloader (requires external tools).

[Bootloader](Bootloader)



Contributions
-------------

Contributions welcome!

* Bug reports
* Documentation and Wiki editing
* Patches (including new features)



Licensing
---------

Licensing is done on a per-file basis.
Some of the source code is from [PJRC/Teensy](http://pjrc.com), other source code is from the [McHck Project](https://mchck.org).
Code written specifically for the Kiibohd Controller use the following licenses:

* MIT
* GPLv3
* Public Domain
