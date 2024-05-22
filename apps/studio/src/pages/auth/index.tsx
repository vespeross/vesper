import { useNewQuery } from '@/store/slices/general';
import { Login } from './login';
import { Register } from './register';

export default function Auth() {
    const { data } = useNewQuery()
    console.log(data?.body)
    if (!data) return null
    else if (data.body.isNewInstall) return <Register />
    else return <Login />
}
