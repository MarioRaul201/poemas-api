const db = require('../../database/db');

module.exports = {
  Query: {
    poets: async () => {
      const [rows] = await db.query('SELECT * FROM Poet');
      return rows;
    },
    poems: async () => {
      const [rows] = await db.query('SELECT * FROM Poem');
      return rows;
    },
    customers: async () => {
      const [rows] = await db.query('SELECT * FROM Customer');
      return rows;
    },
    poetPoems: async () => {
      // Vista Poet-Poem (Procedimiento Almacenado, RECUERDA si hay otro, necesito agregarlo)
      const [rows] = await db.query('CALL sp_poet_poems()');
      return rows[0];
    },
  },
  Mutation: {
    addPoet: async (_, args) => {
      await db.query('INSERT INTO Poet (first_name,surname,address,postcode,telephone_number) VALUES (?,?,?,?,?)',
        [args.first_name, args.surname, args.address, args.postcode, args.telephone_number]);
      return 'Poet agregado';
    },
    addPoem: async (_, args) => {
      await db.query('INSERT INTO Poem (poem_title,poem_contents,poet_code) VALUES (?,?,?)',
        [args.poem_title, args.poem_contents, args.poet_code]);
      return 'Poem agregado';
    },
    addCustomer: async (_, args) => {
      await db.query('INSERT INTO Customer (first_name,surname,address,postcode,telephone_number) VALUES (?,?,?,?,?)',
        [args.first_name, args.surname, args.address, args.postcode, args.telephone_number]);
      return 'Customer agregado';
    },
    addSale: async (_, args) => {
      await db.query('INSERT INTO Sale (date,amount,customer_code) VALUES (?,?,?)',
        [args.date, args.amount, args.customer_code]);
      return 'Sale agregada';
    },
    updateCustomer: async (_, args) => {
      await db.query('UPDATE Customer SET address=?, telephone_number=? WHERE customer_code=?',
        [args.address, args.telephone_number, args.customer_code]);
      return 'Customer actualizado';
    },
    updateSale: async (_, args) => {
      await db.query('UPDATE Sale SET amount=? WHERE sale_code=?',
        [args.amount, args.sale_code]);
      return 'Sale actualizada';
    },
    deletePoemPublication: async (_, args) => {
      await db.query('DELETE FROM Poem_Publication WHERE poem_code=? AND publication_code=?',
        [args.poem_code, args.publication_code]);
      return 'Poem_Publication eliminado';
    },
    deleteSalePublication: async (_, args) => {
      await db.query('DELETE FROM Sale_Publication WHERE sale_code=? AND publication_code=?',
        [args.sale_code, args.publication_code]);
      return 'Sale_Publication eliminado';
    },
  }
};