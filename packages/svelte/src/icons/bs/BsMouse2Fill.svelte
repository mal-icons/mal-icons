<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.50.03C4.960.29 3 2.52 3 5.19V5.5h4.5zm1 0V5.5H13v-0.31C13 2.52 11.040.29 8.50.03M13 6.5H3v4.31C3 13.66 5.22 16 8 16s5-2.34 5-5.19z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
