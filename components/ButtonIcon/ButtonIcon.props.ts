import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import iconUp from './iconUp.svg';
import iconSandwich from './iconSandwich.svg';
import iconCross from './iconCross.svg';

export const icons = {
	iconUp,
	iconCross,
	iconSandwich
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconName;
	appearance: 'primary' | 'white';
}