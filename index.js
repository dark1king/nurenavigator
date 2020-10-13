var mapStructure =
{
    buildings: [
        {
            title: "a",
            floors: [
                {
                    number: "two",
                    cells: [
                        [{ type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [{ type: "wall", name: "none", door: "none" }, { type: "room", name: "36", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "37", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [{ type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "door", name: "none", door: "vertical" }, { type: "wall", name: "none", door: "none" }],
                        [{ type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "35", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "34", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "33", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "32", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "38", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "31", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "39", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "30", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "40", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "29", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "41", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "28", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "toilet", name: "🚾", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "242", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "door", name: "none", door: "horizontal" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "243", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "241", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "42", door: "left" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "244", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "240", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "27", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "door", name: "none", door: "vertical" }, { type: "stairway", name: "none", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "245", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "239", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "26", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "238", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "25", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "toilet", name: "🚾", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "237", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "door", name: "none", door: "horizontal" }, { type: "room", name: "23", door: "bottom" }, { type: "room", name: "22", door: "bottom" }, { type: "room", name: "21", door: "bottom" }, { type: "room", name: "20", door: "bottom" }, { type: "room", name: "19", door: "bottom" }, { type: "door", name: "none", door: "horizontal" }, { type: "room", name: "18", door: "bottom" }, { type: "room", name: "17", door: "bottom" }, { type: "door", name: "none", door: "horizontal" }, { type: "door", name: "none", door: "horizontal" }, { type: "room", name: "15", door: "bottom" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "246", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "236а", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "room", name: "24", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "246а", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "236", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "12,\n14,16", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "13", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "247", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "235", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "door", name: "none", door: "vertical" }, { type: "wall", name: "none", door: "none" }, , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "Кафедра иностранных языков", door: "none" }, { type: "room", name: "235а", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "9,11,\n11а", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "10", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "249", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "234а", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "6,\n8", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "stairway", name: "none", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "5,7,\n7а", door: "left" }, { type: "wall", name: "none", door: "none" }, , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "233", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "2,4,\n4а", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "3", door: "left" }, { type: "wall", name: "none", door: "none" }, , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "250", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "1", door: "left" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "💰", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "🖨", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "🖨", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "253", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "253а", door: "bottom" }, { type: "toilet", name: "🚾", door: "bottom" }, { type: "stairway", name: "none", door: "bottom" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "🍽", door: "bottom" }, { type: "room", name: "252а", door: "bottom" }, { type: "room", name: "252", door: "bottom" }, { type: "room", name: "251", door: "bottom" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "232а", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "232", door: "bottom" }, { type: "room", name: "230", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "229", door: "bottom" }, { type: "room", name: "227", door: "bottom" }, { type: "room", name: "226", door: "bottom" }, { type: "room", name: "225", door: "bottom" }, { type: "room", name: "224", door: "bottom" }, { type: "room", name: "223", door: "bottom" }, { type: "room", name: "222", door: "bottom" }, { type: "room", name: "221а", door: "bottom" }, { type: "door", name: "none", door: "horizontal" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "221", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "254", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "door", name: "none", door: "vertical" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "Расширитель", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "door", name: "none", door: "vertical" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "220", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "280", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "287б", door: "left" }, { type: "room", name: "288", door: "top" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "216", door: "top" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "door", name: "none", door: "horizontal" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "280а", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "287а", door: "left" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "215а", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "217", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "282", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "214", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "213,\n213а", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "278", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "287", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "276", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "212", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "door", name: "none", door: "horizontal" }, { type: "wall", name: "none", door: "none" }, , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "274", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "285", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "210", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "211", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "257", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "272", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "208", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "Кафедра искусственного интеллекта", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "270", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "283а", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "209", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "door", name: "none", door: "horizontal" }, { type: "wall", name: "none", door: "none" }, , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "268", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "283", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "206", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "277", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "207", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "258", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , { type: "wall", name: "none", door: "none" }, { type: "toilet", name: "🚾", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "277а", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "205", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "259", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "268а", door: "right" }, { type: "corridor", name: "Кафедра системотехники", door: "none" }, { type: "room", name: "273", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "toilet", name: "🚾", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "266", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "door", name: "none", door: "horizontal" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "stairway", name: "none", door: "bottom" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "260", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "271", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "room", name: "204", door: "right" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "201", door: "bottom" }, { type: "room", name: "200", door: "bottom" }, { type: "door", name: "none", door: "horizontal" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "261а", door: "top" }, { type: "room", name: "261", door: "top" }, { type: "room", name: "262", door: "top" }, { type: "room", name: "263", door: "top" }, { type: "room", name: "264", door: "top" }, { type: "room", name: "264а", door: "top" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "265", door: "top" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "Кафедра программной инженерии", door: "none" }, { type: "room", name: "269", door: "left" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "203", door: "top" }, { type: "room", name: "202", door: "top" }, { type: "wall", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "corridor", name: "none", door: "none" }, { type: "room", name: "🍽", door: "left" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "room", name: "267", door: "top" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "door", name: "none", door: "horizontal" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }],
                        [, , , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, , , , , , , , , , , , , , , , , , , , , { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }, { type: "wall", name: "none", door: "none" }]
                    ]
                }
            ]
        }
    ]
};
var yMaxLength;
var xMaxLength;
var LENGTH = 60;
var THICKNESS = 6;
/*if (window.innerWidth < 610 && window.innerWidth > 590 || window.innerHeight < 610 && window.innerHeight > 590)
    scale = 3;
else */
if (window.innerWidth < 450 && window.innerWidth > 360 || window.innerHeight < 450 && window.innerHeight > 360) {
    var scale = 4;
    var font = 8;
}
else if (window.innerWidth <= 360 && window.innerWidth > 320 || window.innerHeight <= 360 && window.innerHeight > 320) {
    var scale = 5;
    var font = 10;
}
else if (window.innerWidth <= 320 || window.innerHeight <= 320) {
    var scale = 6;
    var font = 7;
}
else {
    var scale = 2;
    var font = 9;
}
$(function () {
    var buildPlan = [{
        hoverEnabled: false,
        dataSource: {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    geometry: {
                        type: "Polygon",
                        coordinates: [[]]
                    }
                }
            ]
        },
        name: "building"
    }, {
        color: "transparent",
        borderWidth: 1,
        label: {
            enabled: true,
            dataField: "name",
            font: {
                family: "Segoe UI",
                size: 12,
                weight: 500
            }
        },
        dataSource: {
            type: "FeatureCollection",
            features: []
        },
        name: "rooms"
    }, {
        dataSource: [],
        type: "marker"
    }/*,
    {
        borderWidth: 6,
        dataSource: [{
            coordinates: [[
                [0, 200],
                [10, 200],
                [10, 0]
            ]]
        }],
        type: "line",
        color: "red",
    }*/
    ];

    var roomSearch = [{
        "room": "all",
        "coordinates": "null"
    }];

    yMaxLength = mapStructure.buildings[0].floors[0].cells.length;
    xMaxLength = 0;

    for (var y = 0; y < mapStructure.buildings[0].floors[0].cells.length; y++) {
        if (xMaxLength < mapStructure.buildings[0].floors[0].cells[y].length) {
            xMaxLength = mapStructure.buildings[0].floors[0].cells[y].length;
        }
    }
    for (var y = 0; y < mapStructure.buildings[0].floors[0].cells.length; y++) {
        for (var x = 0; x < mapStructure.buildings[0].floors[0].cells[y].length; x++) {
            var res = [];
            if (mapStructure.buildings[0].floors[0].cells[y][x] != undefined && mapStructure.buildings[0].floors[0].cells[y][x].type == "room" || mapStructure.buildings[0].floors[0].cells[y][x] != undefined && mapStructure.buildings[0].floors[0].cells[y][x].type == "toilet") {
                res = drawRoom(x, (mapStructure.buildings[0].floors[0].cells.length - 1 - y), LENGTH, THICKNESS, mapStructure, yMaxLength, xMaxLength);
                buildPlan[0].dataSource.features[0].geometry.coordinates[0].push(res.blockCoordinates);
                buildPlan[1].dataSource.features.push(res.roomsData);
                roomSearch.push(res.roomSearch);
            }
            else if (mapStructure.buildings[0].floors[0].cells[y][x] != undefined && mapStructure.buildings[0].floors[0].cells[y][x].type == "wall") {
                res = drawWall(x, (mapStructure.buildings[0].floors[0].cells.length - 1 - y), LENGTH, yMaxLength, xMaxLength);
                buildPlan[0].dataSource.features[0].geometry.coordinates[0].push(res.blockCoordinates);
            }
            else if (mapStructure.buildings[0].floors[0].cells[y][x] != undefined && mapStructure.buildings[0].floors[0].cells[y][x].type == "door") {
                res = drawDoor(x, (mapStructure.buildings[0].floors[0].cells.length - 1 - y), LENGTH, mapStructure, yMaxLength, xMaxLength);
                buildPlan[0].dataSource.features[0].geometry.coordinates[0].push(res.blockCoordinates);
            }
            else if (mapStructure.buildings[0].floors[0].cells[y][x] != undefined && mapStructure.buildings[0].floors[0].cells[y][x].type == "stairway") {
                res = drawSairway(x, (mapStructure.buildings[0].floors[0].cells.length - 1 - y), LENGTH, mapStructure, yMaxLength, xMaxLength);
                buildPlan[0].dataSource.features[0].geometry.coordinates[0].push(res.blockCoordinates);
            }
            else if (mapStructure.buildings[0].floors[0].cells[y][x] != undefined && mapStructure.buildings[0].floors[0].cells[y][x].type == "corridor" && mapStructure.buildings[0].floors[0].cells[y][x].name != "none") {
                buildPlan[2].dataSource.push({
                    coordinates: [(x * LENGTH) - (xMaxLength * LENGTH / 2) + (LENGTH / 2), ((mapStructure.buildings[0].floors[0].cells.length - 1 - y) * LENGTH) - (yMaxLength * LENGTH / 2) + (LENGTH / 2)],
                    attributes: {
                        name: mapStructure.buildings[0].floors[0].cells[y][x].name
                    }
                });
            }
        }
    }

    roomSearch.sort(function (a, b) {
        var nameA = a.room, nameB = b.room;
        if (nameA < nameB)  //сортируем строки по возрастанию  
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;   // Никакой сортировки
    })

    var map = $("#vector-map").dxVectorMap({
        //zoomingEnabled: false,        
        //wheelEnabled: false,
        //controlBar: { enabled: false },
        projection: {
            to: function (coordinates) {
                return [coordinates[0] / 1200, coordinates[1] / 1200];
            },

            from: function (coordinates) {
                return [coordinates[0] * 1200, coordinates[1] * 1200];
            }
        },
        loadingIndicator: {
            enabled: true
        },
        maxZoomFactor: 5,
        zoomFactor: scale,
        layers: buildPlan,
        onZoomFactorChanged: function (e) {
            map.option("zoomFactor", e.zoomFactor);
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                if (arg.layer.type === "marker") {
                    return { text: arg.attribute("name") };
                }
            }
        }
        /*tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                if (arg.layer.name === "rooms")
                    return { text: "Square: " + arg.attribute("square") + " ft&#178" };
            }
        }*/
    }).dxVectorMap("instance");

    $("#choose-room").dxSelectBox(
        {
            dataSource: roomSearch,
            width: 210,
            displayExpr: "room",
            valueExpr: "coordinates",
            value: roomSearch[0].coordinates,
            onValueChanged: function (data) {
                map.viewport(data.value);
            }
        });
});

function scout(start, finish) {
    let strt = {
        buildings:
        {
            title: "a",
            floors:
            {
                number: "two",
                coordinateX: "",
                coordinateY: "",
                cells: [[]]
            }
        }
    }
    let fnsh = {
        buildings:
        {
            title: "a",
            floors:
            {
                number: "two",
                coordinateX: "",
                coordinateY: "",
                cells: [[]]
            }
        }
    }
    for (var y = 0; y < mapStructure.buildings[0].floors[0].cells.length; y++) {
        for (var x = 0; x < mapStructure.buildings[0].floors[0].cells[y].length; x++) {
            if (mapStructure.buildings[0].floors[0].cells[y][x] != undefined && mapStructure.buildings[0].floors[0].cells[y][x].name == start) {
                strt.buildings.floors.cells[strt.buildings.floors.cells.length - 1].push(mapStructure.buildings[0].floors[0].cells[y][x]);
                strt.buildings.floors.coordinateX = x;
                strt.buildings.floors.coordinateY = y;
            }
            else if (mapStructure.buildings[0].floors[0].cells[y][x] != undefined && mapStructure.buildings[0].floors[0].cells[y][x].name == finish) {
                fnsh.buildings.floors.cells[strt.buildings.floors.cells.length - 1].push(mapStructure.buildings[0].floors[0].cells[y][x]);
                fnsh.buildings.floors.coordinateX = x;
                fnsh.buildings.floors.coordinateY = y;
            }
        }
    }
    let routes = [[]];
    let history = [];
    let checked = [];
    let cur = JSON.parse(JSON.stringify(strt));
    let isEnd = false;
    let route = 0;
    let res = 0;
    while (!isEnd) {
        checked.push(cur);
        routes[route].push(cur);

        if (isFinish(cur, fnsh)) {
            routes[route].push(fnsh);
            routes.push(routes[route]);
            route++;
            while (history.length > 0) {
                rollback(routes, route, history, cur);
                if (next(cur, checked) != "end") {
                    break;
                }
            }
        }

        let next = next(routes[route][routes[route].length - 1], checked);
        if (next != "end") {
            switch (next) {
                case "right": {
                    cur.x++;
                    break;
                }
                case "left": {
                    cur.x--;
                    break;
                }
                case "up": {
                    cur.y--;
                    break;
                }
                case "down": {
                    cur.y++;
                    break;
                }
            }
            history.push(next);
            continue;
        }

        while (history.length > 0) {
            rollback(routes, route, history, cur);
            if (next(cur, checked) != "end") {
                routes[route].pop();
                break;
            }
        }
        if (history.length == 0) {
            isEnd = true;
            for (let i = 0; i < routes.length; i++) {
                if (!routes[i].includes(fnsh)) {
                    routes.splice(i, 1);
                    i--;
                }
            }
            for (let i = 0; i < routes.length; i++) {
                if (routes[res].length > routes[i].length) {
                    res = i;
                }
            }
        }
    }
    return routes[res];
}
/*
private String next(Node cur, ArrayList < Node > checked) {
    if (cur.getX() + 1 <= buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getHeight() - 1
        && buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX() + 1, cur.getY()) != null) {
        if (buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX() + 1, cur.getY()).getClass() == Hall.class
            && !checked.contains(new Node(cur.getBuilding(), cur.getFloor(), cur.getX() + 1, cur.getY()))) {
            return "down";
        }
    }
    if (cur.getX() - 1 >= 0
        && buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX() - 1, cur.getY()) != null) {
        if (buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX() - 1, cur.getY()).getClass() == Hall.class
            && !checked.contains(new Node(cur.getBuilding(), cur.getFloor(), cur.getX() - 1, cur.getY()))) {
            return "up";
        }
    }
    if (cur.getY() + 1 <= buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getWidth() - 1
        && buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX(), cur.getY() + 1) != null) {
        if (buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX(), cur.getY() + 1).getClass() == Hall.class
            && !checked.contains(new Node(cur.getBuilding(), cur.getFloor(), cur.getX(), cur.getY() + 1))) {
            return "right";
        }
    }
    if (cur.getY() - 1 >= 0
        && buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX(), cur.getY() - 1) != null) {
        if (buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX(), cur.getY() - 1).getClass() == Hall.class
            && !checked.contains(new Node(cur.getBuilding(), cur.getFloor(), cur.getX(), cur.getY() - 1))) {
            return "left";
        }
    }
    return "end";
}

function rollback(routes, route, history, cur) {
    switch (history[history.length - 1]) {
        case "right": {
            cur.x--;
            break;
        }
        case "left": {
            cur.x++;
            break;
        }
        case "up": {
            cur.y++;
            break;
        }
        case "down": {
            cur.y--;
            break;
        }
    }
    history.splice(history.length - 1, 1);
    routes[route].splice(routes[route].length - 1);
}

function isFinish(cur, fnsh) {
    if (cur.buildings.floors.coordinateY + 1 < mapStructure.buildings[cur.getBuilding()].getFloor(cur.getFloor()).getHeight() - 1
        && buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX() + 1, cur.getY()) != null) {
        if (buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX() + 1, cur.getY()).getClass() == Room.class
            && cur.getBuilding() == fnsh.getBuilding()
            && cur.getFloor() == fnsh.getFloor()
            && cur.getX() + 1 == fnsh.getX()
            && cur.getY() == fnsh.getY()) {
            return true;
        }
    }
    if (cur.getX() - 1 >= 0
        && buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX() - 1, cur.getY()) != null) {
        if (buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX() - 1, cur.getY()).getClass() == Room.class
            && cur.getBuilding() == fnsh.getBuilding()
            && cur.getFloor() == fnsh.getFloor()
            && cur.getX() - 1 == fnsh.getX()
            && cur.getY() == fnsh.getY()) {
            return true;
        }
    }
    if (cur.getY() + 1 < buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getWidth() - 1
        && buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX(), cur.getY() + 1) != null) {
        if (buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX(), cur.getY() + 1).getClass() == Room.class
            && cur.getBuilding() == fnsh.getBuilding()
            && cur.getFloor() == fnsh.getFloor()
            && cur.getX() == fnsh.getX()
            && cur.getY() + 1 == fnsh.getY()) {
            return true;
        }
    }
    if (cur.getY() - 1 >= 0
        && buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX(), cur.getY() - 1) != null) {
        if (buildings.get(cur.getBuilding()).getFloor(cur.getFloor()).getCell(cur.getX(), cur.getY() - 1).getClass() == Room.class
            && cur.getBuilding() == fnsh.getBuilding()
            && cur.getFloor() == fnsh.getFloor()
            && cur.getX() == fnsh.getX()
            && cur.getY() - 1 == fnsh.getY()) {
            return true;
        }
    }
    return false;
}*/