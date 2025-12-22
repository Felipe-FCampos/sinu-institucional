import { useState } from "react";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function SupportForm() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const apiUrl = 'https://sinu-api.onrender.com'
    //const apiUrlDev = 'http://192.168.0.138:8000'

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const response = await fetch(`${apiUrl}/api/support`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error("A resposta da rede não foi ok");
            }

            console.log("Enviado:", form);

            setSuccess(true);
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="support-form" onSubmit={handleSubmit}>
            <h2>Contato & Suporte</h2>
            <p>Se tiver dúvidas, problemas ou sugestões, fale com a gente.</p>

            <div className="field">
                <label>Nome</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="field">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="field">
                <label>Assunto</label>
                <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Ex: Problema com assinatura"
                    required
                />
            </div>

            <div className="field">
                <label>Mensagem</label>
                <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar mensagem"}
            </button>

            {success && <span className="success">Mensagem enviada com sucesso!</span>}
        </form>
    );
}
