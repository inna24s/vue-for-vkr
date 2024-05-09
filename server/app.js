const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

const ELEMENT_DATA = [
    {position: 1,  weight: 1.0079, symbol: 'H'},
    {position: 2, weight: 4.0026, symbol: 'He'},
    {position: 3, weight: 6.941, symbol: 'Li'},
    {position: 4, weight: 9.0122, symbol: 'Be'},
    {position: 5, weight: 10.811, symbol: 'B'},
    {position: 6, weight: 12.0107, symbol: 'C'},
    {position: 7,  weight: 14.0067, symbol: 'N'},
    {position: 8, weight: 15.9994, symbol: 'O'},
    {position: 9, weight: 18.9984, symbol: 'F'},
    {position: 10, weight: 20.1797, symbol: 'Ne'},
    {position: 11, weight: 1.0079, symbol: 'H'},
    {position: 12, weight: 4.0026, symbol: 'He'},
    {position: 13, weight: 6.941, symbol: 'Li'},
    {position: 14, weight: 9.0122, symbol: 'Be'},
    {position: 15, weight: 10.811, symbol: 'B'},
    {position: 16, weight: 12.0107, symbol: 'C'},
    {position: 17, weight: 14.0067, symbol: 'N'},
    {position: 18,weight: 15.9994, symbol: 'O'},
    {position: 19, weight: 18.9984, symbol: 'F'},
    {position: 20, weight: 20.1797, symbol: 'Ne'},
    {position: 21, weight: 1.0079, symbol: 'H'},
    {position: 22, weight: 4.0026, symbol: 'He'},
    {position: 23, weight: 6.941, symbol: 'Li'},
    {position: 24, weight: 9.0122, symbol: 'Be'},
    {position: 25, weight: 10.811, symbol: 'B'},
    {position: 26,weight: 12.0107, symbol: 'C'},
    {position: 27, weight: 14.0067, symbol: 'N'},
    {position: 28, weight: 15.9994, symbol: 'O'},
    {position: 29, weight: 18.9984, symbol: 'F'},
    {position: 30, weight: 20.1797, symbol: 'Ne'},
    {position: 31, weight: 1.0079, symbol: 'H'},
    {position: 32, weight: 4.0026, symbol: 'He'},
    {position: 33, weight: 6.941, symbol: 'Li'},
    {position: 34, weight: 9.0122, symbol: 'Be'},
    {position: 35, weight: 10.811, symbol: 'B'},
    {position: 36, weight: 12.0107, symbol: 'C'},
    {position: 37, weight: 14.0067, symbol: 'N'},
    {position: 38, weight: 15.9994, symbol: 'O'},
    {position: 39, weight: 18.9984, symbol: 'F'},
    {position: 40, weight: 20.1797, symbol: 'Ne'},
    {position: 41, weight: 1.0079, symbol: 'H'},
    {position: 42, weight: 4.0026, symbol: 'He'},
    {position: 43, weight: 6.941, symbol: 'Li'},
    {position: 44, weight: 9.0122, symbol: 'Be'},
    {position: 45, weight: 10.811, symbol: 'B'},
    {position: 46, weight: 12.0107, symbol: 'C'},
    {position: 47, weight: 14.0067, symbol: 'N'},
    {position: 48, weight: 15.9994, symbol: 'O'},
    {position: 49, weight: 18.9984, symbol: 'F'},
    {position: 50, weight: 20.1797, symbol: 'Ne'},
    {position: 51, weight: 1.0079, symbol: 'H'},
    {position: 52, weight: 4.0026, symbol: 'He'},
    {position: 53, weight: 6.941, symbol: 'Li'},
    {position: 54, weight: 9.0122, symbol: 'Be'},
    {position: 55, weight: 10.811, symbol: 'B'},
    {position: 56, weight: 12.0107, symbol: 'C'},
    {position: 57, weight: 14.0067, symbol: 'N'},
    {position: 58, weight: 15.9994, symbol: 'O'},
    {position: 59, weight: 18.9984, symbol: 'F'},
    {position: 60, weight: 20.1797, symbol: 'Ne'},
    {position: 61, weight: 1.0079, symbol: 'H'},
    {position: 62, weight: 4.0026, symbol: 'He'},
    {position: 63, weight: 6.941, symbol: 'Li'},
    {position: 64, weight: 9.0122, symbol: 'Be'},
    {position: 65, weight: 10.811, symbol: 'B'},
    {position: 66, weight: 12.0107, symbol: 'C'},
    {position: 67, weight: 14.0067, symbol: 'N'},
    {position: 68, weight: 15.9994, symbol: 'O'},
    {position: 69, weight: 18.9984, symbol: 'F'},
    {position: 70, weight: 20.1797, symbol: 'Ne'},
    {position: 71, weight: 1.0079, symbol: 'H'},
    {position: 72, weight: 4.0026, symbol: 'He'},
    {position: 73, weight: 6.941, symbol: 'Li'},
    {position: 74, weight: 9.0122, symbol: 'Be'},
    {position: 75, weight: 10.811, symbol: 'B'},
    {position: 76, weight: 12.0107, symbol: 'C'},
    {position: 77, weight: 14.0067, symbol: 'N'},
    {position: 78, weight: 15.9994, symbol: 'O'},
    {position: 79, weight: 18.9984, symbol: 'F'},
    {position: 80, weight: 20.1797, symbol: 'Ne'},
    {position: 81, weight: 1.0079, symbol: 'H'},
    {position: 82, weight: 4.0026, symbol: 'He'},
    {position: 83, weight: 6.941, symbol: 'Li'},
    {position: 84, weight: 9.0122, symbol: 'Be'},
    {position: 85, weight: 10.811, symbol: 'B'},
    {position: 86, weight: 12.0107, symbol: 'C'},
    {position: 87, weight: 14.0067, symbol: 'N'},
    {position: 88, weight: 15.9994, symbol: 'O'},
    {position: 89, weight: 18.9984, symbol: 'F'},
    {position: 90, weight: 20.1797, symbol: 'Ne'},
    {position: 91, weight: 1.0079, symbol: 'H'},
    {position: 92, weight: 4.0026, symbol: 'He'},
    {position: 93, weight: 6.941, symbol: 'Li'},
    {position: 94, weight: 9.0122, symbol: 'Be'},
    {position: 95, weight: 10.811, symbol: 'B'},
    {position: 96, weight: 12.0107, symbol: 'C'},
    {position: 97, weight: 14.0067, symbol: 'N'},
    {position: 98, weight: 15.9994, symbol: 'O'},
    {position: 99, weight: 18.9984, symbol: 'F'},
    {position: 100, weight: 20.1797, symbol: 'Ne'},
    {position: 101, weight: 1.0079, symbol: 'H'},
    {position: 102, weight: 4.0026, symbol: 'He'},
    {position: 103, weight: 6.941, symbol: 'Li'},
    {position: 104, weight: 9.0122, symbol: 'Be'},
    {position: 105, weight: 10.811, symbol: 'B'},
    {position: 106, weight: 12.0107, symbol: 'C'},
    {position: 107, weight: 14.0067, symbol: 'N'},
    {position: 108, weight: 15.9994, symbol: 'O'},
    {position: 109, weight: 18.9984, symbol: 'F'},
    {position: 110, weight: 20.1797, symbol: 'Ne'},
    {position: 111, weight: 1.0079, symbol: 'H'},
    {position: 112, weight: 4.0026, symbol: 'He'},
    {position: 113, weight: 6.941, symbol: 'Li'},
    {position: 114, weight: 9.0122, symbol: 'Be'},
    {position: 115, weight: 10.811, symbol: 'B'},
    {position: 116, weight: 12.0107, symbol: 'C'},
    {position: 117, weight: 14.0067, symbol: 'N'},
    {position: 118, weight: 15.9994, symbol: 'O'},
    {position: 119, weight: 18.9984, symbol: 'F'},
    {position: 120, weight: 20.1797, symbol: 'Ne'},
    {position: 121, weight: 1.0079, symbol: 'H'},
    {position: 122, weight: 4.0026, symbol: 'He'},
    {position: 123, weight: 6.941, symbol: 'Li'},
    {position: 124, weight: 9.0122, symbol: 'Be'},
    {position: 125, weight: 10.811, symbol: 'B'},
    {position: 126, weight: 12.0107, symbol: 'C'},
    {position: 127, weight: 14.0067, symbol: 'N'},
    {position: 128, weight: 15.9994, symbol: 'O'},
    {position: 129, weight: 18.9984, symbol: 'F'},
    {position: 130, weight: 20.1797, symbol: 'Ne'},
    {position: 131, weight: 1.0079, symbol: 'H'},
    {position: 132, weight: 4.0026, symbol: 'He'},
    {position: 133, weight: 6.941, symbol: 'Li'},
    {position: 134, weight: 9.0122, symbol: 'Be'},
    {position: 135, weight: 10.811, symbol: 'B'},
    {position: 136, weight: 12.0107, symbol: 'C'},
    {position: 137, weight: 14.0067, symbol: 'N'},
    {position: 138, weight: 15.9994, symbol: 'O'},
    {position: 139, weight: 18.9984, symbol: 'F'},
    {position: 140, weight: 20.1797, symbol: 'Ne'},
    {position: 141, weight: 1.0079, symbol: 'H'},
    {position: 142, weight: 4.0026, symbol: 'He'},
    {position: 143, weight: 6.941, symbol: 'Li'},
    {position: 144, weight: 9.0122, symbol: 'Be'},
    {position: 145, weight: 10.811, symbol: 'B'},
    {position: 146, weight: 12.0107, symbol: 'C'},
    {position: 147, weight: 14.0067, symbol: 'N'},
    {position: 148, weight: 15.9994, symbol: 'O'},
    {position: 149, weight: 18.9984, symbol: 'F'},
    {position: 150, weight: 20.1797, symbol: 'Ne'},
    {position: 151, weight: 1.0079, symbol: 'H'},
    {position: 152, weight: 4.0026, symbol: 'He'},
    {position: 153, weight: 6.941, symbol: 'Li'},
    {position: 154, weight: 9.0122, symbol: 'Be'},
    {position: 155, weight: 10.811, symbol: 'B'},
    {position: 156, weight: 12.0107, symbol: 'C'},
    {position: 157, weight: 14.0067, symbol: 'N'},
    {position: 158, weight: 15.9994, symbol: 'O'},
    {position: 159, weight: 18.9984, symbol: 'F'},
    {position: 160, weight: 20.1797, symbol: 'Ne'},
    {position: 161, weight: 1.0079, symbol: 'H'},
    {position: 162, weight: 4.0026, symbol: 'He'},
    {position: 163, weight: 6.941, symbol: 'Li'},
    {position: 164, weight: 9.0122, symbol: 'Be'},
    {position: 165, weight: 10.811, symbol: 'B'},
    {position: 166, weight: 12.0107, symbol: 'C'},
    {position: 167, weight: 14.0067, symbol: 'N'},
    {position: 168, weight: 15.9994, symbol: 'O'},
    {position: 169, weight: 18.9984, symbol: 'F'},
    {position: 170, weight: 20.1797, symbol: 'Ne'},
    {position: 171, weight: 1.0079, symbol: 'H'},
    {position: 172, weight: 4.0026, symbol: 'He'},
    {position: 173, weight: 6.941, symbol: 'Li'},
    {position: 174, weight: 9.0122, symbol: 'Be'},
    {position: 175, weight: 10.811, symbol: 'B'},
    {position: 176, weight: 12.0107, symbol: 'C'},
    {position: 177, weight: 14.0067, symbol: 'N'},
    {position: 178, weight: 15.9994, symbol: 'O'},
    {position: 179, weight: 18.9984, symbol: 'F'},
    {position: 180, weight: 20.1797, symbol: 'Ne'},
    {position: 181, weight: 1.0079, symbol: 'H'},
    {position: 182, weight: 4.0026, symbol: 'He'},
    {position: 183, weight: 6.941, symbol: 'Li'},
    {position: 184, weight: 9.0122, symbol: 'Be'},
    {position: 185, weight: 10.811, symbol: 'B'},
    {position: 186, weight: 12.0107, symbol: 'C'},
    {position: 187, weight: 14.0067, symbol: 'N'},
    {position: 188, weight: 15.9994, symbol: 'O'},
    {position: 189, weight: 18.9984, symbol: 'F'},
    {position: 190, weight: 20.1797, symbol: 'Ne'},
    {position: 191, weight: 1.0079, symbol: 'H'},
    {position: 192, weight: 4.0026, symbol: 'He'},
    {position: 193, weight: 6.941, symbol: 'Li'},
    {position: 194, weight: 9.0122, symbol: 'Be'},
    {position: 195, weight: 10.811, symbol: 'B'},
    {position: 196, weight: 12.0107, symbol: 'C'},
    {position: 197, weight: 14.0067, symbol: 'N'},
    {position: 198, weight: 15.9994, symbol: 'O'},
    {position: 199, weight: 18.9984, symbol: 'F'},
    {position: 200, weight: 20.1797, symbol: 'Ne'},
    {position: 201, weight: 1.0079, symbol: 'H'},
    {position: 202, weight: 4.0026, symbol: 'He'},
    {position: 203, weight: 6.941, symbol: 'Li'},
    {position: 204, weight: 9.0122, symbol: 'Be'},
    {position: 205, weight: 10.811, symbol: 'B'},
    {position: 206, weight: 12.0107, symbol: 'C'},
    {position: 207, weight: 14.0067, symbol: 'N'},
    {position: 208, weight: 15.9994, symbol: 'O'},
    {position: 209, weight: 18.9984, symbol: 'F'},
    {position: 210, weight: 20.1797, symbol: 'Ne'},
    {position: 211, weight: 1.0079, symbol: 'H'},
    {position: 212, weight: 4.0026, symbol: 'He'},
    {position: 213, weight: 6.941, symbol: 'Li'},
    {position: 214, weight: 9.0122, symbol: 'Be'},
    {position: 215, weight: 10.811, symbol: 'B'},
    {position: 216, weight: 12.0107, symbol: 'C'},
    {position: 217, weight: 14.0067, symbol: 'N'},
    {position: 218, weight: 15.9994, symbol: 'O'},
    {position: 219, weight: 18.9984, symbol: 'F'},
    {position: 220, weight: 20.1797, symbol: 'Ne'},
    {position: 221, weight: 1.0079, symbol: 'H'},
    {position: 222, weight: 4.0026, symbol: 'He'},
    {position: 223, weight: 6.941, symbol: 'Li'},
    {position: 224, weight: 9.0122, symbol: 'Be'},
    {position: 225, weight: 10.811, symbol: 'B'},
    {position: 226, weight: 12.0107, symbol: 'C'},
    {position: 227, weight: 14.0067, symbol: 'N'},
    {position: 228, weight: 15.9994, symbol: 'O'},
    {position: 229, weight: 18.9984, symbol: 'F'},
    {position: 230, weight: 20.1797, symbol: 'Ne'},
    {position: 231, weight: 1.0079, symbol: 'H'},
    {position: 232, weight: 4.0026, symbol: 'He'},
    {position: 233, weight: 6.941, symbol: 'Li'},
    {position: 234, weight: 9.0122, symbol: 'Be'},
    {position: 235, weight: 10.811, symbol: 'B'},
    {position: 236, weight: 12.0107, symbol: 'C'},
    {position: 237, weight: 14.0067, symbol: 'N'},
    {position: 238, weight: 15.9994, symbol: 'O'},
    {position: 239, weight: 18.9984, symbol: 'F'},
    {position: 240, weight: 20.1797, symbol: 'Ne'},
    {position: 241, weight: 1.0079, symbol: 'H'},
    {position: 242, weight: 4.0026, symbol: 'He'},
    {position: 243, weight: 6.941, symbol: 'Li'},
    {position: 244, weight: 9.0122, symbol: 'Be'},
    {position: 245, weight: 10.811, symbol: 'B'},
    {position: 246, weight: 12.0107, symbol: 'C'},
    {position: 247, weight: 14.0067, symbol: 'N'},
    {position: 248, weight: 15.9994, symbol: 'O'},
    {position: 249, weight: 18.9984, symbol: 'F'},
    {position: 250, weight: 20.1797, symbol: 'Ne'},
    {position: 251, weight: 1.0079, symbol: 'H'},
    {position: 252, weight: 4.0026, symbol: 'He'},
    {position: 253, weight: 6.941, symbol: 'Li'},
    {position: 254, weight: 9.0122, symbol: 'Be'},
    {position: 255, weight: 10.811, symbol: 'B'},
    {position: 256, weight: 12.0107, symbol: 'C'},
    {position: 257, weight: 14.0067, symbol: 'N'},
    {position: 258, weight: 15.9994, symbol: 'O'},
    {position: 259, weight: 18.9984, symbol: 'F'},
    {position: 260, weight: 20.1797, symbol: 'Ne'},
    {position: 261, weight: 1.0079, symbol: 'H'},
    {position: 262, weight: 4.0026, symbol: 'He'},
    {position: 263, weight: 6.941, symbol: 'Li'},
    {position: 264, weight: 9.0122, symbol: 'Be'},
    {position: 265, weight: 10.811, symbol: 'B'},
    {position: 266, weight: 12.0107, symbol: 'C'},
    {position: 267, weight: 14.0067, symbol: 'N'},
    {position: 268, weight: 15.9994, symbol: 'O'},
    {position: 269, weight: 18.9984, symbol: 'F'},
    {position: 270, weight: 20.1797, symbol: 'Ne'},
    {position: 271, weight: 1.0079, symbol: 'H'},
    {position: 272, weight: 4.0026, symbol: 'He'},
    {position: 273, weight: 6.941, symbol: 'Li'},
    {position: 274, weight: 9.0122, symbol: 'Be'},
    {position: 275, weight: 10.811, symbol: 'B'},
    {position: 276, weight: 12.0107, symbol: 'C'},
    {position: 277, weight: 14.0067, symbol: 'N'},
    {position: 278, weight: 15.9994, symbol: 'O'},
    {position: 279, weight: 18.9984, symbol: 'F'},
    {position: 280, weight: 20.1797, symbol: 'Ne'},
    {position: 281, weight: 1.0079, symbol: 'H'},
    {position: 282, weight: 4.0026, symbol: 'He'},
    {position: 283, weight: 6.941, symbol: 'Li'},
    {position: 284, weight: 9.0122, symbol: 'Be'},
    {position: 285, weight: 10.811, symbol: 'B'},
    {position: 286, weight: 12.0107, symbol: 'C'},
    {position: 287, weight: 14.0067, symbol: 'N'},
    {position: 288, weight: 15.9994, symbol: 'O'},
    {position: 289, weight: 18.9984, symbol: 'F'},
    {position: 290, weight: 20.1797, symbol: 'Ne'},
    {position: 291, weight: 1.0079, symbol: 'H'},
    {position: 292, weight: 4.0026, symbol: 'He'},
    {position: 293, weight: 6.941, symbol: 'Li'},
    {position: 294, weight: 9.0122, symbol: 'Be'},
    {position: 295, weight: 10.811, symbol: 'B'},
    {position: 296, weight: 12.0107, symbol: 'C'},
    {position: 297, weight: 14.0067, symbol: 'N'},
    {position: 298, weight: 15.9994, symbol: 'O'},
    {position: 299, weight: 18.9984, symbol: 'F'},
    {position: 300, weight: 20.1797, symbol: 'Ne'},
    {position: 301, weight: 1.0079, symbol: 'H'},
    {position: 302, weight: 4.0026, symbol: 'He'},
    {position: 303, weight: 6.941, symbol: 'Li'},
    {position: 304, weight: 9.0122, symbol: 'Be'},
    {position: 305, weight: 10.811, symbol: 'B'},
    {position: 306, weight: 12.0107, symbol: 'C'},
    {position: 307, weight: 14.0067, symbol: 'N'},
    {position: 308, weight: 15.9994, symbol: 'O'},
    {position: 309, weight: 18.9984, symbol: 'F'},
    {position: 310, weight: 20.1797, symbol: 'Ne'},
    {position: 311, weight: 1.0079, symbol: 'H'},
    {position: 312, weight: 4.0026, symbol: 'He'},
    {position: 313, weight: 6.941, symbol: 'Li'},
    {position: 314, weight: 9.0122, symbol: 'Be'},
    {position: 315, weight: 10.811, symbol: 'B'},
    {position: 316, weight: 12.0107, symbol: 'C'},
    {position: 317, weight: 14.0067, symbol: 'N'},
    {position: 318, weight: 15.9994, symbol: 'O'},
    {position: 319, weight: 18.9984, symbol: 'F'},
    {position: 320, weight: 20.1797, symbol: 'Ne'},
    {position: 321, weight: 1.0079, symbol: 'H'},
    {position: 322, weight: 4.0026, symbol: 'He'},
    {position: 323, weight: 6.941, symbol: 'Li'},
    {position: 324, weight: 9.0122, symbol: 'Be'},
    {position: 325, weight: 10.811, symbol: 'B'},
    {position: 326, weight: 12.0107, symbol: 'C'},
    {position: 327, weight: 14.0067, symbol: 'N'},
    {position: 328, weight: 15.9994, symbol: 'O'},
    {position: 329, weight: 18.9984, symbol: 'F'},
    {position: 330, weight: 20.1797, symbol: 'Ne'},
    {position: 331, weight: 1.0079, symbol: 'H'},
    {position: 332, weight: 4.0026, symbol: 'He'},
    {position: 333, weight: 6.941, symbol: 'Li'},
    {position: 334, weight: 9.0122, symbol: 'Be'},
    {position: 335, weight: 10.811, symbol: 'B'},
    {position: 336, weight: 12.0107, symbol: 'C'},
    {position: 337, weight: 14.0067, symbol: 'N'},
    {position: 338, weight: 15.9994, symbol: 'O'},
    {position: 339, weight: 18.9984, symbol: 'F'},
    {position: 340, weight: 20.1797, symbol: 'Ne'},
    {position: 341, weight: 1.0079, symbol: 'H'},
    {position: 342, weight: 4.0026, symbol: 'He'},
    {position: 343, weight: 6.941, symbol: 'Li'},
    {position: 344, weight: 9.0122, symbol: 'Be'},
    {position: 345, weight: 10.811, symbol: 'B'},
    {position: 346, weight: 12.0107, symbol: 'C'},
    {position: 347, weight: 14.0067, symbol: 'N'},
    {position: 348, weight: 15.9994, symbol: 'O'},
    {position: 349, weight: 18.9984, symbol: 'F'},
    {position: 350, weight: 20.1797, symbol: 'Ne'},
    {position: 351, weight: 1.0079, symbol: 'H'},
    {position: 352, weight: 4.0026, symbol: 'He'},
    {position: 353, weight: 6.941, symbol: 'Li'},
    {position: 354, weight: 9.0122, symbol: 'Be'},
    {position: 355, weight: 10.811, symbol: 'B'},
    {position: 356, weight: 12.0107, symbol: 'C'},
    {position: 357, weight: 14.0067, symbol: 'N'},
    {position: 358, weight: 15.9994, symbol: 'O'},
    {position: 359, weight: 18.9984, symbol: 'F'},
    {position: 360, weight: 20.1797, symbol: 'Ne'},
    {position: 361, weight: 1.0079, symbol: 'H'},
    {position: 362, weight: 4.0026, symbol: 'He'},
    {position: 363, weight: 6.941, symbol: 'Li'},
    {position: 364, weight: 9.0122, symbol: 'Be'},
    {position: 365, weight: 10.811, symbol: 'B'},
    {position: 366, weight: 12.0107, symbol: 'C'},
    {position: 367, weight: 14.0067, symbol: 'N'},
    {position: 368, weight: 15.9994, symbol: 'O'},
    {position: 369, weight: 18.9984, symbol: 'F'},
    {position: 370, weight: 20.1797, symbol: 'Ne'},
    {position: 371, weight: 1.0079, symbol: 'H'},
    {position: 372, weight: 4.0026, symbol: 'He'},
    {position: 373, weight: 6.941, symbol: 'Li'},
    {position: 374, weight: 9.0122, symbol: 'Be'},
    {position: 375, weight: 10.811, symbol: 'B'},
    {position: 376, weight: 12.0107, symbol: 'C'},
    {position: 377, weight: 14.0067, symbol: 'N'},
    {position: 378, weight: 15.9994, symbol: 'O'},
    {position: 379, weight: 18.9984, symbol: 'F'},
    {position: 380, weight: 20.1797, symbol: 'Ne'},
    {position: 381, weight: 1.0079, symbol: 'H'},
    {position: 382, weight: 4.0026, symbol: 'He'},
    {position: 383, weight: 6.941, symbol: 'Li'},
    {position: 384, weight: 9.0122, symbol: 'Be'},
    {position: 385, weight: 10.811, symbol: 'B'},
    {position: 386, weight: 12.0107, symbol: 'C'},
    {position: 387, weight: 14.0067, symbol: 'N'},
    {position: 388, weight: 15.9994, symbol: 'O'},
    {position: 389, weight: 18.9984, symbol: 'F'},
    {position: 390, weight: 20.1797, symbol: 'Ne'},
    {position: 391, weight: 1.0079, symbol: 'H'},
    {position: 392, weight: 4.0026, symbol: 'He'},
    {position: 393, weight: 6.941, symbol: 'Li'},
    {position: 394, weight: 9.0122, symbol: 'Be'},
    {position: 395, weight: 10.811, symbol: 'B'},
    {position: 396, weight: 12.0107, symbol: 'C'},
    {position: 397, weight: 14.0067, symbol: 'N'},
    {position: 398, weight: 15.9994, symbol: 'O'},
    {position: 399, weight: 18.9984, symbol: 'F'},
    {position: 400, weight: 20.1797, symbol: 'Ne'}
];

const symbols = ['H', 'He', 'Be', 'Li', 'B', 'C', 'N', 'O', 'F', 'Ne'];
const weights = [1.0079, 4.0026, 6.941, 9.0122, 10.811, 12.0107, 14.0067, 15.9994, 18.9984, 20.1797];

let showCount = 0;
// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/getTable', (req, res) => {
    const { count } = req.query;
    if (count > ELEMENT_DATA.length) {
        const expArray = buildData(count);
        ELEMENT_DATA.push(...expArray);
    }
    showCount = Number(count);
    res.send(ELEMENT_DATA.slice(0, count));
});

app.get('/add', (req, res) => {
    const { count } = req.query;
    showCount += Number(count);
    if (showCount > ELEMENT_DATA.length) {
        const expArray = buildData(showCount);
        ELEMENT_DATA.push(...expArray);
    }
    res.send(ELEMENT_DATA.slice(0, showCount));
});

app.post('/updateRow', (req, res) => {
    const { all } = req.body;
    for (let i = 0; i < showCount; i += all==="5" ? 5 : 1) {
        ELEMENT_DATA[i].symbol += ' !!!'
    }
    res.send(ELEMENT_DATA.slice(0, showCount));
});

app.post('/clear', (req, res) => {
    for (let i = 0; i < showCount; i ++) {
        if (ELEMENT_DATA[i].symbol.includes(' !!!'))
            ELEMENT_DATA[i].symbol = ELEMENT_DATA[i].symbol.replace(' !!!', "");
    }
    showCount = 0;
    res.send(true);
});

app.post('/createElement', (req, res) => {
    const { symbol, weight } = req.body;
    ELEMENT_DATA[showCount + 1] = {
        position: showCount + 2,
        symbol: symbol,
        weight: weight
    }
    res.send(true);
});

const buildData = (count = 1000) => {
    const data = ELEMENT_DATA;
    for (let i = ELEMENT_DATA.length; i < count; i++) {
        data[i]={position: i + 1, weight: weights[_random(weights.length)], symbol: symbols[_random(symbols.length)] };
    }
    return data;
}

const _random = (max) => {
    return Math.round(Math.random() * 1000) % max;
}
