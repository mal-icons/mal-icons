<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M220-340h150v-280H220v280Zm-60 60v-400h210q25 0 42.5 17.63T430-620v280q0 24.75-17.62 42.38T370-280H160Zm474 0L494-680h60l114 319 113-319h60L700-280h-66Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
