<template>
  <section id="about" class="py-20">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-wide">Background</h2>
        <h3 class="mt-2">
          My Experience and Education Overview
        </h3>
      </div>

      <ul class="relative">
        <!-- vertical line -->
        <div class="absolute left-1/2 top-0 h-full w-1 bg-gray-300/50 transform -translate-x-1/2"></div>

        <li class="mb-16 flex flex-col md:flex-row-reverse md:items-center">
          <div class="timeline-image">
            <img src="../../../assets/img/about/1.jpg"
                 class="rounded-full object-cover" />
          </div>

          <div class="timeline-panel-right">
            <div class="p-6 text-start">
              <p class="text-sm">November 2023 - Present</p>
              <h4 class="text-xl font-semibold mt-2">
                Preparing for IT Architecture Expert Certification (RNCP7)
              </h4>
              <h5 class="font-medium mb-3">
                42 Lyon Auvergne-Rhône-Alpes
              </h5>
              <p>
                Specialized in IT architecture and system design through hands-on professional training focused on projects.
              </p>
            </div>
          </div>
        </li>

        <li class="mb-16 flex flex-col md:flex-row md:items-center">
          <div class="timeline-image">
            <img src="../../../assets/img/about/2.jpg"
                 class="rounded-full object-cover" />
          </div>

          <div class="timeline-panel-left">
            <div class="p-6 text-end">
              <p class="text-sm">2020</p>
              <h4 class="text-xl font-semibold">
                Communication and Marketing Officer
              </h4>
              <h5 class="font-medium mb-3">
                Champagne Pierre Laurent (Saulchery, France)
              </h5>
              <p>
                Led communication initiatives during the pandemic, managing projects
                to enhance visibility for a family-run producer.
              </p>
            </div>
          </div>
        </li>

        <li class="mb-16 flex flex-col md:flex-row-reverse md:items-center">
          <div class="timeline-image">
            <img src="../../../assets/img/about/3.jpg"
                 class="rounded-full object-cover border-4 border-white shadow-lg" />
          </div>
        
          <div class="timeline-panel-right">
            <div class="p-6 text-start">
              <p class="text-sm">2018 - 2020</p>
              <h4 class="text-xl font-semibold">Master in Tourism</h4>
              <h5 class="font-medium mb-3">University of Lyon 2</h5>
              <p>
                Specialized in sustainable development and destination marketing strategies.
              </p>
            </div>
          </div>
        </li>
        
        <li class="mb-16 flex flex-col md:flex-row md:items-center">
          <div class="timeline-image">
            <img src="../../../assets/img/about/4.jpg"
                 class="rounded-full object-cover border-2 border-white shadow-lg" />
          </div>
        
          <div class="timeline-panel-left">
            <div class="p-6 text-end">
              <p>2014 - 2018</p>
              <h4 class="text-xl font-semibold">Communication Manager</h4>
              <h5 class="font-medium mb-3">
                AJ-France (Kyoto, Japan)
              </h5>
              <p>
                Managed communication strategies and coordinated initiatives to improve company visibility.
              </p>
            </div>
          </div>
        </li>
        
        <li class="mb-16 flex flex-col md:flex-row-reverse md:items-center">
          <div class="timeline-image">
            <img src="../../../assets/img/about/5.jpg"
                 class="rounded-full object-cover border-2 border-white shadow-lg" />
          </div>
        
          <div class="timeline-panel-right">
            <div class="p-6 text-start">
              <h4 class="text-xl font-semibold">
                International Travel Counselor & Tour Planner
              </h4>
              <h5 class="font-medium mb-3">
                HIS | Hankyu travel international | NTS (Nagoya, Japan)
              </h5>
              <p>
                Specialized in FIT and corporate business travel,
                contributing to multiple international travel industry projects.
              </p>
            </div>
          </div>
        </li>
        
        <li class="mb-16 flex flex-col md:flex-row md:items-center">
          <div class="timeline-image">
            <img src="../../../assets/img/about/6.jpg"
                 class="rounded-full object-cover border-4 border-white shadow-lg" />
          </div>
        
          <div class="timeline-panel-left">
            <div class="p-6 text-end">
              <p>1995 - 1999</p>
              <h4 class="text-xl font-semibold">Bachelor in English Linguistics</h4>
              <h5 class="font-medium mb-3">University of Nagoya</h5>
              <p>
                Focused on generative grammar and Chomsky’s language structure theories.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { timelineItems } from "../../../data/timelineData";
</script>

<style>
.timeline-image {
  position: absolute;
  z-index: 100;
  left: 50%;
  width: 128px;
  height: 128px;
  margin-left: -64px;
  text-align: center;
  border: 4px solid #e9ecef;
  border-radius: 100%;
}

.timeline-image img {
  width: 120px;
  height: 120px;
  vertical-align: middle;
}

.timeline-panel-right {
  margin-left: calc(50% + 64px);
}

.timeline-panel-left {
  margin-right: calc(50% + 64px);
}
</style>