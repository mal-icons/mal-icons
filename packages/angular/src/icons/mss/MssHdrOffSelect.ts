import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-hdr-off-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHdrOffSelect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m679-540-44-44q7-17 10.5-33.13Q649-633.26 649-651q0-69-50-119t-119-50q-18 0-35.5 4T413-806l-45-45q23-12 50.5-20.5T480-880q95.42 0 162.21 66.79Q709-746.42 709-651q0 30-7.5 59T679-540Zm-15 154-68-68q-23 15-54.57 23.5Q509.85-422 480-422q-95.42 0-162.21-66.79Q251-555.58 251-651q0-29 7.5-59t24.5-57l-60-60 42-42 441 441-42 42ZM553-499 328-724q-9 18-13 37t-4 36q0 69 50 119t119 50q18.44 0 37.72-4.5Q537-491 553-499ZM831-97v-80h-80v-49h80v-80h49v80h80v49h-80v80h-49ZM535-80v-249h194v154h-44l40 95h-53l-36-88h-53v88h-48Zm48-138h97v-63h-97v63ZM0-80v-249h48v84h94v-84h48v249h-48v-117H48v117H0Zm268 0v-249h142q22 0 35 13t13 35v153q0 22-13 35t-35 13H268Zm48-48h94v-153h-94v153Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHdrOffSelect;
