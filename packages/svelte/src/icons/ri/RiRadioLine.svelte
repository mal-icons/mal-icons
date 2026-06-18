<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 10V8H15V10H5V6H19V10H17ZM6 3V1H8V3H21.01C21.56 3 22 3.44 22 3.99V20.01C22 20.56 21.54 21 21.01 21H2.99C2.44 21 2 20.56 2 20.01V3.99C2 3.44 2.46 3 2.99 3H6ZM4 5V19H20V5H4ZM8 18C6.34 18 5 16.66 5 15C5 13.34 6.34 12 8 12C9.66 12 11 13.34 11 15C11 16.66 9.66 18 8 18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
