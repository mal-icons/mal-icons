<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M9.64 13.5a0.50.5 0 0 1-0.50.5H2.5A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v6.64a0.50.5 0 0 1-1 0V2.5a0.50.5 0 0 0-0.5-0.5h-10a0.50.5 0 0 0-0.50.5v10a0.50.5 0 0 0 0.50.5h6.64a0.50.5 0 0 1 0.50.5"}],["path",{"fill-rule":"evenodd","d":"M5 5.5a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1H6.71l8.15 8.15a0.50.5 0 0 1-0.710.71L6 6.71V10.5a0.50.5 0 0 1-1 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
