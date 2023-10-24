import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  contract_duration: yup.number().integer().nullable(),
  company_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
