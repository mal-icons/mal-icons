<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M25 57v398h462V57H25zm30 30h306v338H55V87zm78.94 18l10.04 27.62L73 122.48v18.18l77.96 11.14 36.22 99.61 24.81-37.12L172.24 105H133.94zM278 105v18h64v-18h-64zm0 32v18h64v-18h-64zm106 39h82v48h-82v-48zm18 18v12h46v-12h-46zm-59 28.67l-115.8 22.11 7.26 16.94L343 240.99v-18.32zM384 240h82v48h-82v-48zm-174.18 9.93l-57.31 85.77 48.18-11.24 49.18 18.89-40.05-93.42zM402 258v12h46v-12h-46zm23.65 53c22.54 0 41 18.46 41 41s-18.46 41-41 41c-22.54 0-41-18.46-41-41s18.46-41 41-41zm0 18c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm-226.25 14.24l-17.78 4.15L176.2 407h36.15l5.16-56.8-18.11-6.96z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
