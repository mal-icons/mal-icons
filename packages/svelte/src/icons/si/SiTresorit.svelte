<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0 1.64 6v12L12 24l10.36-6V6zM3.82 7.26 12 2.52l3.57 2.07-11.76 6.75zm16.36 9.48L12 21.48 3.82 16.74V13.86l13.94-8.01 2.42 1.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
