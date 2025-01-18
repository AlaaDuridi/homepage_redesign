import axios, { AxiosError, AxiosResponse } from 'axios';
import { BACKEND_IMAGES } from '../constants/common.ts';
import { toast } from 'react-toastify';
import { IQuestion, IQuestionDetails } from '../types/models/question.model.ts';

const INDEX = `${BACKEND_IMAGES}/api/questions`;

class QuestionsService {
  static async list(): Promise<IQuestion[] | null> {
    try {
      const response: AxiosResponse<{ data: IQuestion[] }> = await axios.get(`${INDEX}`);
      return response.data.data;
    } catch (error) {
      QuestionsService.handleError(error as AxiosError);
      return null;
    }
  }

  static async get(id: number): Promise<IQuestionDetails | null> {
    try {
      const url = `${INDEX}/${id}`;
      const response: AxiosResponse<IQuestionDetails> = await axios.get(url);
      return response.data;
    } catch (error) {
      QuestionsService.handleError(error as AxiosError);
      return null;
    }
  }
  private static handleError(error: AxiosError): void {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        (error.response?.data as ErrorResponse)?.message ||
        (error.response?.data as ErrorResponse)?.error ||
        'An error occurred.';
      toast.error(errorMessage);
    } else {
      toast.error('An unexpected error occurred.');
    }
  }
}

type ErrorResponse = {
  error?: string;
  message: string;
};
export default QuestionsService;
