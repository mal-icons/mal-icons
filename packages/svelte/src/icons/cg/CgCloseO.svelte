<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.34 9.32C16.74 8.95 16.77 8.31 16.39 7.91C16.01 7.51 15.38 7.48 14.98 7.86L12.05 10.59L9.32 7.66C8.95 7.26 8.31 7.23 7.91 7.61C7.51 7.99 7.48 8.62 7.86 9.02L10.59 11.95L7.66 14.68C7.26 15.05 7.23 15.69 7.61 16.09C7.99 16.49 8.62 16.52 9.02 16.14L11.95 13.41L14.68 16.34C15.05 16.74 15.69 16.77 16.09 16.39C16.49 16.01 16.52 15.38 16.14 14.98L13.41 12.05L16.34 9.32Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 12C1 5.92 5.92 1 12 1C18.08 1 23 5.92 23 12C23 18.08 18.08 23 12 23C5.92 23 1 18.08 1 12ZM12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
