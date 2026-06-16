<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m19.78 22.61-1.63-1.63c-0.05 0-0.10.02-0.150.02h-3.8c0-2.71-2.16-3-2.7-3s-2.70.29-2.7 3H3v-5.8c2.71 0 3-2.16 3-2.7s-0.3-2.7-2.99-2.7V6c0-0.050.02-0.090.02-0.14L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zm0.22-5.44V15a2.5 2.5 0 0 0 0-5V4h-6a2.5 2.5 0 0 0-5 0H6.83L20 17.17z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
