import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-hdr-on-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHdrOnSelect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M831-97v-80h-80v-49h80v-80h49v80h80v49h-80v80h-49ZM480-482q69 0 119-50t50-119q0-69-50-119t-119-50q-69 0-119 50t-50 119q0 69 50 119t119 50Zm0 60q-95.42 0-162.21-66.79Q251-555.58 251-651t66.79-162.21Q384.58-880 480-880t162.21 66.79Q709-746.42 709-651t-66.79 162.21Q575.42-422 480-422Zm55 342v-249h194v154h-44l40 95h-53l-36-88h-53v88h-48Zm48-138h97v-63h-97v63ZM0-80v-249h48v84h94v-84h48v249h-48v-117H48v117H0Zm268 0v-249h142q22 0 35 13t13 35v153q0 22-13 35t-35 13H268Zm48-48h94v-153h-94v153Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHdrOnSelect;
