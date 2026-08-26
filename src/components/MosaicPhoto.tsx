import React from 'react';

interface MosaicPhotoProps {
  src: string;
  alt?: string;
  className?: string;
}

// Master grid reference: 600 x 680
const GRID_W = 600;
const GRID_H = 680;

interface TileConfig {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
}

// 13 Exact Reference Tiles
const TILES: TileConfig[] = [
  // 1. Top Center Cap / Hair Box
  { id: 1, x: 195, y: 15, w: 210, h: 145, r: 8 },

  // 2. Small Top Left Floating Accent Square
  { id: 2, x: 138, y: 105, w: 52, h: 55, r: 6 },

  // 3. Top Right Far Square
  { id: 3, x: 495, y: 105, w: 74, h: 80, r: 6 },

  // 4. Middle Top-Right Vertical Slice
  { id: 4, x: 413, y: 130, w: 75, h: 55, r: 6 },

  // 5. MAIN FACE MASTER BOX (Ears, Eyes, Nose, Mustache, Beard)
  { id: 5, x: 108, y: 165, w: 297, h: 200, r: 10 },

  // 6. Right Side Tall Background / Ear Pillar
  { id: 6, x: 413, y: 190, w: 156, h: 175, r: 8 },

  // 7. Middle Far-Left Accent Box
  { id: 7, x: 46, y: 310, w: 55, h: 55, r: 6 },

  // 8. Lower-Left Shoulder & Sleeve
  { id: 8, x: 33, y: 373, w: 130, h: 130, r: 8 },

  // 9. Shirt Center Placket Slice (Buttons & Collar)
  { id: 9, x: 170, y: 373, w: 94, h: 130, r: 6 },

  // 10. MAIN LOWER BODY & ARM MASTER BOX
  { id: 10, x: 271, y: 373, w: 207, h: 285, r: 10 },

  // 11. Watch & Wrist Lower Tile
  { id: 11, x: 127, y: 510, w: 74, h: 50, r: 6 },

  // 12. Bottom Shirt Tag/Hem Box
  { id: 12, x: 209, y: 510, w: 55, h: 50, r: 6 },

  // 13. Far Right Floating Background Tile
  { id: 13, x: 485, y: 440, w: 84, h: 130, r: 8 },
];

export const MosaicPhoto: React.FC<MosaicPhotoProps> = ({ src, alt = "Fahad Saleem", className = "" }) => {
  return (
    <div className={`relative w-full flex items-center justify-center select-none ${className}`}>
      
      {/* Master Proportional Container (600:680) */}
      <div 
        className="relative w-full max-w-[430px] transition-transform duration-500 hover:scale-[1.01]"
        style={{
          aspectRatio: `${GRID_W} / ${GRID_H}`,
        }}
      >
        {/* Render 13 Tiles with 100% Mathematically Continuous Sliced Image */}
        {TILES.map((tile) => {
          // Tile position & size in container percentages
          const leftPercent = (tile.x / GRID_W) * 100;
          const topPercent = (tile.y / GRID_H) * 100;
          const widthPercent = (tile.w / GRID_W) * 100;
          const heightPercent = (tile.h / GRID_H) * 100;

          // Scale & offset inside the tile to reconstruct the 100% seamless single image
          const imgWidthPercent = (GRID_W / tile.w) * 100;
          const imgHeightPercent = (GRID_H / tile.h) * 100;
          const imgLeftPercent = -(tile.x / tile.w) * 100;
          const imgTopPercent = -(tile.y / tile.h) * 100;

          return (
            <div
              key={tile.id}
              className="absolute overflow-hidden bg-stone-950 transition-all duration-300 hover:scale-[1.015] hover:z-30 cursor-pointer group"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                width: `${widthPercent}%`,
                height: `${heightPercent}%`,
                borderRadius: `${tile.r || 6}px`,
                boxShadow: '0 6px 18px -4px rgba(0,0,0,0.18)',
              }}
              title={alt}
            >
              {/* Inner Continuous Synchronized Image */}
              <img
                src={src}
                alt={alt}
                className="absolute max-w-none pointer-events-none select-none"
                style={{
                  width: `${imgWidthPercent}%`,
                  height: `${imgHeightPercent}%`,
                  left: `${imgLeftPercent}%`,
                  top: `${imgTopPercent}%`,
                  objectFit: 'fill',
                }}
              />
              {/* Subtle glass rim highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10 pointer-events-none"></div>
            </div>
          );
        })}

      </div>

    </div>
  );
};
