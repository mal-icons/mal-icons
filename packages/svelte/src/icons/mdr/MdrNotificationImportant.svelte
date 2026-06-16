<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 23c1.1 0 1.99-0.89 1.99-1.99h-3.98c0 1.10.89 1.99 1.99 1.99zm8.29-4.71L19 17v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-1.29 1.29c-0.630.63-0.19 1.710.7 1.71h15.17c0.9 0 1.34-1.080.71-1.71zM13 16h-2v-2h2v2zm0-5c0 0.55-0.45 1-1 1s-1-0.45-1-1V9c0-0.550.45-1 1-1s1 0.45 1 1v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
