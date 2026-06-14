import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-feed-pull-request-open-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFeedPullRequestOpen16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm6.75 2.5c0-0.79-0.53-1.46-1.25-1.68V6.93A1.75 1.75 0 0 0 5 3.5a1.75 1.75 0 0 0-0.5 3.43v1.89A1.75 1.75 0 0 0 5 12.25a1.75 1.75 0 0 0 1.75-1.75Zm3.25-5h0.25a0.50.5 0 0 1 0.50.5v2.82a1.75 1.75 0 0 0 0.5 3.43 1.75 1.75 0 0 0 0.5-3.43V6a1.5 1.5 0 0 0-1.5-1.5H10V3.13a0.250.25 0 0 0-0.43-0.18L7.7 4.82a0.250.25 0 0 0 0 0.35l1.87 1.87A0.250.25 0 0 0 10 6.87Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFeedPullRequestOpen16;
