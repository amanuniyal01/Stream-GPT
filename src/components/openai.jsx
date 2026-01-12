import OpenAI from 'openai';
import { OPEN_API_KEY } from '../utils/constants';

const client = new OpenAI({
    apiKey: process.env[OPEN_API_KEY],
});

