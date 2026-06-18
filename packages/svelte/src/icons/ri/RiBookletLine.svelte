<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2C21.11 2 22 2.9 22 3.99V20.01C22 21.11 21.11 22 20 22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H20ZM8 4H6V20H8V4ZM20 4H10V20H20V4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
