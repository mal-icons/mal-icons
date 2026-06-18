<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 5C5.45 5 5 5.45 5 6V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V6C19 5.45 18.55 5 18 5H6ZM3 6C3 4.34 4.34 3 6 3H18C19.66 3 21 4.34 21 6V18C21 19.66 19.66 21 18 21H6C4.34 21 3 19.66 3 18V6ZM16 11H13V6L8 13H11V18L16 11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
