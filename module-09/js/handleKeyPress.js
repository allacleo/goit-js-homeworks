import { handleCloseBtn } from './task';
export function handleKeyPress(e) {
  if (e.code === 'Escape') {
    return;
  }
  handleCloseBtn();
}
