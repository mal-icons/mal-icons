import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-attach-email",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAttachEmail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 10V2H1v16h13v-5c0-1.66 1.34-3 3-3h4zm-10 1L3 6V4l8 5 8-5v2l-8 5z"}],["path",{"d":"M21 14v4c0 1.1-0.9 2-2 2s-2-0.9-2-2v-4.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAttachEmail;
