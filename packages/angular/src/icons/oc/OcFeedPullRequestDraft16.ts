import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-feed-pull-request-draft-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFeedPullRequestDraft16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm7.25 2.5c0-0.79-0.53-1.46-1.25-1.68V6.93A1.75 1.75 0 0 0 5.5 3.5 1.75 1.75 0 0 0 5 6.93v1.89a1.75 1.75 0 0 0 0.5 3.43 1.75 1.75 0 0 0 1.75-1.75Zm3.25 1.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 00 3.5Zm0-4.5a0.750.75 0 1 0 0-1.50.750.75 0 0 0 0 1.5Zm0.75-3.25a0.750.75 0 1 0-1.5 0 0.750.75 0 0 0 1.5 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFeedPullRequestDraft16;
