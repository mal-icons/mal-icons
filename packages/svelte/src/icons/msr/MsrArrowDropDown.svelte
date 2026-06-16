<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M459-381 332-508q-14-14-6.5-32.5T353-559h254q20 0 27.5 18.5T628-508L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
