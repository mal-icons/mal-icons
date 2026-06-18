<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.99 21C2.44 21 2 20.56 2 20.01V3.99C2 3.44 2.46 3 2.99 3H21.01C21.56 3 22 3.44 22 3.99V20.01C22 20.56 21.54 21 21.01 21H2.99ZM20 15V5H4V19L14 9L20 15ZM20 17.83L14 11.83L6.83 19H20V17.83ZM8 11C6.9 11 6 10.1 6 9C6 7.9 6.9 7 8 7C9.1 7 10 7.9 10 9C10 10.1 9.1 11 8 11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
