<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 20v-4.59L20.41 8c0.38-0.370.59-0.880.59-1.41V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.59c0 0.530.21 1.040.59 1.42L11 15.41V22l2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
