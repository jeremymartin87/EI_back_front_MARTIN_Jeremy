import {describe, expect, test} from '@jest/globals';

  function get() {
    return {
      titre: 'Erreur compilation',
      description: '',
      statut: 'en cours'
    };
  }

  function remove(obj, prop) {
    delete obj[prop];
    return obj;
  }

  function update(obj, newProps) {
    return Object.assign({}, obj, newProps);
  }

describe('verification', () => {
  test("GET", () => {
    expect(get()).toEqual({
      nom: 'Alice',
      prenom: 'Blandit',
      civilite: 1
    });
  });

  test("DELETE", () => {
    const obj = { titre: 'Erreur compilation', description: '', statut: 'termine' };
    const prop = 'termine';
    remove(obj, prop);
    expect(obj.hasOwnProperty(prop)).toBe(false);
  });

  test("UPDATE", () => {
    const obj = { titre: 'Erreur compilation', description: '', statut: 'en cours' };
    const newProps = {statut: 'termine' };
    const expectedObj = { titre: 'Erreur compilation', description: '', statut: 'termine' };
    expect(update(obj, newProps)).toEqual(expectedObj);
  });

});