<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 7V20.99C21 21.55 20.56 22 20.01 22H3.99C3.44 22 3 21.56 3 21.01V2.99C3 2.46 3.45 2 4 2H16L21 7ZM8 8V13.6C8 14.45 8.45 15.24 9.19 15.71L12 17.5L14.81 15.71C15.55 15.24 16 14.45 16 13.6V8H8ZM10 10H14V13.6C14 13.76 13.91 13.92 13.74 14.03L12 15.13L10.26 14.03C10.09 13.92 10 13.76 10 13.6V10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
