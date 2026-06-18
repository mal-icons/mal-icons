<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 8H20C20.55 8 21 8.45 21 9V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V9C3 8.45 3.45 8 4 8H6V7C6 3.69 8.69 1 12 1C15.31 1 18 3.69 18 7V8ZM11 15.73V18H13V15.73C13.6 15.39 14 14.74 14 14C14 12.9 13.1 12 12 12C10.9 12 10 12.9 10 14C10 14.74 10.4 15.39 11 15.73ZM16 8V7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7V8H16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
