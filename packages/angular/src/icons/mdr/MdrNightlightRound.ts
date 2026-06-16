import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-nightlight-round",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNightlightRound {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.5 22h0.21c0.84-0.02 1.12-1.110.41-1.56a9.99 9.99 0 0 1-4.63-8.43c0-3.55 1.85-6.66 4.63-8.440.7-0.450.44-1.54-0.39-1.56h-0.13c-4.9-0.05-9.21 3.53-9.98 8.37C4.64 16.61 9.45 22 15.5 22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNightlightRound;
