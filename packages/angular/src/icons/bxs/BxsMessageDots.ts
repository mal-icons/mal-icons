import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-message-dots",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsMessageDots {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.89-2 1.99v12.02C2 17.11 2.9 18 4 18h3v4l6.35-4H20c1.1 0 2-0.89 2-1.99V3.99A2 2 0 0 0 20 2zm-9 8a2 2 0 1 1-2-2c0.09 0 0.170.020.250.030.08-0.010.16-0.020.25-0.02A1.5 1.5 0 0 1 11 9.5c0 0.09-0.010.17-0.020.250.010.080.030.170.030.25zm4 2a2 2 0 0 1-2-2c0-0.090.02-0.170.03-0.25A1.59 1.59 0 0 1 13 9.5 1.5 1.5 0 0 1 14.5 8c0.09 0 0.170.010.250.030.08-0.010.16-0.020.25-0.02a2 2 0 0 1 0 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsMessageDots;
