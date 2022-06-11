import {Address} from '../contact/Address';
export interface Contact {
    id: number | string;
    name?: string;
    email?: string;
    phone?: string | string[];
    birthday?: string;
    website?: string;
    image?: string;
    address?: Address;
}