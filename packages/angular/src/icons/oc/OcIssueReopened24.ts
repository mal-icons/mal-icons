import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-issue-reopened-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcIssueReopened24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.38 8A9.5 9.5 0 0 1 12 2.5a9.5 9.5 0 0 1 9.22 7.180.750.75 0 1 0 1.46-0.36C21.47 4.54 17.15 1 12 1a11 11 0 0 0-9.5 5.45V4.75a0.750.75 0 0 0-1.5 0V8.5a1 1 0 0 0 1 1h3.75a0.750.75 0 0 0 0-1.5H3.38Zm-0.59 6.32a0.750.75 0 0 0-1.450.36C2.53 19.46 6.85 23 12 23c4.05 0 7.59-2.19 9.5-5.45v1.7a0.750.75 0 0 0 1.5 0V15.5a1 1 0 0 0-1-1h-3.75a0.750.75 0 0 0 0 1.5h2.37A9.5 9.5 0 0 1 12 21.5c-4.45 0-8.18-3.05-9.21-7.18Z"}],["path",{"d":"M13.41 13.41a2 2 0 1 1-2.83-2.83 2 2 0 0 1 2.83 2.83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcIssueReopened24;
