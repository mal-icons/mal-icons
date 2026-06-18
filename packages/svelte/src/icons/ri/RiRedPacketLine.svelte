<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.18 9.77C16.03 9.35 17.7 8.43 19 7.14V4H5V7.14C6.31 8.43 7.98 9.35 9.83 9.77C10.26 9.01 11.07 8.5 12 8.5C12.94 8.5 13.75 9.01 14.18 9.77ZM14.39 11.77C14.06 12.77 13.12 13.5 12 13.5C10.89 13.5 9.95 12.77 9.62 11.77C7.93 11.43 6.36 10.73 5 9.75V20H19V9.75C17.65 10.73 16.08 11.43 14.39 11.77ZM4 2H20C20.56 2 21 2.45 21 3V21C21 21.56 20.56 22 20 22H4C3.45 22 3 21.56 3 21V3C3 2.45 3.45 2 4 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
