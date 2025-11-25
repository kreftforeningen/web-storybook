import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import {
  Person,
  PersonItem,
  PersonItemImage,
  PersonItemContent,
  PersonItemName,
  PersonItemTitle,
  PersonItemEmail,
  PersonItemPhone,
  PersonItemDescription,
} from "@kreftforeningen/web-react";

const personItems = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.long.name.johnson.doe@example.com",
    phone: "+47 98765432",
    title: "Software Engineer",
    image: "https://picsum.photos/300/300",
    description:
      "John Doe is a software engineer with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "j.doe@example.com",
    phone: "+47 98765432",
    title: "Marketing Manager",
    description:
      "Jane Doe is a marketing manager with a passion for building scalable and efficient systems. She is a quick learner and always looking for new challenges.",
  },
  {
    id: 3,
    firstName: "Alfred",
    lastName: "Hitchcock",
    email: "a.hitchcock@example.com",
    phone: "+47 98765432",
    title: "Product Manager",
    image: "https://picsum.photos/300/300",
    description:
      "Alfred Hitchcock is a product manager with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
  {
    id: 4,
    firstName: "Jane",
    lastName: "Fonda",
    email: "j.fonda@example.com",
    phone: "+47 98765432",
    title: "Sales Manager",
    image: "https://picsum.photos/300/300",
    description:
      "Jane Fonda is a sales manager with a passion for building scalable and efficient systems. She is a quick learner and always looking for new challenges.",
  },
  {
    id: 5,
    firstName: "Lars Ola",
    lastName: "Wayne",
    email: "lwayne@example.com",
    phone: "+47 98765432",
    title: "CEO",
    description:
      "Lars Wayne is a CEO with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
];

const meta = {
  title: "components/Person",
  component: Person,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `A person component that displays a person with a name, title, email, phone, and description.`,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    // PersonItemImage props
    src: {
      description: "The source URL for the person's image",
      control: "text",
      table: {
        category: "PersonItemImage Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    alt: {
      description: "Alternative text for the person's image",
      control: "text",
      table: {
        category: "PersonItemImage Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    fallback: {
      description:
        "Fallback text to display when image fails to load (usually initials)",
      control: "text",
      table: {
        category: "PersonItemImage Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    // PersonItemEmail props
    hrefEmail: {
      description:
        "href (not hrefEmail) for the mailto URL for the person's email address",
      control: "text",
      table: {
        category: "PersonItemEmail Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    // PersonItemPhone props
    hrefPhone: {
      description:
        "href (not hrefPhone) for the tel URL for the person's phone number",
      control: "text",
      table: {
        category: "PersonItemPhone Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Person>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Person>
  {personItems.map((item) => (
    <PersonItem key={item.id}>
      <PersonItemImage
        src={item.image}
        alt={\`\${item.firstName} \${item.lastName}\`}
        fallback={\`\${item.firstName.charAt(0)}\${item.lastName.charAt(0)}\`}
      />
      <PersonItemContent>
        <PersonItemName>
          {item.firstName} {item.lastName}
        </PersonItemName>
        <PersonItemTitle>{item.title}</PersonItemTitle>
        <PersonItemEmail href={\`mailto:\${item.email}\`}>
          {item.email}
        </PersonItemEmail>
        <PersonItemPhone href={\`tel:\${item.phone}\`}>
          {item.phone}
        </PersonItemPhone>
        <PersonItemDescription>{item.description}</PersonItemDescription>
      </PersonItemContent>
    </PersonItem>
  ))}
</Person>`,
      },
    },
  },
  render: () => (
    <Person>
      {personItems.map((item) => (
        <PersonItem key={item.id}>
          <PersonItemImage
            src={item.image}
            alt={`${item.firstName} ${item.lastName}`}
            fallback={`${item.firstName.charAt(0)}${item.lastName.charAt(0)}`}
          />
          <PersonItemContent>
            <PersonItemName>
              {item.firstName} {item.lastName}
            </PersonItemName>
            <PersonItemTitle>{item.title}</PersonItemTitle>
            <PersonItemEmail href={`mailto:${item.email}`}>
              {item.email}
            </PersonItemEmail>
            <PersonItemPhone href={`tel:${item.phone}`}>
              {item.phone}
            </PersonItemPhone>
            <PersonItemDescription>{item.description}</PersonItemDescription>
          </PersonItemContent>
        </PersonItem>
      ))}
    </Person>
  ),
};
