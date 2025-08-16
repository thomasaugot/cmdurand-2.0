"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CONSENT_COOKIE_NAME = 'cookie-consent';
const CONSENT_EXPIRY_DAYS = 365;

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const savedConsent = Cookies.get(CONSENT_COOKIE_NAME);
    
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
        setShowBanner(false);
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (preferences) => {
    const consentData = {
      hasConsented: true,
      preferences,
      timestamp: Date.now(),
    };

    Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consentData), {
      expires: CONSENT_EXPIRY_DAYS,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    setConsent(consentData);
    setShowBanner(false);

    manageCookies(preferences);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    saveConsent(defaultPreferences);
  };

  const manageCookies = (preferences) => {
    if (!preferences.analytics) {
      Cookies.remove('_ga');
      Cookies.remove('_ga_*');
      Cookies.remove('_gid');
    }

    if (!preferences.marketing) {
      Cookies.remove('_fbp');
      Cookies.remove('_fbc');
    }

    if (!preferences.functional) {
      // Remove functional cookies
    }
  };

  const resetConsent = () => {
    Cookies.remove(CONSENT_COOKIE_NAME);
    setConsent(null);
    setShowBanner(true);
  };

  return {
    consent,
    showBanner,
    acceptAll,
    acceptNecessary,
    saveConsent,
    resetConsent,
    hasAnalyticsConsent: consent?.preferences.analytics || false,
    hasMarketingConsent: consent?.preferences.marketing || false,
    hasFunctionalConsent: consent?.preferences.functional || false,
  };
};