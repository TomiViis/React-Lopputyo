import express, { Router, Request, Response } from "express";

/**
 * Alustetaan reititin
 */
export const reititin: Router = express.Router();

/**
 * /system-polku tuo tänne, /system/ping antaa vastauksen
 */
reititin.get("/ping", (request: Request, response: Response) => {
    response.send("pong")
});