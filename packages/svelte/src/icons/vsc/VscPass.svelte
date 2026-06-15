<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.65 5.65C10.84 5.45 11.16 5.45 11.36 5.65C11.55 5.84 11.55 6.16 11.36 6.35L7.36 10.35C7.26 10.45 7.13 10.5 7 10.5C6.87 10.5 6.75 10.45 6.65 10.35L4.65 8.35C4.45 8.16 4.45 7.84 4.65 7.65C4.84 7.45 5.16 7.45 5.35 7.65L7 9.29L10.65 5.65H10.65Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 1C11.86 1 15 4.14 15 8C15 11.86 11.86 15 8 15C4.14 15 1 11.86 1 8C1 4.14 4.14 1 8 1ZM8 2C4.69 2 2 4.69 2 8C2 11.31 4.69 14 8 14C11.31 14 14 11.31 14 8C14 4.69 11.31 2 8 2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
