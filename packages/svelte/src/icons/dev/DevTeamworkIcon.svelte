<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-teamwork-icon-1-a)"}],["path",{"fill":"currentColor","d":"M300 0c165.9 0 300 134.1 300 300S465.9 600 300 600A299.4 299.4 0 0 1 0 300C0 134.1 134.1 0 300 0"}],["path",{"fill":"currentColor","d":"M296 262.7c16.6 0 26.2-9 26.2-24.7a23.7 23.7 0 0 0-22.7-24.7h-40.3v-27.8a28.4 28.4 0 0 0-27.3-30.2c-15.6-1-29.7 11-30.2 27.2v196.2c0 46.3 18.6 67 60 67 15.60.5 31.2-3.5 44.9-11a22 22 0 0 0 10-19.2c0-12.6-8.5-26.3-20.1-26.3a18 18 0 0 0-5 1l-2 1c-4.1 2-9.2 3.6-13.7 3.6-7.6 0-16.1-2.5-16.1-23.2v-109z"}],["path",{"fill":"currentColor","d":"M419.5 343.9a50.6 50.6 0 0 0-50.4 50.4 50.6 50.6 0 0 0 50.4 50.4 50.6 50.6 0 0 0 50.4-50.4 50.6 50.6 0 0 0-50.4-50.4"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
