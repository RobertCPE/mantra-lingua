// src/App.jsx
import React from 'react'
import './framer/styles.css'

// ---------- Small helpers ----------
function Section({ title, children }) {
  return (
    <section style={{ margin: '24px 0' }}>
      <div
        style={{
          fontFamily: 'General Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial',
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: 0.2,
          margin: '0 0 12px',
          padding: '6px 10px',
          border: '1px solid rgba(0,0,0,.06)',
          background: 'rgba(0,0,0,.03)',
          borderRadius: 8,
        }}
      >
        {title}
      </div>
      {children}
    </section>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null } }
  static getDerivedStateFromError(error) { return { hasError: true, error } }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          border: '1px solid #ffd7d7',
          background: '#fff5f5',
          color: '#a40000',
          borderRadius: 8,
          padding: 12,
          fontFamily: 'system-ui'
        }}>
          <strong>Component crashed:</strong> {String(this.state.error?.message || this.state.error)}
        </div>
      )
    }
    return this.props.children
  }
}

// ---------- Containers ----------
import OuterContainer from './framer/ui/outer-container'

// ---------- Brand & Navigation ----------
import NavigationBar from './framer/navigation-bar'
import NavigationMenus from './framer/navigation-menus'
import NavigationMenuText from './framer/navigation-menu-text'

// ---------- Headers / Promos ----------
import StaticHeaderx1 from './framer/static-headerx1'
import SlidingHeaderx3 from './framer/sliding-headerx3'

// ---------- Product blocks ----------
import Product from './framer/product'
import ProductCardHome from './framer/product-card-home'
import ProductCardIndex from './framer/product-card-index'
import ProductCardInformation from './framer/product-card-information'
import ProductCardBlog from './framer/product-card-blog'
import ProductCardUpsell from './framer/product-card-upsell'
import ProductCardUpsellSet from './framer/product-card-upsell-set'
import ProductCardAccordionStatic from './framer/product-card-accordion-static'
import ProductPageImage from './framer/product-page/product-image'

// ---------- Checkout & Orders ----------
import CheckoutTimerDeliveryEdit from './framer/check-out-product-timer-delivery-edit'
import PaymentMethodChoose from './framer/check-out/payment-method-choose-payment'
import OrderReview from './framer/order-review'
import OrderSummary from './framer/order-summary'

// ---------- Payments / Delivery / Forms ----------
import PaymentSelections from './framer/payment-selections'
import PaymentSelectionsDashboard from './framer/payment-selections-dashboard'
import PaymentMethod from './framer/payment-method'
import DeliveryOptionsEnter from './framer/delivery-options-enter'
import CompanyRegistrationInput from './framer/company-registration-input'
import EnterDetails from './framer/enter-details'
import Checkbox from './framer/checkbox'
import Toggle from './framer/toggle'
import RadioButton from './framer/radio-button'

// ---------- Application Portal ----------
import ApplicationPortalWhoCanTrade from './framer/application-portal-who-can-trade'
import ApplicationPortalAccountDepartment from './framer/application-portal-account-department'
import CreateMeFully from './framer/create-me-fully'

// ---------- Language / Selector ----------
import LanguageDropdown from './framer/language-dropdown'
import LanguagesPodsWithSelector from './framer/languages-pods-with-selector'

// ---------- Footer ----------
import FooterCTA from './framer/footer-cta'
import Footer from './framer/footer'

// ---------- Buttons ----------
import ButtonSubmit from './framer/button-submit'

// ---------- Page ----------
export default function App() {
  return (
    <div style={{ background: 'rgb(255,253,245)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 16 }}>
        <Section title="UI · Containers">
          <ErrorBoundary><OuterContainer.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Brand · Navigation">
          <ErrorBoundary><NavigationBar.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ marginTop: 12 }}>
            <ErrorBoundary><NavigationMenus.Responsive preserveParameters /></ErrorBoundary>
            <ErrorBoundary><NavigationMenuText.Responsive preserveParameters /></ErrorBoundary>
          </div>
        </Section>

        <Section title="Headers / Promos · Static x1">
          <ErrorBoundary><StaticHeaderx1.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Headers / Promos · Sliding x3">
          <ErrorBoundary><SlidingHeaderx3.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product · Base">
          <ErrorBoundary><Product.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product Cards · Home">
          <ErrorBoundary><ProductCardHome.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product Cards · Index">
          <ErrorBoundary><ProductCardIndex.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product Cards · Information">
          <ErrorBoundary><ProductCardInformation.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product Cards · Accordion (Static)">
          <ErrorBoundary><ProductCardAccordionStatic.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product Cards · Blog">
          <ErrorBoundary><ProductCardBlog.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product Cards · Upsell">
          <ErrorBoundary><ProductCardUpsell.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product Cards · Upsell Set">
          <ErrorBoundary><ProductCardUpsellSet.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Product Page · Product Image">
          <ErrorBoundary><ProductPageImage.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Checkout · Product Timer (Delivery Edit)">
          <ErrorBoundary><CheckoutTimerDeliveryEdit.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Payments · Selections">
          <ErrorBoundary><PaymentSelections.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><PaymentSelectionsDashboard.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><PaymentMethod.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><PaymentMethodChoose.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Delivery · Enter Options">
          <ErrorBoundary><DeliveryOptionsEnter.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Forms · Company / Personal">
          <ErrorBoundary><CompanyRegistrationInput.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><EnterDetails.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><Checkbox.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><Toggle.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><RadioButton.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><ButtonSubmit.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Application Portal">
          <ErrorBoundary><ApplicationPortalWhoCanTrade.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><ApplicationPortalAccountDepartment.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><CreateMeFully.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Languages / Selector">
          <ErrorBoundary><LanguageDropdown.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><LanguagesPodsWithSelector.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Orders">
          <ErrorBoundary><OrderReview.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><OrderSummary.Responsive preserveParameters /></ErrorBoundary>
        </Section>

        <Section title="Footer">
          <ErrorBoundary><FooterCTA.Responsive preserveParameters /></ErrorBoundary>
          <div style={{ height: 12 }} />
          <ErrorBoundary><Footer.Responsive preserveParameters /></ErrorBoundary>
        </Section>
      </div>
    </div>
  )
}