import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/redux';

import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '../ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { register } from '@/store/reducers/register';

function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [emailValue, setEmailValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmationValue, setConfirmationValue] = useState('');

  const { toast } = useToast();

  const handleEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmailValue(email);
  };

  const handleUsernameValue = (event: ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    setUsernameValue(username);
  };

  const handlePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPasswordValue(password);
  };

  const handleConfirmationValue = (event: ChangeEvent<HTMLInputElement>) => {
    const confirmation = event.target.value;
    setConfirmationValue(confirmation);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      register({
        email: emailValue,
        username: usernameValue,
        password: passwordValue,
        confirmation: confirmationValue,
      })
    ).then(() => {
      toast({
        title: 'Création du compte réussie',
        description: 'Vous pouvez maintenant vous connecter !',
      });
      setTimeout(() => {
        navigate(0);
      }, 2000);
    });
  };

  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Créer un compte</CardTitle>
          <CardDescription>
            Pour devenir membre de Gameron, renseignez les informations
            suivantes.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleFormSubmit}>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Adresse email" onChange={handleEmailValue} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Nom d'utilisateur</Label>
              <Input
                placeholder="Nom d'utilisateur"
                onChange={handleUsernameValue}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                type="password"
                placeholder="Mot de passe"
                onChange={handlePasswordValue}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Confirmation du mot de passe</Label>
              <Input
                type="password"
                placeholder="Confirmation"
                onChange={handleConfirmationValue}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Créer le compte</Button>
          </CardFooter>
        </form>
      </Card>
    </TabsContent>
  );
}

export default Register;
