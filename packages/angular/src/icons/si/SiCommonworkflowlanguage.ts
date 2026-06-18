import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-commonworkflowlanguage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCommonworkflowlanguage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.91 0L8.57 5.4l0.040.040.10.1 3.59 3.4-2.24 2.25h-0.01l-1.58 1.59 3.74 3.77-3.73 3.80.130.14v0.01L12.05 24l1.61-1.64-1.98-2.03 3.74-3.79-1.61-1.64-0.010.01-2.13-2.13 3.87-3.87-0.02-0.010.02-0.02-3.64-3.52 3.64-3.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCommonworkflowlanguage;
