import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

const page: FC = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-5xl shadow-2xl">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="w-full grid gap-8 bg-white text-center p-16">
            <h1 className="text-3xl font-bold">Livre de bord</h1>
            <Image src={"/images/logo_chabe-affaires.png"} className="mx-auto" alt="chabe-logo" title="Logo Chabé" width="200" height="200"/>
          </div>
          <div className="bg-accent p-16">
            <h1 className="text-3xl font-semibold mb-2 text-center">Se connecter</h1>
            <form className="grid grid-rows-3 items-center max-w-xs mx-auto">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div>
                <div>
                  <Label htmlFor="mdp">Mot de passe</Label>
                  <Input type="mdp" id="mdp" placeholder="Mot de passe" />
                </div>
                <Link href="/forgot-password">
                  <span className="text-sm inline-block hover:text-primary text-chabe hover:underline hover:cursor-pointer transition duration-200">
                    Mot de passe oublié ?
                  </span>
                </Link>
              </div>
              <div>
                <Button className="w-full max-w-xs">Connexion</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;