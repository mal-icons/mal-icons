import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-hdr-off-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHdrOffSelect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m679-540-44-44q7-17 10.5-33.13Q649-633.26 649-651q0-69-50-119t-119-50q-18 0-35.5 4T413-806l-45-45q23-12 50.5-20.5T480-880q95.42 0 162.21 66.79Q709-746.42 709-651q0 30-7.5 59T679-540Zm-36 133-47-47q-23 15-54.57 23.5Q509.85-422 480-422q-95.42 0-162.21-66.79Q251-555.58 251-651q0-29 7.5-59t24.5-57l-39-39q-9-9-9-21t9-21q9-9 21-9t21 9l399 399q9 9 9 21t-9 21q-9 9-21 9t-21-9Zm-90-92L328-724q-9 18-13 37t-4 36q0 69 50 119t119 50q18.44 0 37.72-4.5Q537-491 553-499ZM856.12-97q-10.88 0-18-7.08Q831-111.17 831-122v-55h-56q-10.4 0-17.2-7.12-6.8-7.12-6.8-18 0-10.88 7.08-17.38Q765.17-226 776-226h55v-56q0-10.4 7.12-17.2 7.12-6.8 18-6.8 10.88 0 17.38 6.5T880-282v56h56q10.4 0 17.2 6.5 6.8 6.5 6.8 17.38 0 10.88-6.5 18Q947-177 936-177h-56v56q0 10.4-6.5 17.2Q867-97 856.12-97ZM559-80q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-210q0-6 4.5-10.5T550-329h130q22 0 35.5 13t13.5 35v51q0 22-12 35t-32 20l25 60q6 14-0.5 24.5T687-80q-6 0-12.5-4.5T666-94l-30-74h-53v64q0 10.4-6.8 17.2Q569.4-80 559-80Zm24-138h97v-63h-97v63ZM24-80q-10.4 0-17.2-6.8Q0-93.6 0-104v-201q0-10.4 6.8-17.2Q13.6-329 24-329q10.4 0 17.2 6.8Q48-315.4 48-305v60h94v-60q0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2v201q0 10.4-6.8 17.2Q176.4-80 166-80q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-93H48v93q0 10.4-6.8 17.2Q34.4-80 24-80Zm259 0q-6 0-10.5-4.5T268-95v-219q0-6 4.5-10.5T283-329h127q22 0 35 13t13 35v153q0 22-13 35t-35 13H283Zm33-48h94v-153h-94v153Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHdrOffSelect;
