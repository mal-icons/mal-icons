<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 4H2v16h20V4zM8 11H4V6h4v5zm6 0h-4V6h4v5zm6 0h-4V6h4v5zM8 18H4v-5h4v5zm6 0h-4v-5h4v5zm6 0h-4v-5h4v5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
