<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 20.33V18.14C17.7 17.24 19.01 15.7 19.62 13.85C19.09 13.95 18.55 14 18 14C13.03 14 9 9.97 9 5C9 4.95 9 4.91 9 4.86C7.04 5.9 5.6 7.78 5.15 10H3.12C3.79 5.74 7.3 2.42 11.66 2.04C11.24 2.94 11 3.94 11 5C11 8.87 14.13 12 18 12C19.48 12 20.84 11.54 21.97 10.76C21.99 11.01 22 11.25 22 11.5C22 15.51 19.51 18.94 16 20.33ZM7 20H14V22H7V20ZM4 12H10V14H4V12ZM2 16H12V18H2V16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
