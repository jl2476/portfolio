export type PixelIconName =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "resume"
  | "contact"
  | "sword"
  | "chat"
  | "lightning"
  | "brain"
  | "database"
  | "cart"
  | "signal"
  | "code"
  | "star";

export interface PixelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Pixel Art Home Icon (Retro 8-bit House)
 */
export function PixelHomeIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      shapeRendering="crispEdges"
      className={`pixel-icon ${className}`}
      {...props}
    >
      {/* Chimney */}
      <rect x="10" y="2" width="2" height="3" />
      {/* Roof structure */}
      <rect x="7" y="2" width="2" height="1" />
      <rect x="6" y="3" width="4" height="1" />
      <rect x="5" y="4" width="6" height="1" />
      <rect x="4" y="5" width="8" height="1" />
      <rect x="3" y="6" width="10" height="1" />
      <rect x="2" y="7" width="12" height="1" />
      {/* Walls below roof */}
      <rect x="3" y="8" width="10" height="1" />
      {/* Mid walls with windows */}
      <rect x="3" y="9" width="1" height="2" />
      <rect x="6" y="9" width="4" height="2" />
      <rect x="12" y="9" width="1" height="2" />
      {/* Lower walls around door */}
      <rect x="3" y="11" width="4" height="1" />
      <rect x="9" y="11" width="4" height="1" />
      <rect x="3" y="12" width="4" height="2" />
      <rect x="9" y="12" width="4" height="2" />
      {/* House foundation step */}
      <rect x="2" y="14" width="12" height="1" />
    </svg>
  );
}

/**
 * Pixel Art About Icon (Retro 8-bit User Avatar)
 */
export function PixelAboutIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      shapeRendering="crispEdges"
      className={`pixel-icon ${className}`}
      {...props}
    >
      {/* Hair / Head top */}
      <rect x="5" y="1" width="6" height="1" />
      <rect x="4" y="2" width="8" height="2" />
      {/* Forehead */}
      <rect x="4" y="4" width="8" height="1" />
      {/* Face layer with eye cutouts */}
      <rect x="4" y="5" width="2" height="1" />
      <rect x="7" y="5" width="2" height="1" />
      <rect x="10" y="5" width="2" height="1" />
      {/* Jaw & Chin */}
      <rect x="4" y="6" width="8" height="1" />
      <rect x="5" y="7" width="6" height="1" />
      {/* Neck */}
      <rect x="7" y="8" width="2" height="1" />
      {/* Collar & Shoulders */}
      <rect x="5" y="9" width="6" height="1" />
      <rect x="3" y="10" width="10" height="2" />
      <rect x="2" y="12" width="12" height="3" />
    </svg>
  );
}

/**
 * Pixel Art Projects Icon (Retro 8-bit Terminal Screen with Code Glyphs)
 */
export function PixelProjectsIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      shapeRendering="crispEdges"
      className={`pixel-icon ${className}`}
      {...props}
    >
      {/* Monitor Outer Frame */}
      <rect x="1" y="1" width="14" height="2" />
      <rect x="1" y="10" width="14" height="2" />
      <rect x="1" y="3" width="2" height="7" />
      <rect x="13" y="3" width="2" height="7" />
      {/* Monitor Stand */}
      <rect x="6" y="12" width="4" height="2" />
      <rect x="3" y="14" width="10" height="1" />
      {/* Pixel < / > Glyphs inside screen */}
      {/* < */}
      <rect x="4" y="4" width="1" height="1" />
      <rect x="3" y="5" width="1" height="1" />
      <rect x="4" y="6" width="1" height="1" />
      {/* / */}
      <rect x="8" y="4" width="1" height="1" />
      <rect x="7" y="5" width="1" height="1" />
      <rect x="6" y="6" width="1" height="1" />
      {/* > */}
      <rect x="10" y="4" width="1" height="1" />
      <rect x="11" y="5" width="1" height="1" />
      <rect x="10" y="6" width="1" height="1" />
      {/* Terminal prompt line below */}
      <rect x="4" y="8" width="5" height="1" />
    </svg>
  );
}

/**
 * Pixel Art Skills Icon (Retro 8-bit Crossed Tools)
 */
export function PixelSkillsIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      shapeRendering="crispEdges"
      className={`pixel-icon ${className}`}
      {...props}
    >
      {/* Wrench head (top-left) */}
      <rect x="1" y="1" width="4" height="1" />
      <rect x="1" y="2" width="1" height="3" />
      <rect x="4" y="2" width="1" height="3" />
      <rect x="2" y="4" width="3" height="1" />
      {/* Wrench handle */}
      <rect x="4" y="5" width="2" height="2" />
      <rect x="6" y="7" width="2" height="2" />
      <rect x="8" y="9" width="2" height="2" />
      <rect x="10" y="11" width="2" height="2" />
      <rect x="12" y="13" width="3" height="2" />

      {/* Hammer head (top-right) */}
      <rect x="10" y="1" width="5" height="3" />
      <rect x="9" y="2" width="1" height="2" />
      {/* Hammer handle */}
      <rect x="9" y="4" width="2" height="2" />
      <rect x="7" y="6" width="2" height="2" />
      <rect x="5" y="8" width="2" height="2" />
      <rect x="3" y="10" width="2" height="2" />
      <rect x="1" y="12" width="2" height="3" />
    </svg>
  );
}

/**
 * Pixel Art Resume Icon (Retro 8-bit Document Page)
 */
export function PixelResumeIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      shapeRendering="crispEdges"
      className={`pixel-icon ${className}`}
      {...props}
    >
      {/* Top border with fold notch */}
      <rect x="3" y="1" width="7" height="2" />
      <rect x="10" y="2" width="1" height="1" />
      <rect x="11" y="3" width="2" height="1" />
      {/* Folded tab detail */}
      <rect x="10" y="1" width="1" height="1" opacity="0.6" />

      {/* Outer document frame */}
      <rect x="3" y="3" width="2" height="12" />
      <rect x="11" y="4" width="2" height="11" />
      <rect x="3" y="13" width="10" height="2" />

      {/* Resume header title block inside */}
      <rect x="6" y="4" width="4" height="1" />

      {/* Text lines inside */}
      <rect x="5" y="6" width="5" height="1" />
      <rect x="5" y="8" width="5" height="1" />
      <rect x="5" y="10" width="4" height="1" />
    </svg>
  );
}

/**
 * Pixel Art Contact Icon (Retro 8-bit Envelope with Seal)
 */
export function PixelContactIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      shapeRendering="crispEdges"
      className={`pixel-icon ${className}`}
      {...props}
    >
      {/* Envelope outer border */}
      <rect x="1" y="3" width="14" height="2" />
      <rect x="1" y="12" width="14" height="2" />
      <rect x="1" y="5" width="2" height="7" />
      <rect x="13" y="5" width="2" height="7" />

      {/* Envelope inner flap diagonal lines */}
      <rect x="3" y="5" width="2" height="1" />
      <rect x="11" y="5" width="2" height="1" />
      <rect x="5" y="6" width="2" height="1" />
      <rect x="9" y="6" width="2" height="1" />
      <rect x="7" y="7" width="2" height="2" />

      {/* Top heart/seal */}
      <rect x="6" y="1" width="4" height="2" />
      <rect x="7" y="1" width="2" height="1" fill="none" />
    </svg>
  );
}

/**
 * Pixel Art Sword Icon (Retro 8-bit Sword)
 */
export function PixelSwordIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="12" y="2" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      <rect x="8" y="6" width="2" height="2" />
      <rect x="6" y="8" width="2" height="2" />
      <rect x="3" y="9" width="3" height="2" />
      <rect x="8" y="10" width="2" height="3" />
      <rect x="4" y="11" width="2" height="2" />
      <rect x="2" y="13" width="2" height="2" />
    </svg>
  );
}

/**
 * Pixel Art Chat Icon (Retro 8-bit Speech Bubble)
 */
export function PixelChatIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="2" y="2" width="12" height="2" />
      <rect x="2" y="9" width="12" height="2" />
      <rect x="1" y="4" width="2" height="5" />
      <rect x="13" y="4" width="2" height="5" />
      <rect x="3" y="11" width="3" height="2" />
      <rect x="2" y="13" width="2" height="2" />
      <rect x="4" y="5" width="2" height="2" />
      <rect x="7" y="5" width="2" height="2" />
      <rect x="10" y="5" width="2" height="2" />
    </svg>
  );
}

/**
 * Pixel Art Lightning Icon (Retro 8-bit Energy / Lightning Bolt)
 */
export function PixelLightningIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="8" y="1" width="3" height="2" />
      <rect x="7" y="3" width="3" height="2" />
      <rect x="6" y="5" width="3" height="2" />
      <rect x="3" y="7" width="9" height="2" />
      <rect x="6" y="9" width="3" height="2" />
      <rect x="5" y="11" width="3" height="2" />
      <rect x="4" y="13" width="3" height="2" />
    </svg>
  );
}

/**
 * Pixel Art Brain / Robot Icon (Retro 8-bit AI Head)
 */
export function PixelBrainIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="7" y="1" width="2" height="2" />
      <rect x="7" y="3" width="2" height="1" />
      <rect x="3" y="4" width="10" height="2" />
      <rect x="2" y="6" width="2" height="7" />
      <rect x="12" y="6" width="2" height="7" />
      <rect x="3" y="13" width="10" height="2" />
      <rect x="4" y="7" width="2" height="2" />
      <rect x="10" y="7" width="2" height="2" />
      <rect x="5" y="10" width="6" height="1" />
    </svg>
  );
}

/**
 * Pixel Art Database Icon (Retro 8-bit Stacked Disks)
 */
export function PixelDatabaseIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="2" y="2" width="12" height="2" />
      <rect x="1" y="4" width="14" height="1" />
      <rect x="2" y="7" width="12" height="2" />
      <rect x="1" y="9" width="14" height="1" />
      <rect x="2" y="12" width="12" height="2" />
      <rect x="1" y="14" width="14" height="1" />
      <rect x="2" y="2" width="1" height="12" />
      <rect x="13" y="2" width="1" height="12" />
    </svg>
  );
}

/**
 * Pixel Art Cart Icon (Retro 8-bit Shopping Cart)
 */
export function PixelCartIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="1" y="2" width="3" height="2" />
      <rect x="3" y="4" width="2" height="2" />
      <rect x="4" y="6" width="11" height="2" />
      <rect x="4" y="8" width="10" height="2" />
      <rect x="5" y="10" width="8" height="2" />
      <rect x="5" y="12" width="2" height="2" />
      <rect x="10" y="12" width="2" height="2" />
    </svg>
  );
}

/**
 * Pixel Art Signal Icon (Retro 8-bit Antenna/Network)
 */
export function PixelSignalIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="7" y="5" width="2" height="8" />
      <rect x="5" y="13" width="6" height="2" />
      <rect x="7" y="3" width="2" height="2" />
      <rect x="4" y="2" width="2" height="2" />
      <rect x="10" y="2" width="2" height="2" />
      <rect x="1" y="1" width="2" height="2" />
      <rect x="13" y="1" width="2" height="2" />
    </svg>
  );
}

/**
 * Pixel Art Code Icon (Retro 8-bit Brackets)
 */
export function PixelCodeIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="4" y="4" width="1" height="2" />
      <rect x="3" y="6" width="1" height="2" />
      <rect x="2" y="8" width="1" height="2" />
      <rect x="3" y="10" width="1" height="2" />
      <rect x="4" y="12" width="1" height="2" />
      <rect x="11" y="4" width="1" height="2" />
      <rect x="12" y="6" width="1" height="2" />
      <rect x="13" y="8" width="1" height="2" />
      <rect x="12" y="10" width="1" height="2" />
      <rect x="11" y="12" width="1" height="2" />
      <rect x="9" y="4" width="1" height="3" />
      <rect x="8" y="7" width="1" height="3" />
      <rect x="7" y="10" width="1" height="3" />
    </svg>
  );
}

/**
 * Pixel Art Star Icon (Retro 8-bit Star)
 */
export function PixelStarIcon({ size = "1em", className = "", ...props }: PixelIconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={`pixel-icon ${className}`} {...props}>
      <rect x="7" y="1" width="2" height="3" />
      <rect x="6" y="4" width="4" height="2" />
      <rect x="1" y="6" width="14" height="2" />
      <rect x="3" y="8" width="10" height="2" />
      <rect x="4" y="10" width="3" height="2" />
      <rect x="9" y="10" width="3" height="2" />
      <rect x="3" y="12" width="2" height="2" />
      <rect x="11" y="12" width="2" height="2" />
    </svg>
  );
}

export interface ReusablePixelIconProps extends PixelIconProps {
  name?: PixelIconName | string;
}

/**
 * Generic PixelIcon helper component to render any pixel icon by name
 */
export function PixelIcon({ name, size = "1em", className = "", ...props }: ReusablePixelIconProps) {
  switch (name) {
    case "home":
      return <PixelHomeIcon size={size} className={className} {...props} />;
    case "about":
      return <PixelAboutIcon size={size} className={className} {...props} />;
    case "projects":
      return <PixelProjectsIcon size={size} className={className} {...props} />;
    case "skills":
      return <PixelSkillsIcon size={size} className={className} {...props} />;
    case "resume":
      return <PixelResumeIcon size={size} className={className} {...props} />;
    case "contact":
      return <PixelContactIcon size={size} className={className} {...props} />;
    case "sword":
      return <PixelSwordIcon size={size} className={className} {...props} />;
    case "chat":
      return <PixelChatIcon size={size} className={className} {...props} />;
    case "lightning":
      return <PixelLightningIcon size={size} className={className} {...props} />;
    case "brain":
      return <PixelBrainIcon size={size} className={className} {...props} />;
    case "database":
      return <PixelDatabaseIcon size={size} className={className} {...props} />;
    case "cart":
      return <PixelCartIcon size={size} className={className} {...props} />;
    case "signal":
      return <PixelSignalIcon size={size} className={className} {...props} />;
    case "code":
      return <PixelCodeIcon size={size} className={className} {...props} />;
    case "star":
      return <PixelStarIcon size={size} className={className} {...props} />;
    default:
      return <PixelProjectsIcon size={size} className={className} {...props} />;
  }
}

