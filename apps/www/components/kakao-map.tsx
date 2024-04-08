'use client';

import { useKakaoMap } from '@/hooks/use-kakao-map';
import { useUserLocation } from '@/hooks/use-user-location';
import { KAKAO_MAP_ID } from '@/lib/constants/kakao-map';

export function KakaoMap() {
  const {
    data: { latitude, longitude },
  } = useUserLocation();

  useKakaoMap({ latitude, longitude });

  return (
    <div
      id={KAKAO_MAP_ID}
      className="w-screen h-screen"
    />
  );
}
