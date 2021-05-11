import { Request, Response } from "express";
import { findAllUsers } from "../services/userService";

/*
    Szabályok:
        - service-eket használhat
    VAGY
        - DAO-kat vagy Repository-kat használhat
    DE
        - semmi mást!
*/
export default function getAllUsers(request: Request, response: Response) {
    const users = findAllUsers();

    response.statusCode = 200;
    response.send({ users });
}