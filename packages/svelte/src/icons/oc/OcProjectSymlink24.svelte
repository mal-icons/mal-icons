<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 3.75C2 2.78 2.78 2 3.75 2h16.5c0.97 0 1.750.78 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H9.75a0.750.75 0 0 1 0-1.5h10.5a0.250.25 0 0 0 0.25-0.25V9h-17v3A0.750.75 0 0 1 2 12ZM9 7.5h11.5V3.75a0.250.25 0 0 0-0.25-0.25H9Zm-5.5 0h4v-4H3.75a0.250.25 0 0 0-0.250.25Z"}],["path",{"d":"m9.31 14.5-2.1-2.24a0.750.75 0 1 1 1.09-1.03l3.29 3.5a0.750.75 0 0 1 0 1.03l-3.29 3.5a0.750.75 0 1 1-1.09-1.03L9.31 16H6.09a2.59 2.59 0 0 0-2.59 2.59v2.66a0.750.75 0 0 1-1.5 0v-2.66a4.09 4.09 0 0 1 4.09-4.09h3.22Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
