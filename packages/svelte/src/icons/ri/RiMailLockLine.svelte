<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 7.24L12.07 14.34L4 7.22V19H13V21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H21C21.55 3 22 3.45 22 4V11H20V7.24ZM19.5 5H4.51L12.06 11.66L19.5 5ZM22 17H23V22H15V17H16V16C16 14.34 17.34 13 19 13C20.66 13 22 14.34 22 16V17ZM20 17V16C20 15.45 19.55 15 19 15C18.45 15 18 15.45 18 16V17H20Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
