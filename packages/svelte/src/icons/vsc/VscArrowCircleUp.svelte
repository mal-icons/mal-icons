<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.15 7.15L7.65 4.65C7.84 4.45 8.16 4.45 8.35 4.65L10.85 7.15C11.05 7.34 11.05 7.66 10.85 7.85C10.66 8.05 10.34 8.05 10.15 7.85L8.5 6.21V11C8.5 11.28 8.28 11.5 8 11.5C7.72 11.5 7.5 11.28 7.5 11V6.21L5.85 7.85C5.66 8.05 5.34 8.05 5.15 7.85C4.95 7.66 4.95 7.34 5.15 7.15ZM8 1C4.13 1 1 4.13 1 8C1 11.87 4.13 15 8 15C11.87 15 15 11.87 15 8C15 4.13 11.87 1 8 1ZM2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
