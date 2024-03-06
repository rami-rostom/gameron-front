import { ChangeEvent, FormEvent, useState } from 'react';

import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function Signin() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmailValue(email);
  };

  const handlePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPasswordValue(password);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(emailValue);
    console.log(passwordValue);
  };

  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
          <CardDescription>
            Pour vous connecter à Gameron, renseignez vos identifiants
            ci-dessous.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleFormSubmit}>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Adresse email" onChange={handleEmailValue} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                type="password"
                placeholder="Mot de passe"
                onChange={handlePasswordValue}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Se connecter</Button>
          </CardFooter>
        </form>
      </Card>
    </TabsContent>
  );
}

export default Signin;
