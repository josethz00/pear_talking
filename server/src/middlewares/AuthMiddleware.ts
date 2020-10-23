import { ExpressContext } from "../@types/ExpressContext";
import { MiddlewareFn } from "type-graphql";
import { AuthenticationError } from "apollo-server-express";

export const AuthMiddleware: MiddlewareFn<ExpressContext> = async ({ context }, next) => {
    
    if (!context.req.session!.userId) {
        throw new AuthenticationError("Não autenticado");
    }

    return next();

};