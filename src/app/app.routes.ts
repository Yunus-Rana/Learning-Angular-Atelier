import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { Databinding } from './components/databinding/databinding';
import { DirectiveExp } from './components/directive-exp/directive-exp';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { ReactiveFormEx } from './components/reactive-form-ex/reactive-form-ex';
import { Signalbasics } from './components/signalbasics/signalbasics';
import { SignalForms } from './components/signal-forms/signal-forms';
import { GetAPIex } from './components/get-apiex/get-apiex';
import { ClientCrud } from './components/client-crud/client-crud';
import { Lifecycle } from './components/lifecycle/lifecycle';

export const routes: Routes = [
    {
        path: '', redirectTo: 'variables', pathMatch: 'full'
    },
    {
        path: "variables", component: Variables
    },
    {
        path: "databinding", component: Databinding
    },
    {
        path: "directives", component: DirectiveExp
    },
    {
        path: "controlflow", component: ControlFlow
    },
    {
        path: "reactiveform", component: ReactiveFormEx
    },
    {
        path: "signalbasics", component: Signalbasics
    },
    {
        path: "signalforms", component: SignalForms
    },
    {
        path: "getapi", component: GetAPIex
    },
    {
        path: "clientcrud", component: ClientCrud
    },
    {
        path: "lifecycle", component: Lifecycle
    },
    {
        path:"**", component: NotFound
    }
];
