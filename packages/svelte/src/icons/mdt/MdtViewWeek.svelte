<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z","opacity":".3"}],["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
