import React from 'react';
import { useState,useEffect } from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

export default function PDFViewer(props) {
  // Plugins
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;

  const navPluginInstance = pageNavigationPlugin();
  const { GoToNextPage, GoToPreviousPage } = navPluginInstance;
   const [defaultZoom, setDefaultZoom] = useState(1.25); // 100%

  useEffect(() => {
    // Set smaller zoom for mobile
    if (window.innerWidth < 768) {
      setDefaultZoom(0.75); // 75% on mobile
    }
  }, []);

  return (
    <div
      style={{
        height: '90vh',
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Embedded Toolbar */}
      <div
        style={{
          padding: '8px',
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #ccc',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ZoomOutButton>
          {(props) => (
            <button onClick={props.onClick}>➖ Zoom Out</button>
          )}
        </ZoomOutButton>

        <ZoomInButton>
          {(props) => (
            <button onClick={props.onClick}>➕ Zoom In</button>
          )}
        </ZoomInButton>

        <GoToPreviousPage>
          {(props) => (
            <button onClick={props.onClick}>⬅️ Prev</button>
          )}
        </GoToPreviousPage>

        <GoToNextPage>
          {(props) => (
            <button onClick={props.onClick}>➡️ Next</button>
          )}
        </GoToNextPage>
      </div>

      {/* PDF Viewer */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={props.url}
            defaultScale={defaultZoom}
            plugins={[zoomPluginInstance, navPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
}
