<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.22 8.71L6.91 13.04L8 6.33L9.22 8.71ZM10.37 6.56L7.69 1.35C7.47 0.92 6.83 1.02 6.76 1.5L4 18.5L5.75 19.59L10.94 22.84C11.59 23.24 12.41 23.24 13.06 22.84L20 18.5L18.14 5.96C18.08 5.56 17.59 5.39 17.3 5.67L14.57 8.31L12.44 4.33C12.25 3.97 11.75 3.97 11.56 4.33L10.37 6.56ZM13.07 9.75L8.67 14L12 7.75L13.07 9.75ZM7.23 18.16L16.59 9.14L17.83 17.5L12 21.14L7.23 18.16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
