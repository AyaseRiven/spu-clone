import axios from "axios";

interface FAQsData {
    data: {
        id: number;
        attributes: {
          title: string;
          sub_title: string;
          description: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
      meta: {}
  }

  export type FAQsResponst = {
    result: FAQsData;
  };

  export async function getFAQsData(): Promise<FAQsResponst> {
    const API_KEY = process.env.STRAPI_API_KEY;
    const API_BASE = process.env.STRAPI_API_BASE_URL;
    const result = await axios.get(`${API_BASE}/api/faqs-title`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        populate: "*",
      },
    });
    // console.log(result.data);
    return Promise.resolve({ result: result.data });
  }
  