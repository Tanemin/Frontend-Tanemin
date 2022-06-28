import axios from "axios";
import Cookies from "js-cookie";
import { postPlant } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'