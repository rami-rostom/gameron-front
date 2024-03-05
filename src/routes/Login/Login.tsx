import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
              <TabsTrigger value="signin">Créer un compte</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Se connecter</CardTitle>
                  <CardDescription>
                    Pour vous connecter à Gameron, renseignez vos identifiants
                    ci-dessous.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="Adresse email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input type="password" placeholder="Mot de passe" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Se connecter</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="signin">
              <Card>
                <CardHeader>
                  <CardTitle>Créer un compte</CardTitle>
                  <CardDescription>
                    Pour devenir membre de Gameron, renseignez les informations
                    suivantes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="Adresse email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="name">Nom d'utilisateur</Label>
                    <Input placeholder="Nom d'utilisateur" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input type="password" placeholder="Mot de passe" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">
                      Confirmation du mot de passe
                    </Label>
                    <Input type="password" placeholder="Confirmation" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Créer le compte</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Login;
