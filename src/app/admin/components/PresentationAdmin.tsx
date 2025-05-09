import { updatePath } from "@/app/actions";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import database from "@/services/database";
import { Presentation as TypePresentation } from "@/types/presentation";
import { ChangeEvent, useEffect, useState } from "react";
import validateUser from "../validate";

export default function PresentationAdmin() {
  const [presentation, setPresentation] = useState<TypePresentation>({
    title: "",
    description: "",
    id: "",
  });

  useEffect(() => {
    const listener = database.listenDocumentUpdate(
      "presentation",
      "data",
      setPresentation
    );
    return () => listener();
  }, [presentation.id]);

  function handlePresentation(evt: ChangeEvent) {
    const { name, value } = evt.target as HTMLInputElement;

    setPresentation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function sendPresentation() {
    const isValidate = await validateUser();

    if (isValidate) {
      await database.updateDocument(
        "presentation",
        presentation.id,
        presentation
      );
      updatePath("/");
    }
  }

  return (
    <section className="flex flex-col gap-5">
      <Title noMargin>Editar apresentação</Title>
      <Input
        value={presentation.title}
        onChange={handlePresentation}
        name="title"
        label="Título"
      />
      <Input
        value={presentation.description}
        onChange={handlePresentation}
        name="description"
        label="Descrição"
        multiline
      />
      <PrimaryButton onClick={sendPresentation}>
        Salvar alterações
      </PrimaryButton>
    </section>
  );
}
