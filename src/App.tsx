import React, { useState } from 'react';
import classes from './App.module.css';
import { SelectableListSection } from './examples/0-SelectableList/SelectableListSection';
import { FormSection } from './examples/1-Form/FormSection';

export function App() {
  const [activeKey, setActiveKey] = useState<'selectable-list' | 'form'>('selectable-list');
  return (
    <div className={classes.App}>
      {activeKey === 'selectable-list' && (
        <div>
          <SelectableListSection />
          <div className={classes.navigation}>
            <a href="#" onClick={() => setActiveKey('form')}>
              Show next example
            </a>
          </div>
        </div>
      )}
      {activeKey === 'form' && (
        <div>
          <FormSection />
          <div className={classes.navigation}>
            <a href="#" onClick={() => setActiveKey('selectable-list')}>
              Show previous example
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
