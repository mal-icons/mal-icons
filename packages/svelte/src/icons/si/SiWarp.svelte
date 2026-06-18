<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.04 2.72h9.25A2.71 2.71 0 0 1 24 5.44v10.53a2.71 2.71 0 0 1-2.71 2.71H8.05Zm-1.68 2.6L6.77 19.68h5.6l-0.4 1.6H2.71A2.71 2.71 0 0 1 0 18.57V8.04a2.71 2.71 0 0 1 2.71-2.71Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
