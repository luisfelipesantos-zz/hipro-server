import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { handler } from './decode-verify-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const verify = handler({
      token: request.headers.authorization.split(' ')[1],
    });

    const result = verify.then((res) => {
      return res.isValid;
    });

    return result;
  }
}
