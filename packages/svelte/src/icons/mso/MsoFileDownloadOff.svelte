<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m104-856 752 752-43 43-99-99H220q-24 0-42-18t-18-42v-143h60v143h434L516-358l-36 35-193-193 36-36L61-813l43-43Zm526 297 43 43-71 72-43-44 71-71ZM510-800v264l-60-60v-204h60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
