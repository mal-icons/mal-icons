<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4C7.03 4 3 8.03 3 13ZM19 13C19 16.87 15.87 20 12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13ZM5.28 2.75L1.75 6.28L3.16 7.7L6.7 4.16L5.28 2.75ZM22.25 6.28L18.72 2.75L17.3 4.16L20.84 7.7L22.25 6.28ZM11 9V12H8V14H11V17H13V14H16V12H13V9H11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
