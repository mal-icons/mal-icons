<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM8 20H5c-0.55 0-1-0.45-1-1v-3h4v4zm0-6H4v-4h4v4zm0-6H4V5c0-0.550.45-1 1-1h3v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm5 12h-3v-4h4v3c0 0.55-0.45 1-1 1zm1-6h-4v-4h4v4zm0-6h-4V4h3c0.55 0 1 0.45 1 1v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
