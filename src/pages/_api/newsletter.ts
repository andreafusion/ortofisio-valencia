import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json();
  const email = body?.email?.trim();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Email no válido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const runtime = (locals as any).runtime;
  const API_KEY = import.meta.env.EMAILOCTOPUS_API_KEY ?? runtime?.env?.EMAILOCTOPUS_API_KEY;
  const LIST_ID = import.meta.env.EMAILOCTOPUS_LIST_ID ?? runtime?.env?.EMAILOCTOPUS_LIST_ID;

  if (!API_KEY || !LIST_ID) {
    return new Response(JSON.stringify({ error: 'Variables de entorno no configuradas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key:       API_KEY,
          email_address: email,
          status:        'SUBSCRIBED',
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
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

  } catch (_err) {
    return new Response(JSON.stringify({ error: 'Error de conexión con EmailOctopus' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
