import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-feed-issue-reopen-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFeedIssueReopen16 {
  readonly viewBox = "0 0 17 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.5 8a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm3.43-4.32a0.250.25 0 0 0-0.430.18V6c0 0.140.110.250.250.25h2.15a0.250.25 0 0 0 0.18-0.43l-0.52-0.52a4 4 0 0 1 6.86 1.860.750.75 0 0 0 1.47-0.31 5.5 5.5 0 0 0-9.39-2.6Zm9.57 8.47V10a0.250.25 0 0 0-0.25-0.25h-2.15a0.250.25 0 0 0-0.180.43l0.520.52a4 4 0 0 1-6.86-1.860.750.75 0 0 0-1.470.31 5.5 5.5 0 0 0 9.39 2.61l0.560.56a0.250.25 0 0 0 0.43-0.18ZM10 8a1.5 1.5 0 1 0-30A1.5 1.5 0 0 0 10 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFeedIssueReopen16;
