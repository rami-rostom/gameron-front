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

function Register() {
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
            <Label htmlFor="password">Confirmation du mot de passe</Label>
            <Input type="password" placeholder="Confirmation" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Créer le compte</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}

export default Register;
