import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const email = body?.email?.trim();

  // Validación básica
  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Email no válido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const API_KEY = import.meta.env.EMAILOCTOPUS_API_KEY;
  const LIST_ID = import.meta.env.EMAILOCTOPUS_LIST_ID;

  try {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key:        API_KEY,
          email_address:  email,
          status:         'SUBSCRIBED',
        }),
      }
    );

    const data = await response.json();

    // EmailOctopus devuelve 200 si OK, o un error con código
    if (!response.ok) {
      // Si el contacto ya existe, lo tratamos como éxito
      if (data?.error?.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify({ error: data?.error?.message ?? 'Error desconocido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error de conexión' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};