<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-480v-400h800v400H80Zm90 279v-60q50 0 85-34.71 35-34.71 35-84.29h60q0 75-52.65 127T170-201Zm620 0q-75 0-127-52t-52-127h60q0 50 34.71 84.5Q740.42-261 790-261v60Zm-340 41v-220h60v220h-60Zm260-380h110-680 570Zm-460 0v-170h460v170h-60v-110H310v110h-60Zm-110 0h680v-280H140v280Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
