function drawRoom(x, y, length, thickness, mapStructure, yMaxLength, xMaxLength) {
    var blockCoordinates;
    var roomCoordinates;
    var roomSearch;
    var x1 = x;
    var y1 = y;
    x = (x * length) - (xMaxLength * length / 2);
    y = (y * length) - (yMaxLength * length / 2);
    if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].type == "room" && mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "right" || mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].type == "toilet" && mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "right") {
        blockCoordinates = [
            [x, y],
            [x, y + length],
            [x + length, y + length],
            [x + length, y + (length - length / 3)],
            [x + length - thickness, y + (length - length / 3)],
            [x + length - thickness, y + length - thickness],
            [x + thickness, y + length - thickness],
            [x + thickness, y + thickness],
            [x + length - thickness, y + thickness],
            [x + length - thickness, y + length / 3],
            [x + length, y + length / 3],
            [x + length, y]
        ];
        roomCoordinates = [
            [x + length - thickness, y + length - thickness],
            [x + thickness, y + length - thickness],
            [x + thickness, y + thickness],
            [x + length - thickness, y + thickness]
        ];
        roomSearch =  {
            "room": mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].name,
            "coordinates": [x, y + length, x + length, y]
        }
    }
    else if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].type == "room" && mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "left" || mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].type == "toilet" && mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "left") {
        blockCoordinates = [
            [x, y],
            [x, y + length / 3],
            [x + thickness, y + length / 3],
            [x + thickness, y + thickness],
            [x + length - thickness, y + thickness],
            [x + length - thickness, y + length - thickness],
            [x + thickness, y + length - thickness],
            [x + thickness, y + (length - length / 3)],
            [x, y + (length - length / 3)],
            [x, y + length],
            [x + length, y + length],
            [x + length, y]
        ];
        roomCoordinates = [
            [x + thickness, y + thickness],
            [x + length - thickness, y + thickness],
            [x + length - thickness, y + length - thickness],
            [x + thickness, y + length - thickness]
        ];
        roomSearch =  {
            "room": mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].name,
            "coordinates": [x, y + length, x + length, y]
        }
    }
    else if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].type == "room" && mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "top" || mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].type == "toilet" && mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "top") {
        blockCoordinates = [
            [x, y],
            [x, y + length],
            [x + length / 3, y + length],
            [x + length / 3, y + length - thickness],
            [x + thickness, y + length - thickness],
            [x + thickness, y + thickness],
            [x + length - thickness, y + thickness],
            [x + length - thickness, y + length - thickness],
            [x + (length - length / 3), y + length - thickness],
            [x + (length - length / 3), y + length],
            [x + length, y + length],
            [x + length, y]
        ];
        roomCoordinates = [
            [x + thickness, y + length - thickness],
            [x + thickness, y + thickness],
            [x + length - thickness, y + thickness],
            [x + length - thickness, y + length - thickness]
        ];
        roomSearch =  {
            "room": mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].name,
            "coordinates": [x, y + length, x + length, y]
        }
    }
    else if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].type == "room" && mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "bottom" || mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].type == "toilet" && mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "bottom") {
        blockCoordinates = [
            [x, y],
            [x, y + length],
            [x + length, y + length],
            [x + length, y],
            [x + (length - length / 3), y],
            [x + (length - length / 3), y + thickness],
            [x + length - thickness, y + thickness],
            [x + length - thickness, y + length - thickness],
            [x + thickness, y + length - thickness],
            [x + thickness, y + thickness],
            [x + length / 3, y + thickness],
            [x + length / 3, y]
        ];
        roomCoordinates = [
            [x + length - thickness, y + thickness],
            [x + length - thickness, y + length - thickness],
            [x + thickness, y + length - thickness],
            [x + thickness, y + thickness]
        ];
        roomSearch =  {
            "room": mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].name,
            "coordinates": [x, y + length, x + length, y]
        }
    }
    else {
        blockCoordinates = [
            [x, y],
            [x, y + length],
            [x + length, y + length],
            [x + length, y]
        ];
    }
    var roomsData = {
        type: "Feature",
        properties: {
            name: mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].name
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                roomCoordinates
            ]]
        }
    }
    var res = {
        blockCoordinates, roomsData, roomSearch
    };
    return res;
};

function drawSairway(x, y, length, mapStructure, yMaxLength, xMaxLength) {
    var blockCoordinates;
    var x1 = x;
    var y1 = y;
    x = (x * length) - (xMaxLength * length / 2);
    y = (y * length) - (yMaxLength * length / 2);
    if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "left") {
        blockCoordinates = [
            [x, y],
            [x, y + length / 3],
            [x + 4, y + length / 3],
            [x + 4, y + 1],
            [x + 18, y + 1],
            [x + 18, y + length / 3],
            [x + 22, y + length / 3],
            [x + 22, y + 1],
            [x + 36, y + 1],
            [x + 36, y + length / 3],
            [x + 40, y + length / 3],
            [x + 40, y + 1],
            [x + length - 1, y + 1],
            [x + length - 1, y + length / 2 - 2],
            [x, y + length / 2 - 2],
            [x, y + length / 2 + 2],
            [x + length - 1, y + length / 2 + 2],
            [x + length - 1, y + (length - length / 3)],
            [x + length - 5, y + (length - length / 3)],
            [x + length - 5, y + length - 1],
            [x + length - 19, y + length - 1],
            [x + length - 19, y + (length - length / 3)],
            [x + length - 23, y + (length - length / 3)],
            [x + length - 23, y + length - 1],
            [x + length - 37, y + length - 1],
            [x + length - 37, y + (length - length / 3)],
            [x + length - 41, y + (length - length / 3)],
            [x + length - 41, y + length],
            [x + length, y + length],
            [x + length, y]
        ];
    }
    else if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "right") {
        blockCoordinates = [
            [x, y],
            [x, y + length],
            [x + length, y + length],
            [x + length, y + (length - length / 3)],
            [x + length - 4, y + (length - length / 3)],
            [x + length - 4, y + length - 1],
            [x + length - 18, y + length - 1],
            [x + length - 18, y + (length - length / 3)],
            [x + length - 22, y + (length - length / 3)],
            [x + length - 22, y + length - 1],
            [x + length - 36, y + length - 1],
            [x + length - 36, y + (length - length / 3)],
            [x + length - 40, y + (length - length / 3)],
            [x + length - 40, y + length - 1],
            [x + 1, y + length - 1],
            [x + 1, y + length / 2 + 2],
            [x + length, y + length / 2 + 2],
            [x + length, y + length / 2 - 2],
            [x + 1, y + length / 2 - 2],
            [x + 1, y + length / 3],
            [x + 5, y + length / 3],
            [x + 5, y + 1],
            [x + 19, y + 1],
            [x + 19, y + length / 3],
            [x + 23, y + length / 3],
            [x + 23, y + 1],
            [x + 37, y + 1],
            [x + 37, y + length / 3],
            [x + 41, y + length / 3],
            [x + 41, y]
        ];
    }
    else {
        blockCoordinates = [
            [x, y + length - 41],
            [x, y + length],
            [x + length, y + length],
            [x + length, y],
            [x + (length - length / 3), y],
            [x + (length - length / 3), y + 4],
            [x + length - 1, y + 4],
            [x + length - 1, y + 18],
            [x + (length - length / 3), y + 18],
            [x + (length - length / 3), y + 22],
            [x + length - 1, y + 22],
            [x + length - 1, y + 36],
            [x + (length - length / 3), y + 36],
            [x + (length - length / 3), y + 40],
            [x + length - 1, y + 40],
            [x + length - 1, y + length - 1],
            [x + (length / 2 + 2), y + length - 1],
            [x + (length / 2 + 2), y],
            [x + (length / 2 - 2), y],
            [x + (length / 2 - 2), y + length - 1],
            [x + length / 3, y + length - 1],
            [x + length / 3, y + length - 5],
            [x + 1, y + length - 5],
            [x + 1, y + length - 19],
            [x + length / 3, y + length - 19],
            [x + length / 3, y + length - 23],
            [x + 1, y + length - 23],
            [x + 1, y + length - 37],
            [x + length / 3, y + length - 37],
            [x + length / 3, y + length - 41],
        ];
    }
    var res = {
        blockCoordinates
    };
    return res;
}

function drawDoor(x, y, length, mapStructure, yMaxLength, xMaxLength) {
    var blockCoordinates;
    var x1 = x;
    var y1 = y;
    x = (x * length) - (xMaxLength * length / 2);
    y = (y * length) - (yMaxLength * length / 2);
    if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "vertical") {
        blockCoordinates = [
            [x + (length / 2 - 3), y],
            [x + (length / 2 - 3), y + length / 3],
            [x + (length / 2 - 1), y + length / 3],
            [x + (length / 2 - 1), y + (length - length / 3)],
            [x + (length / 2 - 3), y + (length - length / 3)],
            [x + (length / 2 - 3), y + length],
            [x + (length / 2 + 3), y + length],
            [x + (length / 2 + 3), y + (length - length / 3)],
            [x + (length / 2 + 1), y + (length - length / 3)],
            [x + (length / 2 + 1), y + length / 3],
            [x + (length / 2 + 3), y + length / 3],
            [x + (length / 2 + 3), y]
        ];
    }
    else {
        blockCoordinates = [
            [x, y + (length / 2 - 3)],
            [x, y + (length / 2 + 3)],
            [x + length / 3, y + (length / 2 + 3)],
            [x + length / 3, y + (length / 2 + 1)],
            [x + (length - length / 3), y + (length / 2 + 1)],
            [x + (length - length / 3), y + (length / 2 + 3)],
            [x + length, y + (length / 2 + 3)],
            [x + length, y + (length / 2 - 3)],
            [x + (length - length / 3), y + (length / 2 - 3)],
            [x + (length - length / 3), y + (length / 2 - 1)],
            [x + length / 3, y + (length / 2 - 1)],
            [x + length / 3, y + (length / 2 - 3)]
        ];
    }
    var res = {
        blockCoordinates
    };
    return res;
}

function drawWall(x, y, length, yMaxLength, xMaxLength) {
    x = (x * length) - (xMaxLength * length / 2);
    y = (y * length) - (yMaxLength * length / 2);
    var blockCoordinates = [
        [x, y],
        [x, y + length],
        [x + length, y + length],
        [x + length, y]
    ];
    var res = {
        blockCoordinates
    };
    return res;
}

function drawCorridor(x, y, length, thickness, mapStructure, yMaxLength, xMaxLength) {
    var roomCoordinates;
    var x1 = x;
    var y1 = y;
    var corridorCounter = 0;
    x = (x * length) - (xMaxLength * length / 2);
    y = (y * length) - (yMaxLength * length / 2);
    if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "top") {
        for (; mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1 - corridorCounter][x1].type != "corridorFinish"; corridorCounter++) { }
        roomCoordinates = [
            [x, y],
            [x, y + length * (corridorCounter + 1)],
            [x + length, y + length * (corridorCounter + 1)],
            [x + length, y]
        ];
    }
    else if (mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].door == "right") {
        for (; mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1 + corridorCounter].type != "corridorFinish"; corridorCounter++) { }
        roomCoordinates = [
            [x, y],
            [x, y + length],
            [x + length * (corridorCounter + 1), y + length],
            [x + length * (corridorCounter + 1), y]
        ];
    }
    var roomsData = {
        type: "Feature",
        properties: {
            name: mapStructure.buildings[0].floors[0].cells[mapStructure.buildings[0].floors[0].cells.length - y1 - 1][x1].name
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                roomCoordinates
            ]]
        }
    }
    var res = {
        roomsData
    };
    return res;
}