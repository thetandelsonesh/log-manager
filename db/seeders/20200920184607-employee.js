'use strict';
const { v4: uuid } = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *  name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('employees', [{
      id: uuid(),
      name: "Zoolab",
      dob: "1993-07-14",
      email_id: "mbirwhistle0@surveymonkey.com",
      gender: "FEMALE",
      employee_id: "03-9724071",
      designation: "Structural Engineer",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Y-Solowarm",
      dob: "2000-11-13",
      email_id: "asobey1@vimeo.com",
      gender: "MALE",
      employee_id: "67-1231679",
      designation: "Financial Analyst",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Konklab",
      dob: "1997-12-22",
      email_id: "bseago2@odnoklassniki.ru",
      gender: "FEMALE",
      employee_id: "96-7824918",
      designation: "Administrative Assistant I",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Otcom",
      dob: "1992-12-30",
      email_id: "fdowry3@mapquest.com",
      gender: "OTHERS",
      employee_id: "72-2610444",
      designation: "Financial Advisor",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Bitchip",
      dob: "1993-07-28",
      email_id: "rcissen4@hc360.com",
      gender: "MALE",
      employee_id: "37-6960701",
      designation: "Executive Secretary",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Opela",
      dob: "1996-02-14",
      email_id: "scasiroli5@psu.edu",
      gender: "MALE",
      employee_id: "51-8239707",
      designation: "Recruiting Manager",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Hatity",
      dob: "1991-03-20",
      email_id: "hjerrard6@imdb.com",
      gender: "FEMALE",
      employee_id: "97-0643515",
      designation: "Financial Advisor",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Veribet",
      dob: "1993-12-18",
      email_id: "raron7@wordpress.com",
      gender: "FEMALE",
      employee_id: "85-2398926",
      designation: "Director of Sales",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Cardguard",
      dob: "1999-02-12",
      email_id: "mheinl8@slashdot.org",
      gender: "MALE",
      employee_id: "81-7984239",
      designation: "Mechanical Systems Engineer",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Home Ing",
      dob: "1996-04-17",
      email_id: "mlowther9@stanford.edu",
      gender: "OTHERS",
      employee_id: "14-9504001",
      designation: "Recruiter",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Flexidy",
      dob: "1997-07-16",
      email_id: "acurwooda@comsenz.com",
      gender: "MALE",
      employee_id: "57-6302845",
      designation: "Payment Adjustment Coordinator",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Flowdesk",
      dob: "1994-04-30",
      email_id: "tdreigherb@usa.gov",
      gender: "MALE",
      employee_id: "46-1231553",
      designation: "Help Desk Operator",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Zaam-Dox",
      dob: "1998-12-08",
      email_id: "mlarrosac@earthlink.net",
      gender: "MALE",
      employee_id: "02-8919252",
      designation: "Administrative Officer",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Otcom",
      dob: "2000-02-06",
      email_id: "mjonasd@dailymail.co.uk",
      gender: "FEMALE",
      employee_id: "04-4241781",
      designation: "Executive Secretary",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Bytecard",
      dob: "1991-05-30",
      email_id: "nandrzeje@imdb.com",
      gender: "MALE",
      employee_id: "34-8539283",
      designation: "Junior Executive",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Sonair",
      dob: "1997-12-09",
      email_id: "sbarkawayf@domainmarket.com",
      gender: "MALE",
      employee_id: "15-2698141",
      designation: "Electrical Engineer",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Domainer",
      dob: "1997-04-09",
      email_id: "fomarag@shareasale.com",
      gender: "FEMALE",
      employee_id: "37-3576006",
      designation: "Chemical Engineer",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Stim",
      dob: "1993-04-15",
      email_id: "emenaryh@china.com.cn",
      gender: "FEMALE",
      employee_id: "85-6211406",
      designation: "Administrative Officer",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Bytecard",
      dob: "1997-10-14",
      email_id: "kwadhami@cdc.gov",
      gender: "OTHERS",
      employee_id: "38-5446863",
      designation: "Web Developer I",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }, {
      id: uuid(),
      name: "Cardguard",
      dob: "1992-06-10",
      email_id: "dmatticcij@whitehouse.gov",
      gender: "FEMALE",
      employee_id: "15-0480608",
      designation: "Legal Assistant",
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('employees', null, {});
  }
};
