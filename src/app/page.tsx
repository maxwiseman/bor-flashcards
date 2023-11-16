import { Flashcard } from "./card";

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 p-2">
        {data.map((card) => {
          return (
            <div key={card.amendment} className="max-w-3xl">
              <Flashcard
                card={{
                  front: card.amendment,
                  back: card.right,
                  def: card.definition,
                }}
              />
            </div>
          );
        })}
      </div>
      <footer className="mt-4 bg-gray-200 p-4 text-black">
        © 2023 Simerly APGOV Ian Steiger and Max Wiseman
      </footer>
    </>
  );
}

const data: { amendment: string; right: string; definition: string }[] = [
  {
    amendment: "1st Amendment",
    right: "Freedom of Speech",
    definition:
      "The right to express one's opinions, ideas, and thoughts freely without government censorship or restraint.",
  },
  {
    amendment: "2nd Amendment",
    right: "Right to Bear Arms",
    definition:
      "The right of citizens to own and carry firearms for self-defense and the defense of the country.",
  },
  {
    amendment: "3rd Amendment",
    right: "Protection from Quartering of Troops",
    definition:
      "Prohibits the government from forcing citizens to house and feed soldiers in their homes during peacetime without consent.",
  },
  {
    amendment: "4th Amendment",
    right: "Protection from Unreasonable Searches and Seizures",
    definition:
      "Protects individuals from unreasonable searches and seizures by the government and requires warrants based on probable cause.",
  },
  {
    amendment: "5th Amendment",
    right: "Right to Due Process of Law",
    definition:
      "Ensures fair legal procedures, including the right to a fair and impartial trial, protection against self-incrimination, and protection against double jeopardy.",
  },
  {
    amendment: "6th Amendment",
    right: "Right to a Speedy and Public Trial",
    definition:
      "Guarantees the right to a quick and public trial by an impartial jury, as well as the right to confront witnesses and have legal representation.",
  },
  {
    amendment: "7th Amendment",
    right: "Right to Trial by Jury",
    definition:
      "Ensures the right to a trial by jury in civil cases involving a dispute of $20 or more, preserving the right to a jury trial in certain civil matters.",
  },
  {
    amendment: "8th Amendment",
    right: "Protection from Cruel and Unusual Punishment",
    definition:
      "Prohibits the infliction of cruel and unusual punishment and excessive fines or bail.",
  },
  {
    amendment: "9th Amendment",
    right: "Rights Retained by the People",
    definition:
      "Recognizes that the people have rights beyond those explicitly stated in the Constitution, emphasizing the importance of individual liberties.",
  },
  {
    amendment: "10th Amendment",
    right: "Powers Reserved to the States",
    definition:
      "Affirms that powers not delegated to the federal government by the Constitution are reserved for the states and the people.",
  },
];
