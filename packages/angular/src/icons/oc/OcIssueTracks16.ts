import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-issue-tracks-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcIssueTracks16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 8a6.5 6.5 0 0 1 13 0A0.750.75 0 0 0 16 8a8 8 0 1 0-8 8 0.750.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8Z"}],["path",{"d":"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 1.75a0.750.75 0 0 1 0.75-0.75h5a0.750.75 0 0 1 0 1.5h-5a0.750.75 0 0 1-0.75-0.75Zm2.75 2.25a0.750.75 0 0 0 0 1.5h3a0.750.75 0 0 0 0-1.5h-3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcIssueTracks16;
