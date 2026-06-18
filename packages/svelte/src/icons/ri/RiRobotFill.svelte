<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 4.05C17.5 4.55 21 8.37 21 13V22H3V13C3 8.37 6.5 4.55 11 4.05V1H13V4.05ZM12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18ZM12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10C13.66 10 15 11.34 15 13C15 14.66 13.66 16 12 16ZM12 14C12.55 14 13 13.55 13 13C13 12.45 12.55 12 12 12C11.45 12 11 12.45 11 13C11 13.55 11.45 14 12 14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
