import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-align-flex-end",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAlignFlexEnd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-80q-12.75 0-21.37-8.68Q80-97.35 80-110.17 80-123 88.63-131.5T110-140h740q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q880-97 871.38-88.5T850-80H110Zm350-170q-12.75 0-21.37-8.62T430-280v-510q0-12.75 8.63-21.37T460-820h40q12.75 0 21.38 8.63T530-790v510q0 12.75-8.62 21.38T500-250h-40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAlignFlexEnd;
