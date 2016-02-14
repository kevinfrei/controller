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



Official Keyboards
------------------

* MD1      (Infinity Keyboard/IC60 2014/10/15)
* MDErgo1  (Infinity Ergodox /ICED 2015/03/31)
* WhiteFox (Soon to be released?)


The Kiibohd firmware supports a lot of other keyboards, but these are more obscure/custom/lesser known.



Compilation
-----------

Compilation is possible and tested on Windows/Linux/Mac.
Linux is the easiest using this [VM](https://s3.amazonaws.com/configurator-assets/ArchLinux_kiibohd_2015-02-13.tar.gz).

For most people refer [here](https://github.com/kiibohd/controller/tree/master/Keyboards).

For the full compilation details, please refer to the [wiki](https://github.com/kiibohd/controller/wiki).



Supported Microcontrollers
--------------------------

* Teensy 2.0 (Partial)
* Teensy 2.0++
* Teensy 3.0
* Teensy 3.1/3.2
* mk20dx128vlf5
* mk20dx256vlh7


Adding support for more microcontrollers is possible.
Some considerations for minimum specs:

* ~8  kB of SRAM
* ~25 kB of Flash

It's possible to port chips with lower specs, but will be more effort and have fewer features.



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



Contact
-------

If you really need to get a hold of HaaTa, email is best: `haata@kiibohd.com`

IRC is likely faster though.
`#input.club@irc.freenode.net`
`#geekhack@irc.freenode.net`
`#deskthority@irc.freenode.net`

