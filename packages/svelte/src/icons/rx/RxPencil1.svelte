<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.85 1.15C11.66 0.95 11.34 0.95 11.15 1.15L3.71 8.58C3.62 8.67 3.55 8.77 3.5 8.89L2.04 12.3C1.96 12.49 2 12.71 2.15 12.85C2.29 13 2.51 13.04 2.7 12.96L6.11 11.5C6.23 11.45 6.33 11.38 6.42 11.29L13.85 3.85C14.05 3.66 14.05 3.34 13.85 3.15L11.85 1.15ZM4.42 9.29L11.5 2.21L12.79 3.5L5.71 10.58L4.22 11.22L3.78 10.78L4.42 9.29Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
