Bun.serve({
  port: 3000,
  fetch(req, server){
    const success = server.upgrade(req);
    return success ? undefined : new Response('Server upgrade error', { status:500 });
  },
  websocket: {
    message(ws, message){},
    open(ws) { 
      setInterval(async () => { 
        const url = `${Bun.env.API_URL}${Bun.env.ENDPOINT}?`;
        const params = new URLSearchParams({
          ids: `${Bun.env.COIN_ID}`,
          vs_currency: `${Bun.env.VS_CURRENCY}`
        });

        const response = await fetch(url + params);
        const data = await response.json();
        const price = data[0]?.current_price;
        console.log(price);
        ws.send(price || 'Foi mal, não tem');
      }, 5000);
    }
  }
})