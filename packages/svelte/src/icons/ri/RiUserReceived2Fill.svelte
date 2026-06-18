<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 14.25V22H4C4 17.58 7.58 14 12 14C12.69 14 13.36 14.09 14 14.25ZM12 13C8.69 13 6 10.32 6 7C6 3.69 8.69 1 12 1C15.32 1 18 3.69 18 7C18 10.32 15.32 13 12 13ZM20 17H23V19H20V22.5L15 18L20 13.5V17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
