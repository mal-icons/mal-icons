<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.74 8.46L19.16 9.88L17.04 12L19.16 14.12L17.74 15.54L15.62 13.41L13.5 15.54L12.09 14.12L14.21 12L12.09 9.88L13.5 8.46L15.62 10.59L17.74 8.46Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8.59 19L2.29 12.71C1.9 12.32 1.9 11.68 2.29 11.29L8.59 5H22.59V19H8.59ZM9.41 7L4.41 12L9.41 17H20.59V7H9.41Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
