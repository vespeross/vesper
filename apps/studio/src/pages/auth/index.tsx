import { useNewQuery } from '@/store/slices/general';
import { Login } from './login';
import { Register } from './register';

export default function Auth() {
    const { data } = useNewQuery({})
    console.log(data.body.newInstall)
    if (!data) return <div>hi</div>;
    else if (data.body.newInstall) return <Register />
    else return <Login />
}
