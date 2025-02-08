import { expect, test } from '@playwright/test';

test("API Guia coordinadora", async ({ playwright }) => {
  let apiContext = await playwright.request.newContext({});
  //Nos regresa la infomración del API
  const apiInfo= await apiContext.get("99020276264");
  //Se verifica el resultado
  expect (apiInfo.ok()).toBeTruthy();
  // Se captura el JSON de respuesta
  const body = await apiInfo.json();

  expect (body.data).toHaveProperty("valorRecaudar",38500);
  expect (body.data).toHaveProperty("referenciaRecaudo","Prueba QA coordinadora");
});


