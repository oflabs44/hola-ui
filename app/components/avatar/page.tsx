import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/hola/ui/avatar";
import { ShowcasePage, Showcase } from "../showcase";

const demoAvatars = [
  { src: "https://i.pravatar.cc/96?img=1", fallback: "OF" },
  { src: "https://i.pravatar.cc/96?img=2", fallback: "AB" },
  { src: "https://i.pravatar.cc/96?img=3", fallback: "CD" },
  { src: "https://i.pravatar.cc/96?img=4", fallback: "EF" },
  { src: "https://i.pravatar.cc/96?img=5", fallback: "GH" },
];

export default function AvatarShowcase() {
  return (
    <ShowcasePage
      title="Avatar"
      description="Image avatar with fallback on @base-ui/react/avatar. Catalyst's signature inset-outline (1px translucent ring with mix-blend mode) sits ON TOP of the image so it never disappears against similar-coloured backgrounds."
    >
      <Showcase title="Sizes">
        <Avatar size="sm">
          <AvatarImage src={demoAvatars[0].src} alt="Sm" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarImage src={demoAvatars[1].src} alt="Default" />
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src={demoAvatars[2].src} alt="Lg" />
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
      </Showcase>

      <Showcase title="Shapes">
        <Avatar shape="circle">
          <AvatarImage src={demoAvatars[0].src} alt="Circle" />
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <Avatar shape="square">
          <AvatarImage src={demoAvatars[1].src} alt="Square" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </Showcase>

      <Showcase
        title="Fallback only"
        description="When src is missing or fails to load, Fallback renders. The bg is tinted neutral."
      >
        <Avatar size="sm"><AvatarFallback>OF</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
        <Avatar size="lg"><AvatarFallback>CD</AvatarFallback></Avatar>
      </Showcase>

      <Showcase
        title="With badge"
        description="AvatarBadge sized by parent — sm hides any inner SVG, default + lg show a small dot."
      >
        <Avatar>
          <AvatarImage src={demoAvatars[0].src} alt="Online" />
          <AvatarFallback>OF</AvatarFallback>
          <AvatarBadge className="bg-(--hola-fg)/[0.5]" />
        </Avatar>
        <Avatar>
          <AvatarImage src={demoAvatars[1].src} alt="Online" />
          <AvatarFallback>AB</AvatarFallback>
          <AvatarBadge className="bg-green-500" />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src={demoAvatars[2].src} alt="Busy" />
          <AvatarFallback>CD</AvatarFallback>
          <AvatarBadge className="bg-red-500" />
        </Avatar>
      </Showcase>

      <Showcase
        title="Group (overlapping)"
        description="AvatarGroup adds a 2px ring of bg between items so they read as separate when overlapped."
      >
        <AvatarGroup>
          {demoAvatars.slice(0, 4).map((a, i) => (
            <Avatar key={i}>
              <AvatarImage src={a.src} alt={a.fallback} />
              <AvatarFallback>{a.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </Showcase>

      <Showcase
        title="Group with overflow"
        description="AvatarGroupCount shows '+N' for the overflow."
      >
        <AvatarGroup>
          {demoAvatars.slice(0, 3).map((a, i) => (
            <Avatar key={i}>
              <AvatarImage src={a.src} alt={a.fallback} />
              <AvatarFallback>{a.fallback}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount>+12</AvatarGroupCount>
        </AvatarGroup>
      </Showcase>

      <Showcase
        title="Group sizes"
        description="Group sizing is per-Avatar. Mix and match if needed (rare)."
      >
        <div className="flex flex-col gap-4">
          <AvatarGroup>
            {demoAvatars.slice(0, 4).map((a, i) => (
              <Avatar key={i} size="sm">
                <AvatarImage src={a.src} alt={a.fallback} />
                <AvatarFallback>{a.fallback}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount size="sm">+3</AvatarGroupCount>
          </AvatarGroup>
          <AvatarGroup>
            {demoAvatars.slice(0, 4).map((a, i) => (
              <Avatar key={i} size="lg">
                <AvatarImage src={a.src} alt={a.fallback} />
                <AvatarFallback>{a.fallback}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount size="lg">+3</AvatarGroupCount>
          </AvatarGroup>
        </div>
      </Showcase>
    </ShowcasePage>
  );
}
