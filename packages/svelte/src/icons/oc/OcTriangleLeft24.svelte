<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m8.85 11.65 5.79-5.79a0.50.5 0 0 1 0.850.35v11.59a0.50.5 0 0 1-0.850.35l-5.79-5.79a0.50.5 0 0 1 0-0.71Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
