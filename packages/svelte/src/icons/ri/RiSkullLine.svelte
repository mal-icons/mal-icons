<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12V16H7C7.55 16 8 16.45 8 17V20H16V17C16 16.45 16.45 16 17 16H20V12ZM18 18V21C18 21.55 17.55 22 17 22H7C6.45 22 6 21.55 6 21V18H3C2.45 18 2 17.55 2 17V12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12V17C22 17.55 21.55 18 21 18H18ZM7.5 14C6.67 14 6 13.33 6 12.5C6 11.67 6.67 11 7.5 11C8.33 11 9 11.67 9 12.5C9 13.33 8.33 14 7.5 14ZM16.5 14C15.67 14 15 13.33 15 12.5C15 11.67 15.67 11 16.5 11C17.33 11 18 11.67 18 12.5C18 13.33 17.33 14 16.5 14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
