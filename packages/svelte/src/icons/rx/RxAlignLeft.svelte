<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0.5 1C0.22 1 0 1.22 0 1.5L0 13.5C0 13.78 0.22 14 0.5 14C0.78 14 1 13.78 1 13.5L1 9L12 9C12.55 9 13 8.55 13 8L13 7C13 6.45 12.55 6 12 6L1 6L1 1.5C1 1.22 0.78 1 0.5 1Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
