<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 6H22V8H20V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V8H2V6H7V3C7 2.45 7.45 2 8 2H16C16.55 2 17 2.45 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
