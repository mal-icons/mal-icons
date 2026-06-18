<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.38 2.02C9.92 3.39 9 5.34 9 7.5C9 11.64 12.36 15 16.5 15C18.66 15 20.61 14.08 21.98 12.62C21.66 17.85 17.31 22 12 22C6.48 22 2 17.52 2 12C2 6.69 6.15 2.34 11.38 2.02Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
