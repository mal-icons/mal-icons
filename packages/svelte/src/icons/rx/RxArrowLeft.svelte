<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.85 3.15C7.05 3.34 7.05 3.66 6.85 3.85L3.71 7H12.5C12.78 7 13 7.22 13 7.5C13 7.78 12.78 8 12.5 8H3.71L6.85 11.15C7.05 11.34 7.05 11.66 6.85 11.85C6.66 12.05 6.34 12.05 6.15 11.85L2.15 7.85C1.95 7.66 1.95 7.34 2.15 7.15L6.15 3.15C6.34 2.95 6.66 2.95 6.85 3.15Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
