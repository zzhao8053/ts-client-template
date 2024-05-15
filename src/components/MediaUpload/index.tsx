import { PROJECT } from '@/constants';
import mediaService from '@/services/media';
import type { MediaUploadProps } from '@nebula/mobile-pro-components';
import { MediaUpload as NebulaMediaUpload } from '@nebula/mobile-pro-components';
import React, { useMemo } from 'react';
import { useModel } from 'umi';

const MediaUpload: React.FC<any> = (props) => {
  const { initialState } = useModel('@@initialState');
  const { currentSite } = initialState || {};

  const services = useMemo(() => {
    return currentSite ? mediaService(`${currentSite.id}`) : undefined;
  }, [currentSite]);

  return (
    <NebulaMediaUpload
      fileSize={currentSite?.config.media.quota as MediaUploadProps['fileSize']}
      services={services as MediaUploadProps['services']}
      enableClientUpload={PROJECT.enableClientUpload}
      returnType="url"
      {...props}
    />
  );
};

export default MediaUpload;
