<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 12C10.1 12 11 11.1 11 10 11 8.9 10.1 8 9 8 7.9 8 7 8.9 7 10 7 11.1 7.9 12 9 12ZM21.5 6.5 12 1 2.5 6.5V17.5L12 23 21.5 17.5V6.5ZM12 3.31 19.5 7.65V14.53L14.94 11.8 6.97 17.77 4.5 16.35V7.65L12 3.31ZM12 20.69 8.85 18.86 15.06 14.2 19.06 16.6 12 20.69Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
