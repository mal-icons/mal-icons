<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12ZM22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12ZM13.5 8C13.83 8.44 14.06 8.95 14.18 9.5H16V11H14.18C13.83 12.71 12.31 14 10.5 14H10.31L14.03 17.72L12.97 18.78L8 13.81V12.5H10.5C11.48 12.5 12.31 11.87 12.62 11H8V9.5H12.62C12.31 8.63 11.48 8 10.5 8H8V6.5H16V8H13.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
