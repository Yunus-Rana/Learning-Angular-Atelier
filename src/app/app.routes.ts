import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { Databinding } from './components/databinding/databinding';
import { DirectiveExp } from './components/directive-exp/directive-exp';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { ReactiveFormEx } from './components/reactive-form-ex/reactive-form-ex';

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
        path:"**", component: NotFound
    }
];
