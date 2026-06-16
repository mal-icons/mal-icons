<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M281-320 121-480l160-160 43 43-88 87h489l-87-88 42-42 160 160-160 160-42-42 87-88-489 1 87 87-42 42Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
