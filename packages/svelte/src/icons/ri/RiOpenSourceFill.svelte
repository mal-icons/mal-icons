<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C17.52 2 22 6.48 22 12C22 16.13 19.5 19.68 15.92 21.2L13.41 14.65C14.35 14.15 15 13.15 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.15 9.65 14.15 10.6 14.65L8.08 21.2C4.51 19.68 2 16.13 2 12C2 6.48 6.48 2 12 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
