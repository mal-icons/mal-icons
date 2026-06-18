<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.39 8.69H24l-3.12-6.68ZM6.68 1.99H0L7.1 22.03h0.01l2.86-10.73zm14.2-0.02-7.1 20.04h-6.68L14.2 1.97"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
