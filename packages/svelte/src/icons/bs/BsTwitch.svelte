<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.86 0 1 2.86v10.29h3.43V16l2.86-2.86H9.57L14.71 8V0zm9.71 7.43-2.28 2.29H9l-2 2v-2H4.43V1.14h9.14z"}],["path",{"d":"M11.86 3.14h-1.14V6.57h1.14zm-3.14 0H7.57V6.57h1.14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
