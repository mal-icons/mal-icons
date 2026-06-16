<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M269-130q-12 0-20.5-8.68-8.5-8.68-8.5-21.5 0-12.82 8.63-21.32T270-190h422q12 0 20.5 8.68 8.5 8.68 8.5 21.5 0 12.83-8.62 21.33T691-130H269Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
