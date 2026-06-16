import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-format-shapes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFormatShapes {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-40v-213h79v-454H40v-213h213v79h454v-79h213v213h-79v454h79v213H707v-79H253v79H40Zm213-139h454v-74h74v-454h-74v-74H253v74h-74v454h74v74Zm54-127 149-392h47l150 392h-51l-40-108H403l-40 108h-56Zm110-154h126l-60-166h-7l-59 166ZM100-767h93v-93h-93v93Zm667 0h93v-93h-93v93Zm0 667h93v-93h-93v93Zm-667 0h93v-93h-93v93Zm667-667Zm0 574Zm-574 0Zm0-574Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFormatShapes;
