<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.14 17.57a5.57 5.57 0 1 1-11.14 0 5.57 5.57 0 1 1 11.14 0zm6.43-11.14a5.57 5.57 0 1 1-11.14 0 5.57 5.57 0 1 1 11.14 0zM24 17.57a5.57 5.57 0 1 1-11.14 0 5.57 5.57 0 1 1 11.14 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
