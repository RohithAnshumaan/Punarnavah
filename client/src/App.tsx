import { BrowserRouter, Route, Routes } from "react-router-dom";
import   { HomePage }  from "./pages/HomePage";
import { ArtisanSideProfilePage } from "./pages/ArtisanSideProfilePage";
import { BulkSideProfilePage } from "./pages/BulkSideProfilePage";
import { BulkWasteOverviewPage } from "./pages/BulkWasteOverviewPage";
import { BulkWastePage } from "./pages/BulkWastePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ContributionPage } from "./pages/ContributionPage";
import { InnovativeProdOverview } from "./pages/InnovativeProdOverview";
import { InnovativeProds } from "./pages/InnovativeProds";
import { OrderTrackingPage } from "./pages/OrderTrackingPage";
import { UploadBulkWastePage } from "./pages/UploadBulkWastePage";
import { UploadInnovativeProdPage } from "./pages/UploadInnovativeProdPage";
import  { UploadReqPage } from "./pages/UploadReqPage";
import { WasteReqOverviewPage } from "./pages/WasteReqOverviewPage";
import   WasteReqPage   from "./pages/WasteReqPage";


import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { Signin } from "./pages/Signin";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/artisan-side-profile" element={<ArtisanSideProfilePage />} />
          <Route path="/bulk-side-profile" element={<BulkSideProfilePage />} />
          <Route path="/bulk-waste-overview" element={<BulkWasteOverviewPage />} />
          <Route path="/bulk-waste" element={<BulkWastePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contribution" element={<ContributionPage />} />
          <Route path="/innovative-prod-overview" element={<InnovativeProdOverview />} />
          <Route path="/innovative-prods" element={<InnovativeProds />} />
          <Route path="/order-tracking" element={<OrderTrackingPage />} />
          <Route path="/upload-bulk-waste" element={<UploadBulkWastePage />} />
          <Route path="/upload-innovative-prod" element={<UploadInnovativeProdPage />} />
          <Route path="/upload-req" element={<UploadReqPage />} />
          <Route path="/waste-req-overview/:id" element={<WasteReqOverviewPage />} />
          <Route path="/waste-req" element={<WasteReqPage />} />
        </Routes>
        <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition= {Bounce}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
