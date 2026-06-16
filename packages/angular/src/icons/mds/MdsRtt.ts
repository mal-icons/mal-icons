import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-rtt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsRtt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m9.03 3-1.11 7.07h2.62l0.7-4.5h2.58L11.8 18.43H9.47L9.06 21h7.27l0.4-2.57h-2.35l2-12.86h2.58l-0.71 4.5h2.65L22 3H9.03zM8 5H4l-0.31 2h4L8 5zm-0.61 4h-4l-0.31 2h4l0.31-2zm0.92 8h-6L2 19h6l0.31-2zm0.62-4h-6l-0.31 2h6.01l0.3-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsRtt;
