const Joi = require('joi');
const employeeModel = require('../../models/EmployeeModel');
const { INVALID_DATA, ERROR_500 }  = require('../../../constants/errorCodes')

const schema = Joi.string().regex(/^[a-zA-Z0-9 @%#&!]*$/i).required();

module.exports = async (req, res) => {
  let { search } = req.query;

  if(search){
    try{
      search = await schema.validateAsync(search);
    } catch (e){
      res.status(500).send(INVALID_DATA(e.details));
      return;
    }
  }

  try{
    const data = await employeeModel.getAll(search);
    res.status(200).send({
      data: data,
      msg: 'Employee List'
    })
  }catch (e){
    res.status(500).send(ERROR_500(e))
  }
}