<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 10c0.1 0 0.190.010.280.01L4.39 4.58C3.73 4.31 3 4.79 3 5.51v3.71c0 0.460.310.860.760.97L11 12l-7.24 1.81c-0.450.11-0.760.51-0.760.97v3.71c0 0.720.73 1.2 1.390.92L10 17.05V17c0-3.86 3.14-7 7-7z"}],["path",{"d":"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.29 7-1.65-1.65a0.510.51 0 0 1-0.15-0.35v-2.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5v2.29l1.5 1.5c0.20.20.20.51 0 0.71-0.190.2-0.50.2-0.7 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
