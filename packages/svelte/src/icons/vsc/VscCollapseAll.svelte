<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 4.27C14.6 4.62 15 5.26 15 6V11C15 13.21 13.21 15 11 15H6C5.26 15 4.62 14.6 4.27 14H11C12.65 14 14 12.65 14 11V4.27Z"}],["path",{"d":"M9.5 7C9.78 7 10 7.22 10 7.5C10 7.78 9.78 8 9.5 8H5.5C5.22 8 5 7.78 5 7.5C5 7.22 5.22 7 5.5 7H9.5Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 2C12.1 2 13 2.9 13 4V11C13 12.1 12.1 13 11 13H4C2.9 13 2 12.1 2 11V4C2 2.9 2.9 2 4 2H11ZM4 3C3.45 3 3 3.45 3 4V11C3 11.55 3.45 12 4 12H11C11.55 12 12 11.55 12 11V4C12 3.45 11.55 3 11 3H4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
