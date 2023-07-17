import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "src/user/enums/role.enum";


@Injectable()
export class RoleGuard implements CanActivate{
    constructor(
        private reflector : Reflector ,
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles',[
            context.getHandler() , 
            context.getClass()
        ])

        if(!requiredRoles){
            return true ;
        }

        const { user } = context.switchToHttp().getRequest() ;

        return requiredRoles.some((role)=>user?.roles?.includes(role));
    }
}