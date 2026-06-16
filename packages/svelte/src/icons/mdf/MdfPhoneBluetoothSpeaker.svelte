<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.71 9.5 17 7.21V11h0.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-0.710.71L16.79 6 14 8.79l0.710.71zM18 2.91l0.940.94-0.940.94V2.91zm0 4.30.940.94-0.940.94V7.21zm2 8.29c-1.25 0-2.45-0.2-3.57-0.57a1.02 1.02 0 0 0-1.020.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a0.960.96 0 0 0 0.25-1A11.36 11.36 0 0 1 8.5 4c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1 0 9.39 7.61 17 17 17 0.55 0 1-0.45 1-1v-3.5c0-0.55-0.45-1-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
