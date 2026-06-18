<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 11.33L0 9L12 2L24 9V17.5H22V10.17L20 11.33V18.01L19.78 18.29C17.95 20.55 15.14 22 12 22C8.86 22 6.05 20.55 4.22 18.29L4 18.01V11.33ZM6 12.5V17.29C7.47 18.95 9.61 20 12 20C14.39 20 16.53 18.95 18 17.29V12.5L12 16L6 12.5ZM3.97 9L12 13.68L20.03 9L12 4.32L3.97 9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
