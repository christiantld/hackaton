/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-return-await */
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return await knex('services')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('services').insert([
        { type: 'Lanches', image: 'alimentacao.svg' },
        { type: 'Pizza', image: 'automotivo.svg' },
        { type: 'Vegetariana', image: 'beleza.svg' },
        { type: 'Café', image: 'limpeza.svg' },
        { type: 'Doces & Bolos', image: 'mercado.svg' },
        { type: 'Padaria', image: 'papelaria.svg' },
        { type: 'Asiática', image: 'pet.svg' },
        { type: 'Italiana', image: 'saude.svg' },
        { type: 'Açaí', image: 'servicosGerais.svg' },
      ]);
    });
}
