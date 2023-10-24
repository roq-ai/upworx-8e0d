import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  freelancer_id: yup.string().nullable().required(),
  job_offer_id: yup.string().nullable().required(),
});
