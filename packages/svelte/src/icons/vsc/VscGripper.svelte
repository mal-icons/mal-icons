<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 4C7 4.55 6.55 5 6 5C5.45 5 5 4.55 5 4C5 3.45 5.45 3 6 3C6.55 3 7 3.45 7 4ZM10 3C9.45 3 9 3.45 9 4C9 4.55 9.45 5 10 5C10.55 5 11 4.55 11 4C11 3.45 10.55 3 10 3ZM6 7C5.45 7 5 7.45 5 8C5 8.55 5.45 9 6 9C6.55 9 7 8.55 7 8C7 7.45 6.55 7 6 7ZM10 7C9.45 7 9 7.45 9 8C9 8.55 9.45 9 10 9C10.55 9 11 8.55 11 8C11 7.45 10.55 7 10 7ZM6 11C5.45 11 5 11.45 5 12C5 12.55 5.45 13 6 13C6.55 13 7 12.55 7 12C7 11.45 6.55 11 6 11ZM10 11C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13C10.55 13 11 12.55 11 12C11 11.45 10.55 11 10 11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
