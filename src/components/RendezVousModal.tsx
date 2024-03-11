import { FC } from 'react';
import { MyAnalyticsEvent } from '../hooks/useAnalytics';
import { SelectOptions } from '../website.config';
import { RendezVousForm } from './RendezVousForm';

export interface RendezVousModalOwnProps {
  className?: string;
  modalId: string;
  analyticsEvent?: MyAnalyticsEvent;
  subjectOptions?: SelectOptions[];
  backgroundColor?: string;
}
export const RendezVousModal: FC<RendezVousModalOwnProps> = ({
  modalId,
  analyticsEvent,
  subjectOptions,
  backgroundColor,
}) => {
  return (
    <div
      className="modal fade text-start text-light font-monserrat"
      id={modalId}
      tabIndex={-1}
      aria-labelledby="prendre-rendez-vous-label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{ backgroundColor: backgroundColor ? `${backgroundColor}` : '#1d2817' }}
        >
          <div className="modal-header">
            <h5
              id="prendre-rendez-vous-label"
              className="modal-title mb-0 fw-bolder text-center w-100"
            >
              Prendre rendez vous
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Annuler"
            ></button>
          </div>
          <div className="modal-body ">
            <RendezVousForm analyticsEvent={analyticsEvent} subjectOptions={subjectOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

RendezVousModal.displayName = 'RendezVousModal';
