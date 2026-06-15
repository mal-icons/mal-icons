<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 1H2C1.45 1 1 1.45 1 2V4C1 4.55 1.45 5 2 5H4C4.55 5 5 4.55 5 4V2C5 1.45 4.55 1 4 1ZM2 4V2H4V4H2Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 6H2C1.45 6 1 6.45 1 7V9C1 9.55 1.45 10 2 10H4C4.55 10 5 9.55 5 9V7C5 6.45 4.55 6 4 6ZM2 9V7H4V9H2Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13 5H15C15.55 5 16 5.45 16 6V11C16 11.55 15.55 12 15 12H13C12.45 12 12 11.55 12 11V6C12 5.45 12.45 5 13 5ZM13 11H15V9H13V11ZM13 6V8H15V6H13Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 11H2C1.45 11 1 11.45 1 12V14C1 14.55 1.45 15 2 15H4C4.55 15 5 14.55 5 14V12C5 11.45 4.55 11 4 11ZM2 14V12H4V14H2Z"}],["path",{"d":"M8.65 6.65C8.84 6.45 9.16 6.45 9.35 6.65L9.36 6.65L10.86 8.15C11.05 8.34 11.05 8.66 10.86 8.85L9.36 10.35C9.26 10.45 9.13 10.5 9 10.5C8.87 10.5 8.74 10.45 8.65 10.35C8.45 10.16 8.45 9.84 8.65 9.65L9.29 9H6.5C6.22 9 6 8.78 6 8.5C6 8.22 6.22 8 6.5 8H9.29L8.65 7.35C8.45 7.16 8.45 6.84 8.65 6.65Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
