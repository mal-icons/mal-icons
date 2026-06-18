<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 13H5V20H19V13ZM19 11C19 7.13 15.87 4 12 4C8.13 4 5 7.13 5 11H19ZM6.38 3.97C7.92 2.74 9.87 2 12 2C14.13 2 16.08 2.74 17.62 3.97L19.07 2.51L20.49 3.93L19.03 5.38C20.26 6.92 21 8.87 21 11V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V11C3 8.87 3.74 6.92 4.97 5.38L3.51 3.93L4.93 2.51L6.38 3.97ZM9 9C8.45 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM15 9C14.45 9 14 8.55 14 8C14 7.45 14.45 7 15 7C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
