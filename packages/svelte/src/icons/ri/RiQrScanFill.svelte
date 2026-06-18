<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 15V20.01C21 20.56 20.56 21 20.01 21H3.99C3.44 21 3 20.56 3 20.01V15H21ZM2 11H22V13H2V11ZM21 9H3V3.99C3 3.44 3.44 3 3.99 3H20.01C20.56 3 21 3.44 21 3.99V9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
