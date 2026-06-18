<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.73 15.58v1.04c0 1.75-1.39 3.18-3.1 3.18h-0.9L13.65 24v-4.21H5.37c-1.7 0-3.1-1.42-3.1-3.18v-1.03h19.46zM2.28 10.46h19.32v3.98H2.28v-3.98zm0-5.14h19.32v3.98H2.28V5.32zM18.58 0c1.68 0 3.02 1.42 3.02 3.18v1.03H2.28V3.18C2.28 1.42 3.67 0 5.38 0h13.2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
