# InfinitePay + Rails API (Checkout)

## 1) Fluxo recomendado
1. Frontend envia `plan` (`run` ou `pro`) e `name`, `email`, `phone` para `POST /api/v1/checkouts`.
   Também envia endereço (`zip_code`, `street`, `number`, `neighborhood`, `city`, `state`, `complement`).
2. Rails cria um registro local de pagamento com status `pending`.
3. Rails chama `POST https://api.infinitepay.io/invoices/public/checkout/links`.
4. Rails salva `checkout_link_id` retornado pela InfinitePay e devolve `checkout_url` ao frontend.
5. Frontend redireciona o usuário para a URL da InfinitePay.
6. InfinitePay chama seu `webhook_url` quando o pagamento muda de status.
7. Rails valida a assinatura do webhook, atualiza status e guarda eventos.

## 2) Variáveis de ambiente (Rails)

```bash
INFINITEPAY_BASE_URL=https://api.infinitepay.io
INFINITEPAY_HANDLE=sua_infinite_tag_sem_$
APP_BASE_URL=https://api.seu-dominio.com
APP_CHECKOUT_SUCCESS_URL=https://seu-dominio.com/pagamento/sucesso
APP_CHECKOUT_CANCEL_URL=https://seu-dominio.com/pagamento/cancelado
```

## 3) Endpoints Rails

### `POST /api/v1/checkouts`
Entrada:
```json
{
  "plan": "run",
  "customer": {
    "name": "Nome Completo",
    "email": "cliente@email.com",
    "phone": "5511999999999"
  },
  "address": {
    "zip_code": "04567-000",
    "street": "Rua Exemplo",
    "number": "123",
    "neighborhood": "Centro",
    "city": "Sao Paulo",
    "state": "SP",
    "complement": "Apto 11"
  }
}
```

Saída:
```json
{
  "payment_id": "uuid_local",
  "checkout_url": "https://checkout.infinitepay.io/...",
  "plan": "run",
  "amount_cents": 11900
}
```

### `POST /api/v1/payments/webhooks/infinitepay`
- Recebe eventos de confirmação/expiração/falha.
- Atualiza `payments.status` e grava payload bruto em `payment_events`.

## 4) Estrutura mínima de dados

### `users`
- `name:string`
- `email:string` (unique)
- `phone:string`
- `zip_code:string`
- `street:string`
- `number:string`
- `neighborhood:string`
- `city:string`
- `state:string`
- `complement:string`

### `payments`
- `user_id:references`
- `provider:string` (`infinitepay`)
- `provider_checkout_link_id:string`
- `provider_transaction_id:string`
- `amount_cents:integer`
- `currency:string`
- `status:string` (`pending`, `paid`, `failed`, `expired`, `refunded`)
- `raw_provider_response:json`

### `payment_events`
- `payment_id:references`
- `provider:string`
- `event_type:string`
- `payload:json`

## 5) Exemplo de service object (Rails)

```ruby
# app/services/infinite_pay/create_checkout_link.rb
class InfinitePay::CreateCheckoutLink
  def call(payment:, user:)
    body = {
      handle: ENV.fetch("INFINITEPAY_HANDLE"),
      redirect_url: ENV.fetch("APP_CHECKOUT_SUCCESS_URL"),
      webhook_url: "#{ENV.fetch('APP_BASE_URL')}/api/v1/payments/webhooks/infinitepay",
      order_nsu: payment.id,
      items: [
        {
          description: "Acesso Antecipado Funpace",
          quantity: 1,
          price: payment.amount_cents
        }
      ],
      customer: {
        name: user.name,
        email: user.email,
        phone_number: user.phone
      }
    }

    response = Faraday.post(
      "#{ENV.fetch('INFINITEPAY_BASE_URL', 'https://api.infinitepay.io')}/invoices/public/checkout/links",
      body.to_json,
      { "Content-Type" => "application/json" }
    )

    JSON.parse(response.body)
  end
end
```

## 6) O que precisa na sua conta InfinitePay
- Conta com cadastro validado (KYC finalizado).
- InfiniteTag (`handle`) da conta para identificar o vendedor.
- Configurar URL de webhook pública HTTPS no painel/integração.
- Definir conta de recebimento (a própria conta InfinitePay do seu cadastro).
- Validar em ambiente de teste/homologação antes de produção.

## 7) Métodos de pagamento
- Na documentação pública de `Checkout Link` há exemplos explícitos com `credit_card` e `pix` em `capture_method`.
- Para `boleto` e `débito`, confirme no seu painel/plano com o suporte InfinitePay se estão habilitados no seu produto de checkout e para sua conta.
- Regra prática: capacidade final depende da habilitação da sua conta e do produto contratado.
