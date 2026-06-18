<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 4.05C17.5 4.55 21 8.37 21 13V22H3V13C3 8.37 6.5 4.55 11 4.05V1H13V4.05ZM19 20V13C19 9.13 15.87 6 12 6C8.13 6 5 9.13 5 13V20H19ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18ZM12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10C10.34 10 9 11.34 9 13C9 14.66 10.34 16 12 16ZM12 14C11.45 14 11 13.55 11 13C11 12.45 11.45 12 12 12C12.55 12 13 12.45 13 13C13 13.55 12.55 14 12 14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
