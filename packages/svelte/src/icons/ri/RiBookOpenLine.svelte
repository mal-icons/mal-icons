<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 21V23H11V21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H9C10.19 3 11.27 3.52 12 4.35C12.73 3.52 13.81 3 15 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H13ZM20 19V5H15C13.9 5 13 5.9 13 7V19H20ZM11 19V7C11 5.9 10.1 5 9 5H4V19H11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
