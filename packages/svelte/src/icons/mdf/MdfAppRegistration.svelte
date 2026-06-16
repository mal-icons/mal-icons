<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17a0.410.41 0 0 0-0.58 0l-0.880.88L20 12.75l0.88-0.88a0.410.41 0 0 0 0-0.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
