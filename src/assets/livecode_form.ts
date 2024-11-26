/** INSTRUÇÕES
*
* REQUISITOS:
*
* Crie um componente de formulário usando os dados abaixo e seguindo estas instruções:
* - O formulário deve ser exibido em um modal;
* - Deve ser possível fechar o modal clicando no botão de fechar ou no fundo escurecido;
* - A tela inicial deve conter um botão para cada formulário, que ao ser clicado, abre o modal do respectivo formulário;
* - O modal deve ter um botão "Salvar", que ao ser clicado envia um `console.log` com um objeto dos dados preenchidos no formulário (indexados pela propriedade PropertyName), limpa os dados e fecha o modal;
*
* REGRAS:
*
* - Você terá 60 minutos para desenvolver.
* - O cronômetro começará a contar no momento em que você escrever a primeira linha de código.
* - Antes de iniciar o desenvolvimento, você pode gastar o tempo que quiser no entendimento do exercício, fazendo perguntas e arquitetando o que será desenvolvido.
* - Incentivamos que você se comunique INTENSAMENTE, pois mais importante do que o resultado é compreender seu processo de pensamento.
* - Faça perguntas sobre o escopo, pois todas as propriedades têm um objetivo e o exercício não é 100% explícito propositalmente.
* - Dúvidas técnicas não serão respondidas.
* - Nesse desafio, a qualidade do código e o system design são mais relevantes que a estilização.
* - Utilize os tipos e os dados abaixo para atender os requisitos.
*/

// TIPOS

type TNativeType = "string" | "number" | "boolean";
type TColumns = 1 | 2 | 3;

interface IFieldType {
  Id: number;
  Name: string;
  NativeType: TNativeType;
}

interface IField {
  Id: number;
  Required: boolean;
  Title: string;
  PropertyName: string;
  ColumnSpan: TColumns;
  FieldTypeId: number;
}

interface ISection {
  Id: number;
  Title: string;
  FieldIds?: Array<number>;
  SubSectionIds?: Array<number>;
}

interface IForm {
  Id: number;
  Title: string;
  Columns: TColumns;
  SectionIds: Array<number>;
}

// DADOS

export const fieldTypes: Array<IFieldType> = [
  { Id: 1, Name: "Texto simples", NativeType: "string" },
  { Id: 2, Name: "Número inteiro", NativeType: "number" },
  { Id: 3, Name: "Número com casas decimais", NativeType: "number" },
  { Id: 4, Name: "Sim ou Não", NativeType: "boolean" },
  { Id: 5, Name: "Data", NativeType: "string" },
  { Id: 6, Name: "CEP", NativeType: "string" },
  { Id: 7, Name: "Telefone", NativeType: "number" },
]

export const fields: Array<IField> = [
  { Id: 1, Title: "Nome completo", PropertyName: "Name", ColumnSpan: 3, FieldTypeId: 1, Required: true },
  { Id: 2, Title: "Nome da rua", PropertyName: "Adress", ColumnSpan: 2, FieldTypeId: 1, Required: false },
  { Id: 3, Title: "Número", PropertyName: "AdressNumber", ColumnSpan: 1, FieldTypeId: 2, Required: false },
  { Id: 4, Title: "Data de Nascimento", PropertyName: "Birthday", ColumnSpan: 1, FieldTypeId: 5, Required: false },
  { Id: 5, Title: "Salário Anual", PropertyName: "AnnualSalary", ColumnSpan: 2, FieldTypeId: 3, Required: false },
  { Id: 7, Title: "Está empregado?", PropertyName: "Employed", ColumnSpan: 1, FieldTypeId: 4, Required: false },
  { Id: 8, Title: "Tem filhos?", PropertyName: "HasChildren", ColumnSpan: 1, FieldTypeId: 4, Required: false },
  { Id: 9, Title: "Número de Filhos", PropertyName: "ChildrenQuantity", ColumnSpan: 1, FieldTypeId: 2, Required: false },
  { Id: 10, Title: "CEP", PropertyName: "CEP", ColumnSpan: 1, FieldTypeId: 6, Required: false },
  { Id: 11, Title: "Telefone", PropertyName: "Phone", ColumnSpan: 2, FieldTypeId: 7, Required: false },
];

export const sections: Array<ISection> = [
  { Id: 1, Title: "Dados gerais", FieldIds: [1, 4, 11, 7, 8, 9, 5, 10, 2, 3] },
  { Id: 2, Title: "Dados básicos", FieldIds: [1, 4, 11] },
  { Id: 3, Title: "Sócio economicos", FieldIds: [7, 8, 9, 5] },
  { Id: 4, Title: "Endereço", FieldIds: [10, 2, 3] },
  { Id: 5, Title: "Dados do conjugue", SubSectionIds: [2, 3, 4] },
]

export const forms: Array<IForm> = [
  { Id: 1, Columns: 1, SectionIds: [1], Title: "Dados do cliente" },
  { Id: 2, Columns: 3, SectionIds: [2, 3, 4], Title: "Dados do cliente por seção" },
  { Id: 3, Columns: 2, SectionIds: [1, 5], Title: "Dados do cliente e do conjugue" },
]
