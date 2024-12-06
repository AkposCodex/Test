<template>
  <div class="flex overflow-hidden flex-col bg-white w-screen">
    <nav-header />
    <main class="flex gap-2 flex-col">
      <hero-section class="p-4" />
      <features-section class="p-4" />
      <download-section class="p-4" />
      <agent-signup class="p-4" />
    </main>
    <site-footer class="p-4" />
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
