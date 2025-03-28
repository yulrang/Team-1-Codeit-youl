'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { addLike, removeLike } from '@/src/_apis/liked/liked-apis';
import { useGetGatheringListQuery } from '@/src/_queries/crew/gathering-list-queries';
import { ApiError } from '@/src/utils/api';
import CrewGatheringList from '@/src/app/(crew)/crew/detail/[id]/_components/crew-gathering-list';
import ConfirmModal from '@/src/components/common/modal/confirm-modal';
import GatheringSkeletonList from '@/src/components/common/skeleton/gathering-skeleton-list';

interface GatheringListSectionProps {
  id: number;
}

export default function GatheringListSection({ id }: GatheringListSectionProps) {
  const { data: gatheringList, isLoading, error, refetch } = useGetGatheringListQuery(id);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  const handleLike = async (gatheringId: number) => {
    try {
      await addLike(gatheringId);
    } catch (apiError) {
      if (apiError instanceof ApiError && apiError.status === 401) {
        toast.error('로그인이 필요합니다.');
      } else {
        toast.error('찜하기에 실패했습니다.');
      }
    }
  };

  const handleUnlike = async (gatheringId: number) => {
    try {
      await removeLike(gatheringId);
    } catch (apiError) {
      if (apiError instanceof ApiError && apiError.status === 401) {
        toast.error('로그인이 필요합니다.');
      } else {
        toast.error('찜하기 해제에 실패했습니다.');
      }
    }
  };

  const handleLoginRedirect = () => {
    const currentPath = window.location.pathname || '/';
    router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
  };

  const handleModalAction = () => {
    refetch();
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <GatheringSkeletonList num={3} />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center">
        <p>데이터를 불러오는 데 실패했습니다</p>
      </div>
    );

  if (!gatheringList || gatheringList.length === 0)
    return (
      <div className="flex items-center justify-center">
        <div className="items-center justify-center py-16 text-center">
          <p className="text-xl font-bold text-blue-500">아직 등록된 약속이 없어요</p>
          <p className="mt-4 text-gray-600">새로운 약속을 만들어보세요🙌</p>
        </div>
      </div>
    );

  return (
    <>
      <CrewGatheringList
        gatheringData={gatheringList}
        crewId={id}
        onLike={handleLike}
        onUnlike={handleUnlike}
        onShowLoginModal={() => setShowLoginModal(true)}
        onModalAction={handleModalAction}
      />
      {showLoginModal && (
        <ConfirmModal
          opened={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onConfirm={handleLoginRedirect}
        >
          로그인이 필요합니다!
        </ConfirmModal>
      )}
    </>
  );
}
