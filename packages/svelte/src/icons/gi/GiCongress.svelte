<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M247 32v47.73a56.48 56.48 0 0 1 18 0V32h-18zM256 97c-11.5 0-23 5-23 15v10.1c7.37-2 15.05-3.1 23-3.1 7.95 0 15.63 1.1 23 3.1V112c0-10-11.5-15-23-15zm0 40c-28.25 0-53.98 17.94-72.87 42.49-16.34 21.25-26.93 47.28-29.5 67.52h204.73c-2.56-20.24-13.15-46.27-29.5-67.52-18.89-24.55-44.62-42.49-72.87-42.49zm-80 78h32v18h-32v-18zm64 0h32v18h-32v-18zm64 0h32v18h-32v-18zm-170.29 50l-7.53 16h259.64l-7.53-16H133.71zm1.29 34v28h18v-28h-18zm56 0v28h18v-28h-18zm56 0v28h18v-28h-18zm56 0v28h18v-28h-18zm56 0v28h18v-28h-18zm-270 46v16h334v-16H89zm14 34v60h18v-60h-18zm48 0v60h18v-60h-18zm48 0v60h18v-60h-18zm48 0v60h18v-60h-18zm48 0v60h18v-60h-18zm48 0v60h18v-60h-18zm48 0v60h18v-60h-18zm-350 78v30h430v-30H41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
