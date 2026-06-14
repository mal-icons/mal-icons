import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-feed-trophy-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFeedTrophy16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 5h1v1.15a1 1 0 0 1-0.630.93L11 7.22V5ZM5 7.22l-0.37-0.15A1 1 0 0 1 4 6.15V5h1v2.22Z"}],["path",{"d":"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM3 5v1.15a2 2 0 0 0 1.26 1.86l0.870.35a3.01 3.01 0 0 0 2.29 2.09C7.22 11.4 6.66 12 5.5 12H5.5a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1c-1.16 0-1.72-0.59-1.92-1.56a3.01 3.01 0 0 0 2.29-2.09l0.87-0.35A2 2 0 0 0 13 6.15V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFeedTrophy16;
