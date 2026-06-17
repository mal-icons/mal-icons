<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M7.27 1.05a1 1 0 0 1 1.46 0l6.35 6.77c0.60.640.15 1.68-0.73 1.68H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.65C0.78 9.50.33 8.460.92 7.82zM14.35 8.5 8 1.73 1.65 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1zm-9.85 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm6 0h-5v1h5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
