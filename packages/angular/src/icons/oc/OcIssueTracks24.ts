import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-issue-tracks-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcIssueTracks24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 12a9.5 9.5 0 1 1 19 0 0.750.75 0 0 0 1.5 0c0-6.07-4.92-11-11-11S1 5.93 1 12s4.93 11 11 11a0.750.75 0 0 0 0-1.5A9.5 9.5 0 0 1 2.5 12Z"}],["path",{"d":"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2.5 2.75a0.750.75 0 0 1 0.75-0.75h7a0.750.75 0 0 1 0 1.5h-7a0.750.75 0 0 1-0.75-0.75Zm3.75 2.75a0.750.75 0 0 0 0 1.5h4a0.750.75 0 0 0 0-1.5h-4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcIssueTracks24;
