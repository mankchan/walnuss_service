import { memo } from 'react';
import type { FC } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserExperience } from './components/UserExperience';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
      <div>
    <div className="container mt-3">
      <UserExperience />
    </div>
      </div>
      );
});
