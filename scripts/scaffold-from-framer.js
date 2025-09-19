// src/App.jsx
import React from "react";
import "./framer/styles.css";

/* =========================
   Error isolation & section UI
   ========================= */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidUpdate(prevProps) {
    // Reset if key changes (lets us isolate per section)
    if (prevProps.resetKey !== this.props.resetKey) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ hasError: false, error: null });
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            border: "1px solid #ffd7d7",
            background: "#fff5f5",
            color: "#9b1c1c",
            borderRadius: 10,
            padding: 12,
            fontFamily:
              "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          }}
        >
          <strong>Component crashed:</strong>{" "}
          {String(this.state.error?.message || this.state.error)}
        </div>
      );
    }
    return this.props.children;
  }
}

function Section({ title, children }) {
  return (
    <section style={{ margin: "28px 0 20px" }}>
      <div
        style={{
          display: "inline-block",
          fontFamily:
            "General Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial",
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: 0.2,
          padding: "8px 12px",
          border: "1px solid rgba(0,0,0,.08)",
          background: "rgba(0,0,0,.04)",
          borderRadius: 10,
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <ErrorBoundary resetKey={title}>{children}</ErrorBoundary>
    </section>
  );
}

/* =========================
   Imports: wrapper components (src/components/*)
   ========================= */
// UI / Containers
import OuterContainer from "./components/OuterContainer";
import InnerContainer from "./components/InnerContainer";

// Brand & Navigation
import MlLogo from "./components/MlLogo";
import NavigationBar from "./components/NavigationBar";
import NavigationMenus from "./components/NavigationMenus";
import NavigationMenuText from "./components/NavigationMenuText";

// Headers / Promos
import StaticHeader from "./components/StaticHeader";

// Product blocks
import Product from "./components/Product";
import ProductCardHome from "./components/ProductCardHome";
import ProductCardIndex from "./components/ProductCardIndex";
import ProductCardInformation from "./components/ProductCardInformation";
import ProductCardBlog from "./components/ProductCardBlog";
import ProductCardUpsell from "./components/ProductCardUpsell";
import ProductCardUpsellSet from "./components/ProductCardUpsellSet";
import ProductPageImage from "./components/ProductPageImage";

// Footer
import FooterCTA from "./components/FooterCTA";
import Footer from "./components/Footer";

// Buttons / Links
import ButtonPlain from "./components/ButtonPlain";
import ButtonRounded from "./components/ButtonRounded";
import ButtonLoadMore from "./components/ButtonLoadMore";
import ButtonCartoon from "./components/ButtonCartoon";
import ButtonSubmit from "./components/ButtonSubmit";
import InlineLinkClick from "./components/InlineLinkClick";
import InlineLinkIconClick from "./components/InlineLinkIconClick";

// Forms / Misc
import RadioButton from "./components/RadioButton";
import Checkbox from "./components/Checkbox";
import LanguageDropdown from "./components/LanguageDropdown";

// Checkout / Payments
import CheckoutTimerDeliveryEdit from "./components/CheckoutTimerDeliveryEdit";
import PaymentMethodChoose from "./components/PaymentMethodChoose";
import PaymentSelections from "./components/PaymentSelections";
import PaymentSelectionsDashboard from "./components/PaymentSelectionsDashboard";
import PaymentMethod from "./components/PaymentMethod";
import OrderReview from "./components/OrderReview";
import OrderSummary from "./components/OrderSummary";

// Account / Flows
import CommunicationPreferences from "./components/CommunicationPreferences";
import CompanyRegistrationInput from "./components/CompanyRegistrationInput";
import EnterDetails from "./components/EnterDetails";
import DeliveryOptionsEnter from "./components/DeliveryOptionsEnter";

/* =========================
   Page
   ========================= */
export default function App() {
  return (
    <div style={{ background: "rgb(255,253,245)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
        {/* UI / Containers */}
        <Section title="UI / Containers">
          <OuterContainer.Responsive />
          <InnerContainer.Responsive />
        </Section>

        {/* Brand & Navigation */}
        <Section title="Brand & Navigation">
          <MlLogo.Responsive />
          <NavigationBar.Responsive preserveParameters />
          <NavigationMenus.Responsive preserveParameters />
          <NavigationMenuText.Responsive preserveParameters />
        </Section>

        {/* Headers / Promos */}
        <Section title="Headers / Promos">
          <StaticHeader.Responsive preserveParameters />
        </Section>

        {/* Product Blocks */}
        <Section title="Product Blocks">
          <Product.Responsive preserveParameters />
          <ProductCardHome.Responsive preserveParameters />
          <ProductCardIndex.Responsive preserveParameters />
          <ProductCardInformation.Responsive preserveParameters />
          <ProductCardBlog.Responsive preserveParameters />
          <ProductCardUpsell.Responsive preserveParameters />
          <ProductCardUpsellSet.Responsive preserveParameters />
          <ProductPageImage.Responsive preserveParameters />
        </Section>

        {/* Buttons & Links */}
        <Section title="Buttons & Links">
          <div
            style={{
              display: "grid",
              gap: 12,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <ButtonPlain.Responsive />
            <ButtonRounded.Responsive />
            <ButtonLoadMore.Responsive />
            <ButtonCartoon.Responsive />
            <ButtonSubmit.Responsive />
            <InlineLinkClick.Responsive />
            <InlineLinkIconClick.Responsive />
            <RadioButton.Responsive />
            <Checkbox.Responsive />
            <LanguageDropdown.Responsive />
          </div>
        </Section>

        {/* Checkout / Payments */}
        <Section title="Checkout / Payments">
          <CheckoutTimerDeliveryEdit.Responsive preserveParameters />
          <PaymentMethodChoose.Responsive preserveParameters />
          <PaymentSelections.Responsive preserveParameters />
          <PaymentSelectionsDashboard.Responsive preserveParameters />
          <PaymentMethod.Responsive preserveParameters />
          <OrderReview.Responsive preserveParameters />
          <OrderSummary.Responsive preserveParameters />
        </Section>

        {/* Account / Flows */}
        <Section title="Account / Flows">
          <CommunicationPreferences.Responsive preserveParameters />
          <CompanyRegistrationInput.Responsive preserveParameters />
          <EnterDetails.Responsive preserveParameters />
          <DeliveryOptionsEnter.Responsive preserveParameters />
        </Section>

        {/* Footer */}
        <Section title="Footer">
          <FooterCTA.Responsive preserveParameters />
          <Footer.Responsive preserveParameters />
        </Section>
      </div>
    </div>
  );
}