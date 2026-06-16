<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 13c-1.91 0-3.63-0.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s0.1-1.370.29-2H8v2H4.43L2 13v9h3v-2h12v2h3v-9l-0.09-0.27c-0.610.17-1.250.27-1.910.27zM6.5 17c-0.83 0-1.5-0.67-1.5-1.5S5.67 14 6.5 14s1.50.67 1.5 1.5S7.33 17 6.5 17zm9 0c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z"}],["path",{"d":"M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0.5 8h-1V8h1v1zm0-2h-1V3h1v4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
