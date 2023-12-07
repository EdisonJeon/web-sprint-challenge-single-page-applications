import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("a name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .trim()
    .required("must select a size")
    .oneOf(["S", "M", "L"], "please select a valid size"),
  mushrooms: yup.boolean(),
  onions: yup.boolean(),
  pineapples: yup.boolean(),
  sausages: yup.boolean(),
  specialReq: yup.string().trim(),
});

export default formSchema;

//name must be at least 2 characters
