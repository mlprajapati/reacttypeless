import React from "react";
import { storiesOf } from "@storybook/react";
import TreeView from "./TreeView";
const treeData = {
  children: [
    {
      name: "Cameras",
      children: [
        {
          name: "Lenses",
          children: [
            {
              name: "FE 135mm F1.8 GM",
              serialNo: "001",
              orderNo: "01",
              path: "Cameras/Lenses",
              imageSrc: "/assets/images/Electronics_cameras/lenses/001.JPG",
              imei: "990000862471854",
              type: "product",
              modelNo: "SEL135F18GM",
              orderedDate: "6/11/2018",
              deliveryDate: "10/11/2018",
              price: "174,990",
              discount: "1,000",
              amountPaid: "173,990",
              warrantyPeriod: "1year",
              extendedWarranty: "none",
              exchangable: "yes",
              specifications: {
                mount: "Sony E-mount",
                "focalLength(mm)": "135",
                format: "35 mm full-frame",
                circularAperture: "yes",
                "Dimensions_(diameter_X_length)": "89.5 x 127 mm (3-5/8 x 5)",
                weight: "950 g (33.6 oz)"
              },
              features: [
                "An F1.8 135-mm prime with superb resolution, bokeh and AF",
                "XA and Super ED elements deliver high resolution even at F1.8",
                "Big, beautiful, natural bokeh",
                "Dual front and rear XD linear motors achieve fast, precise, quiet AF",
                "Nano AR Coating enhances flare resistance",
                "Durable, lightweight magnesium alloy",
                "Dust and moisture resistance maintains reliability in harsh environments"
              ],
              insurance: {
                existenceYear: "6/11/2019-6/11/2021",
                nomineeName: "Sony-A",
                sumInsured: ""
              }
            },
            {
              name: "FE 400 mm F2.8 GM OSS",
              serialNo: "002",
              orderNo: "02",
              path: "Cameras/Lenses",
              imageSrc: "/assets/images/Electronics_cameras/lenses/002.JPG",
              imei: "994400862471854",
              type: "product",
              modelNo: "SEL400F28GM",
              orderedDate: "10/2/2019",
              deliveryDate: "14/2/2019",
              price: "1,034,990",
              discount: "none",
              amountPaid: "1,034,990",
              warrantyPeriod: "2 years",
              extendedWarranty: "1 year",
              exchangable: "no",
              specifications: {
                mount: "Sony E-mount",
                "focalLength(mm)": "400",
                format: "35 mm full-frame",
                circularAperture: "Yes",
                "dimensions_(diameter_X_length)":
                  "158.1 x 359 mm (6-1/4 x 14-1/4)",
                weight: "2895 g (102.2 oz.)"
              },
              features: [
                "Innovative G Master F2.8 super telephoto",
                "Newly developed XD (extreme dynamic) Linear Motor achieves extremely fast, precise, quiet AF",
                "Extraordinary G Master resolution",
                "Excellent flare resistance for high clarity and contrast",
                "1.4x and 2.0x tele-converter support, with high imaging and AF performance"
              ],
              insurance: {
                existenceYear: "10/2/2019-10/2/2021",
                nomineeName: "Sony-B",
                sumInsured: ""
              }
            }
          ]
        },
        {
          name: "Compact Cameras",
          children: [
            {
              name: "RX100 VI — broad zoom range and super-fast AF",
              serialNo: "003",
              orderNo: "03",
              path: "Cameras/Compact Cameras",
              imageSrc:
                "/assets/images/Electronics_cameras/compact_cameras/003.JPG",
              imei: "991111862234854",
              type: "product",
              modelNo: "DSC-RX100M6",
              orderedDate: "16/5/2019",
              deliveryDate: "19/5/2019",
              price: "96,990",
              discount: "1,010",
              amountPaid: "95,980",
              warrantyPeriod: "4years",
              extendedWarranty: "1year",
              exchangable: "yes",
              specifications: {
                sensorType:
                  "1.0-type (13.2 mm x 8.8 mm) Exmor® RS CMOS sensor, aspect ratio 3:2",
                numberofPixels: "Approx. 20.1 MP",
                lensType:
                  "ZEISS® Vario-Sonnar® T* Lens, 15 elements in 12 groups (8 aspheric elements including AA [advanced aspherical] lens)",
                opticalZoom: "8.0x",
                focalLength: "f = 9.0-72 mm"
              },
              features: [
                "A pocket-size camera with full zoom range",
                "High-resolution, compact optical design",
                "Large apertures, great range of expression",
                "High-speed BIONZ X™ image processing engine",
                "Steadfast tracking with wide and dense AF"
              ],
              insurance: {
                existenceYear: "16/5/2019-16/10/2022",
                nomineeName: "Sony-A",
                sumInsured: ""
              }
            },
            {
              name: "ACC-TRDCJ Accessory Kit",
              serialNo: "004",
              orderNo: "04",
              path: "Cameras/Compact Cameras",
              imageSrc:
                "/assets/images/Electronics_cameras/compact_cameras/004.JPG",
              imei: "991200862471854",
              type: "accessory",
              modelNo: "ACC-TRDCJ",
              orderedDate: "12/10/2019",
              deliveryDate: "12/10/2019",
              price: "96,990",
              discount: "1,010",
              amountPaid: "95,980",
              warrantyPeriod: "3years",
              extendedWarranty: "2years",
              exchangable: "no",
              specifications: [
                "Includes Micro USB terminal for DC input",
                "Can be charged from PC or via AC adaptor",
                "Compact, lightweight design makes it perfect for travel"
              ],
              features: ["Full charging time approx. 120 minutes"],
              insurance: {
                existenceYear: "12/10/2019-12/10/2020",
                nomineeName: "Sony-C",
                sumInsured: ""
              }
            }
          ]
        },
        {
          name: "Interchangeable Lens Cameras",
          children: [
            {
              name: "α6400 E-mount camera with APS-C Sensor",
              serialNo: "005",
              orderNo: "05",
              path: "Cameras/Interchangeable Lens Cameras",
              imageSrc:
                "/assets/images/Electronics_cameras/interchangeable_cameras/005.JPG",
              imei: "991200682471854",
              type: "product",
              modelNo: "ILCE-6400 / ILCE-6400L / ILCE-6400M",
              orderedDate: "16/5/2019",
              deliveryDate: "19/5/2019",
              price: "75,990",
              discount: "500",
              amountPaid: "75,490",
              warrantyPeriod: "2years",
              extendedWarranty: "1year",
              exchangable: "no",
              specifications: {
                aspectRatio: "3:2",
                sensorType: "APS-C type (23.5 x 15.6 mm), Exmor® CMOS sensor",
                lensCompatibility: "Sony E-mount lenses",
                lensMount: "E-mount"
              },
              features: [
                "Unparalleled AF performance is the key to beautiful shots",
                "More accurate autofocus in dim lighting",
                "AF in Focus Magnifier for finer focus adjustment",
                "Easier manual focus with an improved peaking function",
                "Real-time Tracking holds the focus on tracked subjects"
              ],
              insurance: {
                existenceYear: "16/5/2019-16/5/2022",
                nomineeName: "Sony-D",
                sumInsured: ""
              }
            },
            {
              name: "α9 featuring full-frame stacked CMOS sensor",
              serialNo: "006",
              orderNo: "06",
              path: "Cameras/Interchangeable Lens Cameras",
              imageSrc:
                "/assets/images/Electronics_cameras/interchangeable_cameras/006.JPG",
              imei: "991222862471854",
              type: "product",
              modelNo: "ILCE-9",
              orderedDate: "11/11/2019",
              deliveryDate: "12/11/2019",
              price: "290,490",
              discount: "none",
              amountPaid: "290,490",
              warrantyPeriod: "2years",
              extendedWarranty: "1year",
              exchangable: "no",
              specifications: {
                lensCompatibility: "Sony E-mount lenses",
                lensMount: "E-mount",
                sensorType:
                  "35 mm full frame (35.6 x 23.8 mm), Exmor® RS CMOS sensor"
              },
              features: [
                "New full-frame stacked CMOS sensor with integral memory",
                "High-speed BIONZ X™ image processing engine",
                "20fps continuous shooting22 with AF/AE tracking",
                "AI-based Real-time Tracking"
              ],
              insurance: {
                existenceYear: "11/11/2019-11/11/2021",
                nomineeName: "Sony-E",
                sumInsured: ""
              }
            }
          ]
        }
      ]
    },
    {
      name: "Televisions And Home Cinema",
      children: [
        {
          name: "Televisions",
          children: [
            {
              name:
                "A9F | MASTER Series | OLED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Android TV)",
              serialNo: "007",
              orderNo: "07",
              path: "Televisions And Home Cinema/Televisions",
              imageSrc:
                "/assets/images/Television and home cinema/televisions/007.JPG",
              imei: "990230862471854",
              type: "product",
              modelNo: "A9F Series",
              orderedDate: "6/12/2016",
              deliveryDate: "10/12/2016",
              price: {
                "139 cm (55)KD-55A9F": "429,900",
                "164 cm (65)KD-65A9F": " 579,900"
              },
              discount: {
                "139 cm (55)KD-55A9F": "1,000",
                "164 cm (65)KD-65A9F": " 1,500"
              },
              amountPaid: {
                "139 cm (55)KD-55A9F": "428,900",
                "164 cm (65)KD-65A9F": " 578,400"
              },
              warrantyPeriod: "1years",
              extendedWarranty: "1years",
              exchangable: "no",
              specifications: {
                "screenSize(inch,measured)": "55 (54.6)",
                wifiStandard: "Wi-Fi Certified 802.11a/b/g/n/ac",
                picture_quality: "4K High Dynamic Range",
                sound_quality: "Acoustic Surface Audio+™"
              },
              features: [
                "Pixel Contrast Booster™: Maximising OLED contrast in every colour ",
                "TV centre speaker mode: The centrepiece of breathtaking sound",
                "TRILUMINOS™ Display: Extra colours, extra brilliance",
                "Rediscover detail with 4K X-Reality™ PRO"
              ],
              insurance: {
                existenceYear: "6/12/2019-6/12/2020",
                nomineeName: "Sony-F",
                sumInsured: ""
              }
            },
            {
              name:
                "A1 | OLED | 4K Ultra HD | High Dynamic Range(HDR) | Smart TV (Android TV™)",
              serialNo: "008",
              orderNo: "08",
              path: "Televisions And Home Cinema/Televisions",
              imageSrc:
                "/assets/images/Television and home cinema/televisions/008.JPG",
              imei: "990000862400854",
              type: "product",
              modelNo: "A1",
              orderedDate: "10/12/2019",
              deliveryDate: "14/12/2019",
              price: "304,900",
              discount: "none",
              amountPaid: "304,900",
              warrantyPeriod: "5 years",
              extendedWarranty: "2 year",
              exchangable: "yes",
              specifications: {
                "screenSize(inch,measured)": "55 (54.6)",
                wifiStandard: "Wi-Fi Certified 802.11a/b/g/n/ac"
              },
              features: [
                "Acoustic Surface™ technology",
                "4K HDR Processor X1™ Extreme: So real you can feel it",
                "TRILUMINOS™ Display: Extra colours, extra brilliance",
                "Explore new worlds with Android TV"
              ],
              insurance: {
                existenceYear: "none",
                nomineeName: "none",
                sumInsured: ""
              }
            }
          ]
        },
        {
          name: "Home Theatre And Sound Bars",
          children: [
            {
              name:
                "2.1ch Dolby Atmos®/DTS:X® Single Soundbar with built-in subwoofer | HT-X8500",
              serialNo: "009",
              orderNo: "09",
              path: "Televisions And Home Cinema/Home Theatre And Sound Bars",
              imageSrc:
                "/assets/images/Television and home cinema/home theatre_sound bars/009.JPG",
              imei: "910088862234854",
              type: "product",
              modelNo: "HT-X8500",
              orderedDate: "26/6/2019",
              deliveryDate: "9/7/2019",
              price: "30,990",
              discount: "1,010",
              amountPaid: "29,980",
              warrantyPeriod: "2years",
              extendedWarranty: "1year",
              exchangable: "yes",
              specifications: {
                amplifier: "Digital Amplifier, S-Master",
                hdmi: "Input/Output: 1/1 (ARC/eARC)",
                hdmiInput:
                  "Dolby Digital, Dolby Digital plus, Dolby TrueHD, Dolby Dual mono, DTS, DTS HD High Resolution Audio, DTS HD Master Audio, DTS ES, DTS 96/24,DTS: X,MPEG2-AAC",
                hdmiEarc:
                  "Dolby Digital, Dolby Digital plus, Dolby TrueHD, Dolby Atmos, Dolby Dual mono, DTS, DTS HD High Resolution Audio, DTS HD Master Audio, DTS ES,DTS 96/24, DTS: X,MPEG2-AAC",
                bluetooth: "AAC, SBC",
                "mainUnitSize(Bodyonly)(W X H X D) ":
                  "890 mm x 64 mm x 96 mm (35 1/8 x 2 5/8 x 3 7/8)",
                "mainUnitWeight(Bodyonly)": "3.1 kg / 6 lb 13 2/5 oz"
              },
              features: [
                "Hear sound from all directions with simulated 7.1.2 surround sound ",
                "Everything upscaled close to 7.1.2ch",
                "Sound modes to match your entertainment",
                "Experience deep bass sound",
                "Enjoy all your movies in 4K HDR quality",
                "Slim and elegant",
                "Wireless connectivity to your TV"
              ],
              insurance: {
                existenceYear: "26/6/2019-26/6/2023",
                nomineeName: "Sony-H",
                sumInsured: ""
              }
            },
            {
              name: "3 m High Speed Micro HDMI Cable",
              serialNo: "010",
              orderNo: "10",
              path: "Televisions And Home Cinema/Home Theatre And Sound Bars",
              imageSrc:
                "/assets/images/Television and home cinema/home theatre_sound bars/010.JPG",
              imei: "992222862471854",
              type: "accessory",
              modelNo: "DLC-HEU30",
              orderedDate: "3/7/2019",
              deliveryDate: "13/7/2019",
              price: " 2,690",
              discount: "none",
              amountPaid: "2,690",
              warrantyPeriod: "1year",
              extendedWarranty: "none",
              exchangable: "no",
              features: [
                "High-quality gold connecters",
                "Mirror content from your mobile device or camera",
                "Lightweight design",
                "Simple, single-cable connection with HDMI equipped AV equipment"
              ],
              specifications: {},
              insurance: {
                existenceYear: "3/7/2019-3/7/2021",
                nomineeName: "Sony-I",
                sumInsured: ""
              }
            }
          ]
        },
        {
          name: "Projectors",
          children: [
            {
              name: "MP-CD1 Mobile Projector",
              serialNo: "011",
              orderNo: "11",
              path: "Televisions And Home Cinema/Projectors",
              imageSrc:
                "/assets/images/Television and home cinema/projectors/011.JPG",
              imei: "991266662471554",
              type: "product",
              modelNo: "MP-CD1",
              orderedDate: "6/5/2019",
              deliveryDate: "9/5/2019",
              price: "75,990",
              discount: "500",
              amountPaid: "75,490",
              warrantyPeriod: "2years",
              extendedWarranty: "1year",
              exchangable: "no",
              specifications: {
                diagnolProjectionImageSize:
                  "101.6 cm (40) at projection distance of 1.15 m (3.77 ft)/Max. 304.8 cm (120) at projection distance of 3.45 m (11.32 ft)",
                contrastRatio: "400:1",
                displayResolution: "854 × 480",
                colorReproducibility: "Full colour (16,770,000 colours)"
              },
              features: [
                "Super-convenient portability",
                "Simple setup, quick start",
                "Wireless connectivity And media streaming with HDMI dongle",
                "Whisper-quiet performance"
              ],
              insurance: {
                existenceYear: "6/5/2019-6/5/2024",
                nomineeName: "Sony-J",
                sumInsured: ""
              }
            }
          ]
        },
        {
          name: "Blu-ray Disc And DVD Players",
          children: [
            {
              name:
                "4K Ultra HD Blu-ray Player | UBP-X700 with High-Resolution Audio",
              serialNo: "012",
              orderNo: "12",
              path: "Televisions And Home Cinema/Blu-ray Disc And DVD Players",
              imageSrc:
                "/assets/images/Television and home cinema/blu-ray disc_dvd players/012.JPG",
              imei: "991266662471554",
              type: "product",
              modelNo: "MP-CD1",
              orderedDate: "6/6/2020",
              deliveryDate: "9/6/2020",
              price: "29,990",
              discount: "500",
              amountPaid: "29,490",
              warrantyPeriod: "4years",
              extendedWarranty: "2years",
              exchangable: "yes",
              specifications: {
                pictureFeature:
                  "24p True Cinema, 4K Upscale (60p), Deep colour (12 bit)",
                wifiBuiltin: "yes",
                "dimensions(W X H X D)": "W320 x H45 x D217 (mm)",
                weight: "1.4 kg"
              },
              features: [
                "Get more from your movies with 4K Ultra HD",
                "Digital music compatible",
                "Designed to be heard together "
              ],
              insurance: {
                existenceYear: "6/6/2020-6/6/2024",
                nomineeName: "Sony-H",
                sumInsured: ""
              }
            },
            {
              name: "Blu-ray Disc Player",
              serialNo: "013",
              orderNo: "13",
              path: "Televisions And Home Cinema/Blu-ray Disc And DVD Players",
              imageSrc:
                "/assets/images/Television and home cinema/blu-ray disc_dvd players/013.JPG",
              imei: "996666662471554",
              type: "product",
              modelNo: "BDP-S1500",
              orderedDate: "16/6/2020",
              deliveryDate: "26/6/2020",
              price: "7,490",
              discount: "none",
              amountPaid: "7,490",
              warrantyPeriod: "2years",
              extendedWarranty: "2years",
              exchangable: "no",
              specifications: {
                playback: "yes",
                superScalar: "yes",
                "screenSaver/easySetup/photoTV HD": "yes/yes/yes"
              },
              features: [
                "Full HD 1080p",
                "TRILUMINOS brings colours alive",
                "Graphic user interface is quick and intuitive",
                "Wide codec support for more viewing options",
                "Super quick start gets you watching faster",
                "Wide codec support for more viewing options "
              ],
              insurance: {
                existenceYear: "16/6/2020-16/6/2023",
                nomineeName: "Sony-T",
                sumInsured: ""
              }
            }
          ]
        }
      ]
    },
    {
      name: "In Car",
      children: [
        {
          name: "In-Car Receivers And Players",
          children: [
            {
              name: "17.6 cm (6.95) Apple CarPlay/Android Auto Media Receiver",
              serialNo: "014",
              orderNo: "14",
              path: "In Car/In-Car Receivers And Players",
              imageSrc:
                "/assets/images/In Car/in-car receivers & players/014.JPG",
              imei: "990000862471854",
              type: "product",
              modelNo: "XAV-AX3000",
              orderedDate: "16/12/2018",
              deliveryDate: "26/12/2018",
              price: "20,990",
              discount: "150",
              amountPaid: "20,840",
              warrantyPeriod: "3years",
              extendedWarranty: "1year",
              exchangable: "yes",
              specifications: {
                bluetooth: "yes",
                navigation: "Android Auto",
                "dimensions (W X H X D)": "178 x 100 x 139 mm",
                weight: "1.1 kg"
              },
              features: [
                "Apple CarPlay makes driving smarter",
                "See and control everything on a sleek 17.6 cm diagonal (6.95) touchscreen",
                "Quick-access key panel",
                "Easy installation with a compact rear chassis ",
                "Three pre-outs let you expand your sound system",
                "Dynamic Stage Organiser creates virtual speakers on your dashboard"
              ],
              insurance: {
                existenceYear: "16/12/2018-16/12/2020",
                nomineeName: "Sony-Y",
                sumInsured: ""
              }
            },
            {
              name: "16.3-cm (6.4) DVD Receiver with BLUETOOTH",
              serialNo: "015",
              orderNo: "15",
              path: "In Car/In-Car Receivers And Players",
              imageSrc:
                "/assets/images/In Car/in-car receivers & players/015.JPG",
              imei: "999999862400854",
              type: "product",
              modelNo: "XAV-AX200",
              orderedDate: "12/12/2019",
              deliveryDate: "14/12/2019",
              price: "26,990",
              discount: "none",
              amountPaid: "26,990",
              warrantyPeriod: "2years",
              extendedWarranty: "1year",
              exchangable: "yes",
              specifications: {
                bluetooth: "yes",
                navigation: "no",
                weight: "1.7 kg",
                "dimensions (W X H X D)": "178 x 102 x 168 mm"
              },
              features: [
                "Apple CarPlay makes driving smarter",
                "Enjoy immersive audio",
                "Play video anywhere ",
                "Voice control with Android Auto",
                "Navigating with Android Auto",
                "Clear, responsive touch screen"
              ],
              insurance: {
                existenceYear: "none",
                nomineeName: "none",
                sumInsured: "none"
              }
            }
          ]
        },
        {
          name: "Speakers And Amplifiers",
          children: [
            {
              name: "16 cm (6.3) 2-Way Component Speakers",
              serialNo: "016",
              orderNo: "16",
              path: "In Car/Speakers And Amplifiers",
              imageSrc: "/assets/images/In Car/speakers & amplifiers/016.JPG",
              imei: "918888862234854",
              type: "product",
              modelNo: "HT-X8500",
              orderedDate: "26/6/2019",
              deliveryDate: "9/7/2019",
              price: "30,990",
              discount: "100",
              amountPaid: "30,890",
              warrantyPeriod: "1year",
              extendedWarranty: "1year",
              exchangable: "yes",
              specifications: {
                peakPower: "320 W",
                rmsPower: "120 W",
                size: "16 cm (6.3)",
                weight: "1.01 kg"
              },
              features: [
                "Enjoy high power 320 W peak and 75 W rated power output",
                "Acoustic distortion is minimised by a rubber surround"
              ],
              insurance: {
                existenceYear: "26/6/2019-26/6/2021",
                nomineeName: "Sony-T",
                sumInsured: "none"
              }
            },
            {
              name: "16 cm (6.3) 2-Way Component Speaker",
              serialNo: "017",
              orderNo: "17",
              path: "In Car/Speakers And Amplifiers",
              imageSrc: "/assets/images/In Car/speakers & amplifiers/017.JPG",
              imei: "996666662476654",
              type: "product",
              modelNo: "XS-XB1621C",
              orderedDate: "13/7/2014",
              deliveryDate: "17/7/2014",
              price: " 6,990",
              discount: "none",
              amountPaid: "6,990",
              warrantyPeriod: "3years",
              extendedWarranty: "none",
              exchangable: "yes",
              specifications: {
                peakPower: "350 W",
                rmsPower: "60 W",
                "weight(woofer)": "850 g",
                "weight (tweeter)": "80 g",
                "weight (networkBox)": "110 g"
              },
              features: ["Silk soft dome tweeter"],
              insurance: {
                existenceYear: "13/7/2014-13/7/2019",
                nomineeName: "Sony-I",
                sumInsured: ""
              }
            }
          ]
        }
      ]
    }
  ]
};
storiesOf("TreeView", module).add("default", () => (
  <TreeView
    treeData={treeData.children}
    rootNameKey="children"
    displayNameKey="name"
    onSelectedNode={data => {
      console.log("tree data last node", data);
    }}
    onExpandedNode={data => {
      console.log("expand tree data", data);
    }}
    expandAll={true}
  />
));
