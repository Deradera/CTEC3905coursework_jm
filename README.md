---
# CTEC3905 Coursework - Assignment 2
---
*This reposotiry contains the code for my practical coursework for CTEC3905.*

The basis for this project was to make an information site about my Dad's recently started business in Quality Assurance Auditing for Aerospace Engineering and Medical Supply Manufacturing. The logo used as the site icon and in the top left of the webpage was provided by my dad for use on the proper website which will have the content filled out properly. Any other images were found from various wallpaper/stock image websites.

Due to time constraints on both my end and my Dad's end, we were unable to solidify what the content of the webpage should be. As such I have used Lorem ipsum paragraphs to fill out the page in where we imagined the actual text would be. There are some places I have placed more relevant text as well.

I sectioned out what the most logical sections would be for displaying information:
- Home
- Consultancy 
    - This would be a rundown of the services offered
- Certification 
    - This would display the certification that my Dad has (What ISO standards he can audit)
- Contact 
    - This contains a form where a message would be sent to the company email address, though for the purpse of this development project the mailto will be directed to my university email address. I say would because the code to implement the actual email sending cannot be done with javascript and would require some sort of server-side scripting which is out of the scope for a front-end web development address. The form *does* however, kindly inform you if you have forgotten to fill in a section.

I started off with one css stylesheet that would contain everything, until i got to a point with the contact page where there was *so much* styling going on - including media breakpoints - that the styles.css file would be far too long and difficult to read. As such I separated the form out into its own style sheet which then wouldnt have to be loaded into the other pages.

On the contact page, there is a form that would allow you o senf

The shadow under the header bar is code adapted from [here](https://css-tricks.com/snippets/css/css-box-shadow/)

# Image Sources

* [Aeroplane image on first page](https://wallpaperscraft.com/download/aircraft_sky_smoke_flying_113843/3840x2400#)
* [Space Station image on first page](https://wallpaperscraft.com/wallpaper/space_station_layout_solar_panels_58298)
* [BAE Hawk MK67](https://wallpaperscraft.com/download/bae_hawk_mk_67_attack_aircraft_flying_military_109931/1920x1080#)