<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 1C8.69 1 6 3.69 6 7V8H4C3.45 8 3 8.45 3 9V21C3 21.55 3.45 22 4 22H13.04C12.69 21.24 12.5 20.39 12.5 19.5C12.5 16.19 15.19 13.5 18.5 13.5C19.39 13.5 20.24 13.69 21 14.04V9C21 8.45 20.55 8 20 8H18V7C18 3.69 15.31 1 12 1ZM16 8H8V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V8ZM21.15 23.14L20.64 20.2L22.78 18.11L19.82 17.68L18.5 15L17.18 17.68L14.22 18.11L16.36 20.2L15.86 23.14L18.5 21.75L21.15 23.14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
