const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10, []);
    dinosaur1 = new Dinosaur('Diplodocus', 'Herbivore', 25);
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 45);
    dinosaur3 = new Dinosaur('Khaan', 'Omnivore', 15);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurWithMostVisitors();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findBySpecies('Khaan');
    assert.deepStrictEqual(actual, [dinosaur3]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 85);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 31025);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 310250);
  });

  it('should remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeBySpecies('Khaan');
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

});
