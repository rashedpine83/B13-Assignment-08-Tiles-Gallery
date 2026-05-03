import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-2xs text-muted">Loandig</span>
      </div>
    );
};

export default loading;