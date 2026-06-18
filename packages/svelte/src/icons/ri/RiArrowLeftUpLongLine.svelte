<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.78 18.36L18.36 19.78L6.93 8.34V13.93H4.93L4.93 4.93L13.93 4.93L13.93 6.93L8.34 6.93L19.78 18.36Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
