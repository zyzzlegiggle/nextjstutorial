'use server';

export async function createInvoice(formData : formData){
	const rawFormData = {
		customerId: formData.get('customerId'),
		amount: formData.get('amount'),
		status: formData.get('status'),
	};
	console.log(rawFormData);
}