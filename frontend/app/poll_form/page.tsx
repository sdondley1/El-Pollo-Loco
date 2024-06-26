import CreatePoll from '@/components/discover/pollForm';
import PrimarySearchAppBar from '@/components/navigation';
import React from 'react';
import Box from '@mui/material/Box';

export default function Form() {
  return (
    <main>
      <div>
        <PrimarySearchAppBar />
        <br />
        <div
          style={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <CreatePoll />
        </div>
      </div>
    </main>
  );
}
