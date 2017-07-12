const _ = require('lodash');

const codes = [
  {
    "code": 201,
    "zip": "NJ"
  },
  {
    "code": 202,
    "zip": "DC"
  },
  {
    "code": 203,
    "zip": "CT"
  },
  {
    "code": 204,
    "zip": "MB"
  },
  {
    "code": 205,
    "zip": "AL"
  },
  {
    "code": 206,
    "zip": "WA"
  },
  {
    "code": 207,
    "zip": "ME"
  },
  {
    "code": 208,
    "zip": "ID"
  },
  {
    "code": 209,
    "zip": "CA"
  },
  {
    "code": 210,
    "zip": "TX"
  },
  {
    "code": 212,
    "zip": "NY"
  },
  {
    "code": 213,
    "zip": "CA"
  },
  {
    "code": 214,
    "zip": "TX"
  },
  {
    "code": 215,
    "zip": "PA"
  },
  {
    "code": 216,
    "zip": "OH"
  },
  {
    "code": 217,
    "zip": "IL"
  },
  {
    "code": 218,
    "zip": "MN"
  },
  {
    "code": 219,
    "zip": "IN"
  },
  {
    "code": 220,
    "zip": "OH"
  },
  {
    "code": 223,
    "zip": "PA"
  },
  {
    "code": 224,
    "zip": "IL"
  },
  {
    "code": 225,
    "zip": "LA"
  },
  {
    "code": 226,
    "zip": "ON"
  },
  {
    "code": 228,
    "zip": "MS"
  },
  {
    "code": 229,
    "zip": "GA"
  },
  {
    "code": 231,
    "zip": "MI"
  },
  {
    "code": 234,
    "zip": "OH"
  },
  {
    "code": 236,
    "zip": "BC"
  },
  {
    "code": 239,
    "zip": "FL"
  },
  {
    "code": 240,
    "zip": "MD"
  },
  {
    "code": 248,
    "zip": "MI"
  },
  {
    "code": 250,
    "zip": "BC"
  },
  {
    "code": 251,
    "zip": "AL"
  },
  {
    "code": 252,
    "zip": "NC"
  },
  {
    "code": 253,
    "zip": "WA"
  },
  {
    "code": 254,
    "zip": "TX"
  },
  {
    "code": 256,
    "zip": "AL"
  },
  {
    "code": 260,
    "zip": "IN"
  },
  {
    "code": 262,
    "zip": "WI"
  },
  {
    "code": 267,
    "zip": "PA"
  },
  {
    "code": 269,
    "zip": "MI"
  },
  {
    "code": 270,
    "zip": "KY"
  },
  {
    "code": 272,
    "zip": "PA"
  },
  {
    "code": 276,
    "zip": "VA"
  },
  {
    "code": 278,
    "zip": "MI"
  },
  {
    "code": 281,
    "zip": "TX"
  },
  {
    "code": 283,
    "zip": "OH"
  },
  {
    "code": 289,
    "zip": "ON"
  },
  {
    "code": 301,
    "zip": "MD"
  },
  {
    "code": 302,
    "zip": "DE"
  },
  {
    "code": 303,
    "zip": "CO"
  },
  {
    "code": 304,
    "zip": "WV"
  },
  {
    "code": 305,
    "zip": "FL"
  },
  {
    "code": 306,
    "zip": "SK"
  },
  {
    "code": 307,
    "zip": "WY"
  },
  {
    "code": 308,
    "zip": "NE"
  },
  {
    "code": 309,
    "zip": "IL"
  },
  {
    "code": 310,
    "zip": "CA"
  },
  {
    "code": 312,
    "zip": "IL"
  },
  {
    "code": 313,
    "zip": "MI"
  },
  {
    "code": 314,
    "zip": "MO"
  },
  {
    "code": 315,
    "zip": "NY"
  },
  {
    "code": 316,
    "zip": "KS"
  },
  {
    "code": 317,
    "zip": "IN"
  },
  {
    "code": 318,
    "zip": "LA"
  },
  {
    "code": 319,
    "zip": "IA"
  },
  {
    "code": 320,
    "zip": "MN"
  },
  {
    "code": 321,
    "zip": "FL"
  },
  {
    "code": 323,
    "zip": "CA"
  },
  {
    "code": 325,
    "zip": "TX"
  },
  {
    "code": 330,
    "zip": "OH"
  },
  {
    "code": 331,
    "zip": "IL"
  },
  {
    "code": 332,
    "zip": "NY"
  },
  {
    "code": 334,
    "zip": "AL"
  },
  {
    "code": 336,
    "zip": "NC"
  },
  {
    "code": 337,
    "zip": "LA"
  },
  {
    "code": 339,
    "zip": "MA"
  },
  {
    "code": 340,
    "zip": "VI"
  },
  {
    "code": 341,
    "zip": "CA"
  },
  {
    "code": 343,
    "zip": "ON"
  },
  {
    "code": 346,
    "zip": "TX"
  },
  {
    "code": 347,
    "zip": "NY"
  },
  {
    "code": 351,
    "zip": "MA"
  },
  {
    "code": 352,
    "zip": "FL"
  },
  {
    "code": 360,
    "zip": "WA"
  },
  {
    "code": 361,
    "zip": "TX"
  },
  {
    "code": 365,
    "zip": "ON"
  },
  {
    "code": 369,
    "zip": "CA"
  },
  {
    "code": 380,
    "zip": "OH"
  },
  {
    "code": 385,
    "zip": "UT"
  },
  {
    "code": 386,
    "zip": "FL"
  },
  {
    "code": 401,
    "zip": "RI"
  },
  {
    "code": 402,
    "zip": "NE"
  },
  {
    "code": 403,
    "zip": "AB"
  },
  {
    "code": 404,
    "zip": "GA"
  },
  {
    "code": 405,
    "zip": "OK"
  },
  {
    "code": 406,
    "zip": "MT"
  },
  {
    "code": 407,
    "zip": "FL"
  },
  {
    "code": 408,
    "zip": "CA"
  },
  {
    "code": 409,
    "zip": "TX"
  },
  {
    "code": 410,
    "zip": "MD"
  },
  {
    "code": 412,
    "zip": "PA"
  },
  {
    "code": 413,
    "zip": "MA"
  },
  {
    "code": 414,
    "zip": "WI"
  },
  {
    "code": 415,
    "zip": "CA"
  },
  {
    "code": 416,
    "zip": "ON"
  },
  {
    "code": 417,
    "zip": "MO"
  },
  {
    "code": 418,
    "zip": "QC"
  },
  {
    "code": 419,
    "zip": "OH"
  },
  {
    "code": 423,
    "zip": "TN"
  },
  {
    "code": 424,
    "zip": "CA"
  },
  {
    "code": 425,
    "zip": "WA"
  },
  {
    "code": 430,
    "zip": "TX"
  },
  {
    "code": 431,
    "zip": "MB"
  },
  {
    "code": 432,
    "zip": "TX"
  },
  {
    "code": 434,
    "zip": "VA"
  },
  {
    "code": 435,
    "zip": "UT"
  },
  {
    "code": 437,
    "zip": "ON"
  },
  {
    "code": 438,
    "zip": "QC"
  },
  {
    "code": 440,
    "zip": "OH"
  },
  {
    "code": 442,
    "zip": "CA"
  },
  {
    "code": 443,
    "zip": "MD"
  },
  {
    "code": 450,
    "zip": "QC"
  },
  {
    "code": 458,
    "zip": "OR"
  },
  {
    "code": 464,
    "zip": "IL"
  },
  {
    "code": 469,
    "zip": "TX"
  },
  {
    "code": 470,
    "zip": "GA"
  },
  {
    "code": 475,
    "zip": "CT"
  },
  {
    "code": 478,
    "zip": "GA"
  },
  {
    "code": 479,
    "zip": "AR"
  },
  {
    "code": 480,
    "zip": "AZ"
  },
  {
    "code": 481,
    "zip": "QC"
  },
  {
    "code": 484,
    "zip": "PA"
  },
  {
    "code": 501,
    "zip": "AR"
  },
  {
    "code": 502,
    "zip": "KY"
  },
  {
    "code": 503,
    "zip": "OR"
  },
  {
    "code": 504,
    "zip": "LA"
  },
  {
    "code": 505,
    "zip": "NM"
  },
  {
    "code": 506,
    "zip": "NB"
  },
  {
    "code": 507,
    "zip": "MN"
  },
  {
    "code": 508,
    "zip": "MA"
  },
  {
    "code": 509,
    "zip": "WA"
  },
  {
    "code": 510,
    "zip": "CA"
  },
  {
    "code": 512,
    "zip": "TX"
  },
  {
    "code": 513,
    "zip": "OH"
  },
  {
    "code": 514,
    "zip": "QC"
  },
  {
    "code": 515,
    "zip": "IA"
  },
  {
    "code": 516,
    "zip": "NY"
  },
  {
    "code": 517,
    "zip": "MI"
  },
  {
    "code": 518,
    "zip": "NY"
  },
  {
    "code": 519,
    "zip": "ON"
  },
  {
    "code": 520,
    "zip": "AZ"
  },
  {
    "code": 530,
    "zip": "CA"
  },
  {
    "code": 539,
    "zip": "OK"
  },
  {
    "code": 540,
    "zip": "VA"
  },
  {
    "code": 541,
    "zip": "OR"
  },
  {
    "code": 548,
    "zip": "ON"
  },
  {
    "code": 551,
    "zip": "NJ"
  },
  {
    "code": 557,
    "zip": "MO"
  },
  {
    "code": 559,
    "zip": "CA"
  },
  {
    "code": 561,
    "zip": "FL"
  },
  {
    "code": 562,
    "zip": "CA"
  },
  {
    "code": 563,
    "zip": "IA"
  },
  {
    "code": 564,
    "zip": "WA"
  },
  {
    "code": 567,
    "zip": "OH"
  },
  {
    "code": 570,
    "zip": "PA"
  },
  {
    "code": 571,
    "zip": "VA"
  },
  {
    "code": 573,
    "zip": "MO"
  },
  {
    "code": 574,
    "zip": "IN"
  },
  {
    "code": 575,
    "zip": "NM"
  },
  {
    "code": 579,
    "zip": "QC"
  },
  {
    "code": 580,
    "zip": "OK"
  },
  {
    "code": 581,
    "zip": "QC"
  },
  {
    "code": 585,
    "zip": "NY"
  },
  {
    "code": 586,
    "zip": "MI"
  },
  {
    "code": 587,
    "zip": "AB"
  },
  {
    "code": 601,
    "zip": "MS"
  },
  {
    "code": 602,
    "zip": "AZ"
  },
  {
    "code": 603,
    "zip": "NH"
  },
  {
    "code": 604,
    "zip": "BC"
  },
  {
    "code": 605,
    "zip": "SD"
  },
  {
    "code": 606,
    "zip": "KY"
  },
  {
    "code": 607,
    "zip": "NY"
  },
  {
    "code": 608,
    "zip": "WI"
  },
  {
    "code": 609,
    "zip": "NJ"
  },
  {
    "code": 610,
    "zip": "PA"
  },
  {
    "code": 612,
    "zip": "MN"
  },
  {
    "code": 613,
    "zip": "ON"
  },
  {
    "code": 614,
    "zip": "OH"
  },
  {
    "code": 615,
    "zip": "TN"
  },
  {
    "code": 616,
    "zip": "MI"
  },
  {
    "code": 617,
    "zip": "MA"
  },
  {
    "code": 618,
    "zip": "IL"
  },
  {
    "code": 619,
    "zip": "CA"
  },
  {
    "code": 620,
    "zip": "KS"
  },
  {
    "code": 623,
    "zip": "AZ"
  },
  {
    "code": 626,
    "zip": "CA"
  },
  {
    "code": 627,
    "zip": "CA"
  },
  {
    "code": 628,
    "zip": "CA"
  },
  {
    "code": 629,
    "zip": "TN"
  },
  {
    "code": 630,
    "zip": "IL"
  },
  {
    "code": 631,
    "zip": "NY"
  },
  {
    "code": 636,
    "zip": "MO"
  },
  {
    "code": 639,
    "zip": "SK"
  },
  {
    "code": 641,
    "zip": "IA"
  },
  {
    "code": 646,
    "zip": "NY"
  },
  {
    "code": 647,
    "zip": "ON"
  },
  {
    "code": 650,
    "zip": "CA"
  },
  {
    "code": 651,
    "zip": "MN"
  },
  {
    "code": 657,
    "zip": "CA"
  },
  {
    "code": 660,
    "zip": "MO"
  },
  {
    "code": 661,
    "zip": "CA"
  },
  {
    "code": 662,
    "zip": "MS"
  },
  {
    "code": 667,
    "zip": "MD"
  },
  {
    "code": 669,
    "zip": "CA"
  },
  {
    "code": 670,
    "zip": "MP"
  },
  {
    "code": 671,
    "zip": "GU"
  },
  {
    "code": 678,
    "zip": "GA"
  },
  {
    "code": 679,
    "zip": "MI"
  },
  {
    "code": 681,
    "zip": "WV"
  },
  {
    "code": 682,
    "zip": "TX"
  },
  {
    "code": 689,
    "zip": "FL"
  },
  {
    "code": 701,
    "zip": "ND"
  },
  {
    "code": 702,
    "zip": "NV"
  },
  {
    "code": 703,
    "zip": "VA"
  },
  {
    "code": 704,
    "zip": "NC"
  },
  {
    "code": 705,
    "zip": "ON"
  },
  {
    "code": 706,
    "zip": "GA"
  },
  {
    "code": 707,
    "zip": "CA"
  },
  {
    "code": 708,
    "zip": "IL"
  },
  {
    "code": 709,
    "zip": "NL"
  },
  {
    "code": 712,
    "zip": "IA"
  },
  {
    "code": 713,
    "zip": "TX"
  },
  {
    "code": 714,
    "zip": "CA"
  },
  {
    "code": 715,
    "zip": "WI"
  },
  {
    "code": 716,
    "zip": "NY"
  },
  {
    "code": 717,
    "zip": "PA"
  },
  {
    "code": 718,
    "zip": "NY"
  },
  {
    "code": 719,
    "zip": "CO"
  },
  {
    "code": 720,
    "zip": "CO"
  },
  {
    "code": 724,
    "zip": "PA"
  },
  {
    "code": 725,
    "zip": "NV"
  },
  {
    "code": 727,
    "zip": "FL"
  },
  {
    "code": 731,
    "zip": "TN"
  },
  {
    "code": 732,
    "zip": "NJ"
  },
  {
    "code": 734,
    "zip": "MI"
  },
  {
    "code": 737,
    "zip": "TX"
  },
  {
    "code": 740,
    "zip": "OH"
  },
  {
    "code": 743,
    "zip": "NC"
  },
  {
    "code": 747,
    "zip": "CA"
  },
  {
    "code": 754,
    "zip": "FL"
  },
  {
    "code": 757,
    "zip": "VA"
  },
  {
    "code": 760,
    "zip": "CA"
  },
  {
    "code": 762,
    "zip": "GA"
  },
  {
    "code": 763,
    "zip": "MN"
  },
  {
    "code": 764,
    "zip": "CA"
  },
  {
    "code": 765,
    "zip": "IN"
  },
  {
    "code": 769,
    "zip": "MS"
  },
  {
    "code": 770,
    "zip": "GA"
  },
  {
    "code": 772,
    "zip": "FL"
  },
  {
    "code": 773,
    "zip": "IL"
  },
  {
    "code": 774,
    "zip": "MA"
  },
  {
    "code": 775,
    "zip": "NV"
  },
  {
    "code": 778,
    "zip": "BC"
  },
  {
    "code": 779,
    "zip": "IL"
  },
  {
    "code": 780,
    "zip": "AB"
  },
  {
    "code": 781,
    "zip": "MA"
  },
  {
    "code": 782,
    "zip": "NS"
  },
  {
    "code": 785,
    "zip": "KS"
  },
  {
    "code": 786,
    "zip": "FL"
  },
  {
    "code": 787,
    "zip": "PR"
  },
  {
    "code": 801,
    "zip": "UT"
  },
  {
    "code": 802,
    "zip": "VT"
  },
  {
    "code": 803,
    "zip": "SC"
  },
  {
    "code": 804,
    "zip": "VA"
  },
  {
    "code": 805,
    "zip": "CA"
  },
  {
    "code": 806,
    "zip": "TX"
  },
  {
    "code": 807,
    "zip": "ON"
  },
  {
    "code": 808,
    "zip": "HI"
  },
  {
    "code": 810,
    "zip": "MI"
  },
  {
    "code": 812,
    "zip": "IN"
  },
  {
    "code": 813,
    "zip": "FL"
  },
  {
    "code": 814,
    "zip": "PA"
  },
  {
    "code": 815,
    "zip": "IL"
  },
  {
    "code": 816,
    "zip": "MO"
  },
  {
    "code": 817,
    "zip": "TX"
  },
  {
    "code": 818,
    "zip": "CA"
  },
  {
    "code": 819,
    "zip": "QC"
  },
  {
    "code": 825,
    "zip": "AB"
  },
  {
    "code": 828,
    "zip": "NC"
  },
  {
    "code": 830,
    "zip": "TX"
  },
  {
    "code": 831,
    "zip": "CA"
  },
  {
    "code": 832,
    "zip": "TX"
  },
  {
    "code": 835,
    "zip": "PA"
  },
  {
    "code": 843,
    "zip": "SC"
  },
  {
    "code": 845,
    "zip": "NY"
  },
  {
    "code": 847,
    "zip": "IL"
  },
  {
    "code": 848,
    "zip": "NJ"
  },
  {
    "code": 850,
    "zip": "FL"
  },
  {
    "code": 856,
    "zip": "NJ"
  },
  {
    "code": 857,
    "zip": "MA"
  },
  {
    "code": 858,
    "zip": "CA"
  },
  {
    "code": 859,
    "zip": "KY"
  },
  {
    "code": 860,
    "zip": "CT"
  },
  {
    "code": 862,
    "zip": "NJ"
  },
  {
    "code": 863,
    "zip": "FL"
  },
  {
    "code": 864,
    "zip": "SC"
  },
  {
    "code": 865,
    "zip": "TN"
  },
  {
    "code": 867,
    "zip": "YT"
  },
  {
    "code": 870,
    "zip": "AR"
  },
  {
    "code": 872,
    "zip": "IL"
  },
  {
    "code": 873,
    "zip": "QC"
  },
  {
    "code": 878,
    "zip": "PA"
  },
  {
    "code": 901,
    "zip": "TN"
  },
  {
    "code": 902,
    "zip": "NS"
  },
  {
    "code": 903,
    "zip": "TX"
  },
  {
    "code": 904,
    "zip": "FL"
  },
  {
    "code": 905,
    "zip": "ON"
  },
  {
    "code": 906,
    "zip": "MI"
  },
  {
    "code": 907,
    "zip": "AK"
  },
  {
    "code": 908,
    "zip": "NJ"
  },
  {
    "code": 909,
    "zip": "CA"
  },
  {
    "code": 910,
    "zip": "NC"
  },
  {
    "code": 912,
    "zip": "GA"
  },
  {
    "code": 913,
    "zip": "KS"
  },
  {
    "code": 914,
    "zip": "NY"
  },
  {
    "code": 915,
    "zip": "TX"
  },
  {
    "code": 916,
    "zip": "CA"
  },
  {
    "code": 917,
    "zip": "NY"
  },
  {
    "code": 918,
    "zip": "OK"
  },
  {
    "code": 919,
    "zip": "NC"
  },
  {
    "code": 920,
    "zip": "WI"
  },
  {
    "code": 925,
    "zip": "CA"
  },
  {
    "code": 927,
    "zip": "FL"
  },
  {
    "code": 928,
    "zip": "AZ"
  },
  {
    "code": 929,
    "zip": "NY"
  },
  {
    "code": 931,
    "zip": "TN"
  },
  {
    "code": 935,
    "zip": "CA"
  },
  {
    "code": 936,
    "zip": "TX"
  },
  {
    "code": 937,
    "zip": "OH"
  },
  {
    "code": 939,
    "zip": "PR"
  },
  {
    "code": 940,
    "zip": "TX"
  },
  {
    "code": 941,
    "zip": "FL"
  },
  {
    "code": 947,
    "zip": "MI"
  },
  {
    "code": 949,
    "zip": "CA"
  },
  {
    "code": 951,
    "zip": "CA"
  },
  {
    "code": 952,
    "zip": "MN"
  },
  {
    "code": 954,
    "zip": "FL"
  },
  {
    "code": 956,
    "zip": "TX"
  },
  {
    "code": 957,
    "zip": "NM"
  },
  {
    "code": 959,
    "zip": "CT"
  },
  {
    "code": 970,
    "zip": "CO"
  },
  {
    "code": 971,
    "zip": "OR"
  },
  {
    "code": 972,
    "zip": "TX"
  },
  {
    "code": 973,
    "zip": "NJ"
  },
  {
    "code": 975,
    "zip": "MO"
  },
  {
    "code": 978,
    "zip": "MA"
  },
  {
    "code": 979,
    "zip": "TX"
  },
  {
    "code": 980,
    "zip": "NC"
  },
  {
    "code": 984,
    "zip": "NC"
  },
  {
    "code": 985,
    "zip": "LA"
  },
  {
    "code": 989,
    "zip": "MI"
  }
];

module.exports = function () {
  let idx = _.random(0, codes.length - 1);
  let def = codes[idx];
  return def.code;
};