<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 11.09v-4.7l6-2.25 6 2.25v3.69c0.710.1 1.380.31 2 0.6V5l-8-3-8 3v6.09c0 5.05 3.41 9.76 8 10.910.03-0.010.05-0.020.08-0.02-0.79-0.78-1.4-1.76-1.75-2.84C7.76 17.53 6 14.42 6 11.09z"}],["path",{"d":"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20v1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
