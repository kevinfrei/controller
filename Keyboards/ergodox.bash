#!/usr/bin/env bash
# This is a build script template
# These build scripts are just a convenience for configuring your keyboard (less daunting than CMake)
# Jacob Alexander 2015-2016



#################
# Configuration #
#################

######## Left Side ########

# Feel free to change the variables in this section to configure your keyboard

BuildPath="HomeLeft"

## KLL Configuration ##

# Generally shouldn't be changed, this will affect every layer
BaseMap="scancode_map leftHand slave1 rightHand"

# This is the default layer of the keyboard
# NOTE: To combine kll files into a single layout, separate them by spaces
# e.g.  DefaultMap="mylayout mylayoutmod"
#DefaulMap="mdergo1Overlay lcdFuncMap"
DefaultMap="Kustom-0-Base lcdFuncMap-home-left"

# This is where you set the additional layers
# NOTE: Indexing starts at 1
# NOTE: Each new layer is another array entry
# e.g.  PartialMaps[1]="layer1 layer1mod"
#       PartialMaps[2]="layer2"
#       PartialMaps[3]="layer3"
PartialMaps[1]="Kustom-1-Base lcdFuncMap-home-left"
PartialMaps[2]="Kustom-2-Mac lcdFuncMap-home-left"
PartialMaps[3]="Kustom-3-Win lcdFuncMap-home-left"
PartialMaps[4]="Kustom-4-NumPad lcdFuncMap-home-left"
PartialMaps[5]="Kustom-5-Fn lcdFuncMap-home-left"
PartialMaps[6]="Kustom-6-Game lcdFuncMap-home-left"
PartialMaps[7]="Kustom-7-MacFunc lcdFuncMap-home-left"
PartialMaps[8]="Kustom-8-WinFunc lcdFuncMap-home-left"
PartialMaps[9]="Kustom-9-WinEdit lcdFuncMap-home-left"


##########################
# Advanced Configuration #
##########################

# Don't change the variables in this section unless you know what you're doing
# These are useful for completely custom keyboards
# NOTE: Changing any of these variables will require a force build to compile correctly

# Keyboard Module Configuration
ScanModule="Infinity_Ergodox"
MacroModule="PartialMap"
OutputModule="pjrcUSB"
DebugModule="full"

# Microcontroller
Chip="mk20dx256vlh7"

# Compiler Selection
Compiler="gcc"



########################
# Bash Library Include #
########################

# Shouldn't need to touch this section

# Check if the library can be found
if [ ! -f cmake.bash ]; then
	echo "ERROR: Cannot find 'cmake.bash'"
	exit 1
fi

# Load the library
source cmake.bash


#########################
# Re-run for right side #
#########################

######## Right Side ########

# Feel free to change the variables in this section to configure your keyboard

BuildPath="HomeRight"

## KLL Configuration ##

# Only changing the basemap (everything else is the same)
# Generally shouldn't be changed, this will affect every layer
BaseMap="defaultMap rightHand slave1 leftHand"

# This is the default layer of the keyboard
# NOTE: To combine kll files into a single layout, separate them by spaces
# e.g.  DefaultMap="mylayout mylayoutmod"
#DefaulMap="mdergo1Overlay lcdFuncMap"
DefaultMap="Kustom-0-Base lcdFuncMap-home-right"

# This is where you set the additional layers
# NOTE: Indexing starts at 1
# NOTE: Each new layer is another array entry
# e.g.  PartialMaps[1]="layer1 layer1mod"
#       PartialMaps[2]="layer2"
#       PartialMaps[3]="layer3"
PartialMaps[1]="Kustom-1-Base lcdFuncMap-home-right"
PartialMaps[2]="Kustom-2-Mac lcdFuncMap-home-right"
PartialMaps[3]="Kustom-3-Win lcdFuncMap-home-right"
PartialMaps[4]="Kustom-4-NumPad lcdFuncMap-home-right"
PartialMaps[5]="Kustom-5-Fn lcdFuncMap-home-right"
PartialMaps[6]="Kustom-6-Game lcdFuncMap-home-right"
PartialMaps[7]="Kustom-7-MacFunc lcdFuncMap-home-right"
PartialMaps[8]="Kustom-8-WinFunc lcdFuncMap-home-right"
PartialMaps[9]="Kustom-9-WinEdit lcdFuncMap-home-right"

# Load the library (starts the build)
source cmake.bash


#########################
# Re-run for right side #
#########################

######## Right Side ########

# Feel free to change the variables in this section to configure your keyboard

BuildPath="WorkLeft"

## KLL Configuration ##

# Only changing the basemap (everything else is the same)
# Generally shouldn't be changed, this will affect every layer
BaseMap="defaultMap leftHand slave1 rightHand"

# This is the default layer of the keyboard
# NOTE: To combine kll files into a single layout, separate them by spaces
# e.g.  DefaultMap="mylayout mylayoutmod"
#DefaulMap="mdergo1Overlay lcdFuncMap"
DefaultMap="Kustom-0-Base lcdFuncMap-work-left"

# This is where you set the additional layers
# NOTE: Indexing starts at 1
# NOTE: Each new layer is another array entry
# e.g.  PartialMaps[1]="layer1 layer1mod"
#       PartialMaps[2]="layer2"
#       PartialMaps[3]="layer3"
PartialMaps[1]="Kustom-1-Base lcdFuncMap-work-left"
PartialMaps[2]="Kustom-2-Mac lcdFuncMap-work-left"
PartialMaps[3]="Kustom-3-Win lcdFuncMap-work-left"
PartialMaps[4]="Kustom-4-NumPad lcdFuncMap-work-left"
PartialMaps[5]="Kustom-5-Fn lcdFuncMap-work-left"
PartialMaps[6]="Kustom-6-Game lcdFuncMap-work-left"
PartialMaps[7]="Kustom-7-MacFunc lcdFuncMap-work-left"
PartialMaps[8]="Kustom-8-WinFunc lcdFuncMap-work-left"
PartialMaps[9]="Kustom-9-WinEdit lcdFuncMap-work-left"

# Load the library (starts the build)
source cmake.bash


#########################
# Re-run for right side #
#########################

######## Right Side ########

# Feel free to change the variables in this section to configure your keyboard

BuildPath="WorkRight"

## KLL Configuration ##

# Only changing the basemap (everything else is the same)
# Generally shouldn't be changed, this will affect every layer
BaseMap="defaultMap rightHand slave1 leftHand"

# This is the default layer of the keyboard
# NOTE: To combine kll files into a single layout, separate them by spaces
# e.g.  DefaultMap="mylayout mylayoutmod"
#DefaulMap="mdergo1Overlay lcdFuncMap"
DefaultMap="Kustom-0-Base lcdFuncMap-work-left"

# This is where you set the additional layers
# NOTE: Indexing starts at 1
# NOTE: Each new layer is another array entry
# e.g.  PartialMaps[1]="layer1 layer1mod"
#       PartialMaps[2]="layer2"
#       PartialMaps[3]="layer3"
PartialMaps[1]="Kustom-1-Base lcdFuncMap-work-left"
PartialMaps[2]="Kustom-2-Mac lcdFuncMap-work-left"
PartialMaps[3]="Kustom-3-Win lcdFuncMap-work-left"
PartialMaps[4]="Kustom-4-NumPad lcdFuncMap-work-left"
PartialMaps[5]="Kustom-5-Fn lcdFuncMap-work-left"
PartialMaps[6]="Kustom-6-Game lcdFuncMap-work-left"
PartialMaps[7]="Kustom-7-MacFunc lcdFuncMap-work-left"
PartialMaps[8]="Kustom-8-WinFunc lcdFuncMap-work-left"
PartialMaps[9]="Kustom-9-WinEdit lcdFuncMap-work-left"

# Load the library (starts the build)
source cmake.bash
