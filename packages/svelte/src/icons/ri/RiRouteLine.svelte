<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 15V8.5C4 6.01 6.01 4 8.5 4C10.99 4 13 6.01 13 8.5V15.5C13 16.88 14.12 18 15.5 18C16.88 18 18 16.88 18 15.5V8.83C16.83 8.42 16 7.31 16 6C16 4.34 17.34 3 19 3C20.66 3 22 4.34 22 6C22 7.31 21.17 8.42 20 8.83V15.5C20 17.99 17.99 20 15.5 20C13.01 20 11 17.99 11 15.5V8.5C11 7.12 9.88 6 8.5 6C7.12 6 6 7.12 6 8.5V15H9L5 20L1 15H4ZM19 7C19.55 7 20 6.55 20 6C20 5.45 19.55 5 19 5C18.45 5 18 5.45 18 6C18 6.55 18.45 7 19 7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
