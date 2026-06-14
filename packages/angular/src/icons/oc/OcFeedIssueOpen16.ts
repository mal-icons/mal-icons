import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-feed-issue-open-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFeedIssueOpen16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM9.5 8a1.5 1.5 0 1 0-30A1.5 1.5 0 0 0 9.5 8Z"}],["path",{"d":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-5.75a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 1 0 0-11.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFeedIssueOpen16;
