import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-feed-repo-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFeedRepo16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM5.5 4A1.5 1.5 0 0 0 4 5.5v5c0 0.830.5 1.5 1 1.5v-1a1 1 0 0 1 1-1h5v1h-1v1h1.5a0.50.5 0 0 0 0.5-0.5v-7a0.50.5 0 0 0-0.5-0.5Zm0.5 7.25v2.51a0.250.25 0 0 0 0.430.18l0.9-0.89a0.250.25 0 0 1 0.35 0l0.90.89A0.250.25 0 0 0 9 13.76V11H6.25a0.250.25 0 0 0-0.250.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFeedRepo16;
