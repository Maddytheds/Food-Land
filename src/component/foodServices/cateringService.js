import CateringForm from './cateringForm';
import './cateringService.css';
export default function CateringService() {
  return (
    <div>
      <div className="cateringHeading">
        <img src="/foodServices/catering.png" alt="" />
        <h1>Catering Service</h1>
      </div>
      <div>
        <CateringForm />
      </div>
    </div>
  );
}
