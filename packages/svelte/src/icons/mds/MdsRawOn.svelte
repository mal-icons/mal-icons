<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.5 9H3v6h1.5v-2h1.1l0.9 2H8l-0.9-2.1c0.5-0.30.9-0.80.9-1.4v-1C8 9.7 7.3 9 6.5 9zm0 2.5h-2v-1h2v1zM10.25 9l-1.5 6h1.5l0.38-1.5h1.75l0.37 1.5h1.5l-1.5-6h-2.5zm0.75 3 0.25-1h0.5l0.25 1h-1zm8.98-3-0.74 3-0.74-3h-1.52l-0.74 3-0.74-3H14l1.5 6h1.48l0.76-3.040.76 3.04h1.48l1.5-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
