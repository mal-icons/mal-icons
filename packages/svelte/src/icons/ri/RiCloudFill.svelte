<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 7C13.57 7 10.64 9.16 9.51 12.19L11.38 12.89C12.23 10.62 14.43 9 17 9C17.7 9 18.37 9.12 18.99 9.34C21.33 10.16 23 12.38 23 15C23 18.31 20.31 21 17 21H7C3.69 21 1 18.31 1 15C1 12.38 2.67 10.16 5.01 9.34C5 9.23 5 9.11 5 9C5 5.13 8.13 2 12 2C15.24 2 17.97 4.2 18.77 7.2C18.2 7.07 17.61 7 17 7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
