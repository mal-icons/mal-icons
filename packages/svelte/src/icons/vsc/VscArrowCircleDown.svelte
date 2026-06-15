<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.15 8.85L7.65 11.35C7.84 11.55 8.16 11.55 8.35 11.35L10.85 8.85C11.05 8.66 11.05 8.34 10.85 8.15C10.66 7.95 10.34 7.95 10.15 8.15L8.5 9.79V5C8.5 4.72 8.28 4.5 8 4.5C7.72 4.5 7.5 4.72 7.5 5V9.79L5.85 8.15C5.66 7.95 5.34 7.95 5.15 8.15C4.95 8.34 4.95 8.66 5.15 8.85ZM8 15C4.13 15 1 11.87 1 8C1 4.13 4.13 1 8 1C11.87 1 15 4.13 15 8C15 11.87 11.87 15 8 15ZM2 8C2 11.31 4.69 14 8 14C11.31 14 14 11.31 14 8C14 4.69 11.31 2 8 2C4.69 2 2 4.69 2 8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
