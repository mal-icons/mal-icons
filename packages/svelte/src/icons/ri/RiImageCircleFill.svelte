<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.58 14.58L15.71 10.71C15.32 10.32 14.68 10.32 14.29 10.71L6.87 18.13C5.11 16.67 4 14.46 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 12.9 19.85 13.77 19.58 14.58ZM12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM11 10C11 11.1 10.1 12 9 12C7.9 12 7 11.1 7 10C7 8.9 7.9 8 9 8C10.1 8 11 8.9 11 10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
