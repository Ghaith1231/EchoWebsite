// 1. Define allowed moods
type EnvironmentMood = "happy" | "neutral" | "sad";

// 2. Define props
type EnvironmentPanelProps = {
  mood: EnvironmentMood;
};

// 3. Use it in the component
export function EnvironmentPanel({ mood }: EnvironmentPanelProps) {
  return (
    <section className={`environment environment--${mood}`}>
      <div className="environment__tv">TV</div>

      <div className="environment__room">
        <div className="environment__character">Character</div>
        <div className="environment__pet">Pet</div>
        <div className="environment__furniture">Furniture</div>
        <div className="environment__window">Window</div>
        <div className="environment__wall">Wall</div>
        <div className="environment__floor">Floor</div>
        <div className="environment__rug">Rug</div>
        <div className="environment__plant">Plant</div>
        <div className="environment__wardrobe">Wardrobe</div>
      </div>
    </section>
  );
}