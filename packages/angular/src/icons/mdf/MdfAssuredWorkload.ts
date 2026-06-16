import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-assured-workload",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfAssuredWorkload {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 10h2v7H5zm6 0h2v7h-2zm11-4L12 1 2 6v2h20zM2 19v2h12.4c-0.21-0.64-0.32-1.31-0.36-2H2zm17-6.74V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-0.57 4-2.93 4-5.45V16l-4-2zm-0.72 7-2.03-2.03 1.06-1.060.970.97 2.41-2.38 1.06 1.06L19.28 21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfAssuredWorkload;
