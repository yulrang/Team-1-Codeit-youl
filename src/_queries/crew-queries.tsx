import { getCrewData } from '@/src/app/api/mock-api/crew';
import { CrewCardInform } from '@/src/types/crew-card';

// Crew data 변환 로직을 간소화한 helper 함수
const mapCrewData = (crew: CrewCardInform) => ({
  crewId: crew.crewId,
  type: crew.type,
  subType: crew.subType,
  name: crew.name,
  location: crew.location,
  detailedLocation: crew.detailedLocation,
  participantCount: crew.participantCount,
  capacity: crew.capacity,
  images: crew.images,
  createdBy: crew.createdBy,
  createdDate: crew.createdDate,
  updatedDate: crew.updatedDate,
  isConfirmed: crew.isConfirmed,
  gatheringCount: crew.gatheringCount,
  crewMember: crew.crewMember,
});

export function useGetCrewQuery() {
  interface QueryParams {
    pageParam?: number;
  }

  interface Page {
    hasNextPage: boolean;
  }

  return {
    queryKey: ['crew'],
    queryFn: ({ pageParam = 0 }: QueryParams) => getCrewData(pageParam, 3),
    getNextPageParam: (lastPage: Page, allPages: Page[]) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
    select: (data: CrewCardInform[]) => data.map(mapCrewData),
  };
}