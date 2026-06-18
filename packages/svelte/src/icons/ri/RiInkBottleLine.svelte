<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 9L20.37 10.75C20.75 10.9 21 11.26 21 11.67V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V11.67C3 11.26 3.25 10.9 3.63 10.75L8 9H16ZM15.61 11H8.39L5 12.35V20H19V19H8V14H19V12.35L15.61 11ZM16 3C16.55 3 17 3.44 17 4V8H7V4C7 3.44 7.45 3 8 3H16ZM15 5H9V6H15V5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
