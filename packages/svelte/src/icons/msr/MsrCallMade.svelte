<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M181.13-182.39Q173-191 172.5-203q-0.5-12 8.5-21l476-476H394q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T394-760h336q12.75 0 21.38 8.63T760-730v336q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T700-394v-264L223-181q-8.44 8-20.72 8t-21.15-9.39Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
