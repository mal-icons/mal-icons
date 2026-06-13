<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"data-name":"Rolling Suitcase"}],["path",{"d":"M16.25,7.49H15V3.56a1.5,1.5,0,0,0-1.5-1.5h-3A1.51,1.51,0,0,0,9,3.56V7.49H7.75a2.5,2.5,0,0,0-2.5,2.5v8.44a2.5,2.5,0,0,0,2.5,2.5h0.5v0.01a1,1,0,0,0,2,0v-0.01h3.5v0.01a1,1,0,0,0,2,0v-0.01h0.5a2.5,2.5,0,0,0,2.5-2.5V9.99A2.5,2.5,0,0,0,16.25,7.49ZM10,3.56a0.510.51,0,0,1,0.5-0.5h3a0.50.5,0,0,1,0.50.5V7.5H10Zm7.75,14.87a1.5,1.5,0,0,1-1.5,1.5H7.75a1.5,1.5,0,0,1-1.5-1.5V9.99a1.51,1.51,0,0,1,1.5-1.5h8.5a1.5,1.5,0,0,1,1.5,1.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
