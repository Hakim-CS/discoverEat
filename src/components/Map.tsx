import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxTokenInput } from './MapboxTokenInput';

interface MapProps {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  markers?: Array<{
    longitude: number;
    latitude: number;
    title: string;
    description?: string;
  }>;
  className?: string;
}

export const Map: React.FC<MapProps> = ({
  longitude = -74.006,
  latitude = 40.7128,
  zoom = 13,
  markers = [],
  className = "w-full h-64"
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing token in localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers
    markers.forEach(marker => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div>
          <h3 style="font-weight: bold; margin-bottom: 4px;">${marker.title}</h3>
          ${marker.description ? `<p style="margin: 0; font-size: 14px;">${marker.description}</p>` : ''}
        </div>`
      );

      new mapboxgl.Marker({ color: 'hsl(var(--primary))' })
        .setLngLat([marker.longitude, marker.latitude])
        .setPopup(popup)
        .addTo(map.current!);
    });

    // If only one marker, show popup by default
    if (markers.length === 1) {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div>
          <h3 style="font-weight: bold; margin-bottom: 4px;">${markers[0].title}</h3>
          ${markers[0].description ? `<p style="margin: 0; font-size: 14px;">${markers[0].description}</p>` : ''}
        </div>`
      );

      new mapboxgl.Marker({ color: 'hsl(var(--primary))' })
        .setLngLat([markers[0].longitude, markers[0].latitude])
        .setPopup(popup)
        .addTo(map.current!)
        .togglePopup();
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [longitude, latitude, zoom, markers, mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className={className}>
        <MapboxTokenInput onTokenSet={setMapboxToken} />
      </div>
    );
  }

  return (
    <div className={`${className} rounded-lg overflow-hidden border`}>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};