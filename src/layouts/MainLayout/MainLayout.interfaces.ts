import { ReactNode } from 'react';
import { InterfaceType } from '../../contexts';

export interface Props
{
    children: ReactNode[] | ReactNode;
}

export interface State
{
    interface: InterfaceType;
}
