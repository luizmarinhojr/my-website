import type { formContact } from "../pages/ContactPage";

export default async function PostContactForm(data: formContact) {
	try {
		const response = await fetch("https://formspree.io/f/mgvzbybg", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data), // Converte o objeto de dados para uma string JSON
		});

		if (!response.ok) {
			throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
		}

	} catch (error) {
		console.error('Falha ao enviar os dados:', error);
		throw error;
	}
}