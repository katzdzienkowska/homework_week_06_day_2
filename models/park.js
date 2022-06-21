const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.pop(dinosaur);
};

Park.prototype.dinosaurWithMostVisitors = function () {
    let mostVisitors = this.collectionOfDinosaurs[0];
    for (let i = 0; i < this.collectionOfDinosaurs.length; i++) {
        if (this.collectionOfDinosaurs[i].guestsAttractedPerDay > mostVisitors.guestsAttractedPerDay) {
            mostVisitors = this.collectionOfDinosaurs[i];
        };
    };
    return mostVisitors;
};

Park.prototype.findBySpecies = function (species) {
    let foundSpecies = [];
    for (let dinosaur of this.collectionOfDinosaurs) {
        if (dinosaur.species === species) {
            foundSpecies.push(dinosaur);
        }
    };
    return foundSpecies;
};

Park.prototype.totalVisitorsPerDay = function () {
    let total = 0;
    for (let i = 0; i < this.collectionOfDinosaurs.length; i++) {
        total += this.collectionOfDinosaurs[i].guestsAttractedPerDay;
    };
    return total;
};

Park.prototype.totalVisitorsPerYear = function (dinosaur) {
    let total = this.totalVisitorsPerDay() * 365;
    return total;
};

Park.prototype.totalRevenuePerYear = function () {
    let total = this.totalVisitorsPerYear() * this.ticketPrice;
    return total;
};

Park.prototype.removeBySpecies = function (species) {
    const remainingDinosaurs = [];
    for (let dinosaur of this.collectionOfDinosaurs) {
        if (dinosaur.species !== species) {
            remainingDinosaurs.push(dinosaur);
        };
    };
    this.collectionOfDinosaurs = remainingDinosaurs;
};

module.exports = Park;