import axios from "../../../lib/axios";

const getVacancies = async () => {
  const {
    data: { items: vacancies },
  } = await axios.get("/vacancies", {
    params: {
      per_page: 40,
    },
  });

  return vacancies;
};

export default getVacancies;
