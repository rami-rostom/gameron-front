import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Signin from '@/components/Signin/Signin';
import Register from '@/components/Register/Register';

import './Login.scss';

function Login() {
  return (
    <>
      <div className="login">
        <div className="login__intro side">
          <h1 className="login__intro-title">Gameron</h1>
          <p className="login__intro-subtitle">
            Votre espace pour vos jeux préférés
          </p>
        </div>

        <div className="login__form side">
          <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Se connecter</TabsTrigger>
              <TabsTrigger value="register">Créer un compte</TabsTrigger>
            </TabsList>

            <Signin />
            <Register />
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Login;
