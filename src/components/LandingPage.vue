<template>
  <div class="flex overflow-hidden flex-col bg-white w-full">
    <nav-header />
    <main class="flex flex-col">
      <hero-section />
      <features-section />
      <download-section />
      <!-- <agent-signup /> -->
    </main>
    <site-footer class="" />
  </div>
</template>

<script>
import NavHeader from './NavHeader.vue';
import HeroSection from './HeroSection.vue';
import FeaturesSection from './FeaturesSection.vue';
import DownloadSection from './DownloadSection.vue';
import AgentSignup from './AgentSignup.vue';
import SiteFooter from './SiteFooter.vue';

export default {
  name: 'LandingPage',
  components: {
    NavHeader,
    HeroSection,
    FeaturesSection,
    DownloadSection,
    AgentSignup,
    SiteFooter,
  },
};
</script>
