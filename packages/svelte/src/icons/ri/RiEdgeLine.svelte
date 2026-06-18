<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.01 14C8 14.08 8 14.17 8 14.25C8 16.63 9.75 19 13 19C15.37 19 17.53 18.35 19 17.45V20.8C17.21 21.56 15.11 22 13 22C7.5 22 5 18.53 5 14.25C5 11.02 7.04 8.25 9.94 7.09C8.54 8.66 8 10.34 8 11L18 11C18 7.59 15.45 5 12 5C7 5 4 8.99 3 11C3.29 6.24 7.01 2 12 2C17.2 2 21 6.03 21 11V14H8L8.01 14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
