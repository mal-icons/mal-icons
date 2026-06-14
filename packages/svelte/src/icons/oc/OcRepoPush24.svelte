<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.75 0A2.75 2.75 0 0 0 3 2.75v16.5A2.75 2.75 0 0 0 5.75 22h10a0.750.75 0 0 0 0-1.5h-10c-0.69 0-1.25-0.56-1.25-1.25V18A1.5 1.5 0 0 1 6 16.5h6.25a0.750.75 0 0 0 0-1.5H6c-0.55 0-1.060.15-1.50.4V2.75c0-0.690.56-1.25 1.25-1.25H19.5v7a0.750.75 0 0 0 1.5 0V0.75a0.750.75 0 0 0-0.75-0.75H5.75Z"}],["path",{"d":"m20 13.9 2.2 2.36a0.750.75 0 0 0 1.1-1.02l-3.5-3.75a0.750.75 0 0 0-1.1 0l-3.5 3.75a0.750.75 0 1 0 1.1 1.02l2.2-2.36v9.35a0.750.75 0 0 0 1.5 0v-9.35Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
