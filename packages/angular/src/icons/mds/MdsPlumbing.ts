import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-plumbing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPlumbing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16.16 5.64 3.54 3.54a3 3 0 0 0 0-4.24L16.16 1.4l-4.24 4.24 2.12 2.12 2.12-2.12zM4.84 12.71l3.54-3.53 2.12 2.12-3.54 3.54z"}],["path",{"d":"m15.45 7.76-1.41 1.41-4.25-4.24-2.12 2.12 4.24 4.24-8.49 8.49 2.83 2.83L16.86 12l0.710.71 1.41-1.41-3.53-3.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPlumbing;
