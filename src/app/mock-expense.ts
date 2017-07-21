import { Expense } from './expense';

export const EXPENSES: Expense[] = [
{
	spendFor : 'Coffee',
	amountSpend : 50,
	paymentDate : new Date(2000, 3, 15),
	spendOn:'Bill'
},
{
	spendFor : 'Chocolates',
	amountSpend : 50,
	paymentDate : new Date(2008, 3, 15),
	spendOn:'FoodDrink'
},
{
	spendFor : 'LIC',
	amountSpend : 9000,
	paymentDate : new Date(1988, 3, 15),
	spendOn:'Investment'
},
{
	spendFor : 'PVR',
	amountSpend : 900,
	paymentDate : new Date(2017, 3, 15),
	spendOn:'Entertainment'
}
];
