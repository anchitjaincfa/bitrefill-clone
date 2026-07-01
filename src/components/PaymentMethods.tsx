import { payments } from "@/lib/data";

export default function PaymentMethods() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-ink">
          Pay with your favorite crypto — and more
        </h2>
        <p className="mt-3 text-muted text-base md:text-lg">
          Choose from dozens of cryptocurrencies and everyday payment methods
          at checkout.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {payments.map((payment) => (
            <div
              key={payment.name}
              className="rounded-xl border border-border bg-white px-4 py-2.5 flex items-center gap-2"
            >
              {payment.name === "Mastercard" ? (
                <span className="relative h-7 w-11 flex-shrink-0">
                  <span className="absolute left-0 top-0 h-7 w-7 rounded-full bg-[#eb001b]" />
                  <span className="absolute left-4 top-0 h-7 w-7 rounded-full bg-[#f79e1b] mix-blend-multiply" />
                </span>
              ) : (
                <span
                  className="h-7 w-7 flex-shrink-0 rounded-full flex items-center justify-center text-white font-bold text-xs leading-none"
                  style={{ backgroundColor: payment.color }}
                >
                  {payment.symbol || payment.name.charAt(0)}
                </span>
              )}
              <span className="font-semibold text-ink text-sm whitespace-nowrap">
                {payment.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
