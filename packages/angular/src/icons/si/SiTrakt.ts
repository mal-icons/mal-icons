import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-trakt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTrakt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.08 15.11-0.73-0.73 9.58-9.58a4.5 4.5 0 0 0-0.11-0.57L13.66 14.38l1.08 1.08-0.730.73-1.81-1.81L23.42 3.14c-0.07-0.15-0.15-0.3-0.25-0.44L11.51 14.38l2.15 2.15-0.730.73-7.19-7.20.73-0.73 4.31 4.31L22.55 1.86A5.62 5.62 0 0 0 18.36 0H5.64A5.64 5.64 0 0 0 0 5.63V18.37A5.63 5.63 0 0 0 5.64 24h12.73C21.48 24 24 21.48 24 18.37V6.19l-8.91 8.92zm-4.31-2.15L6.81 8.99l0.73-0.73 3.95 3.96zm1.08-1.08-3.95-3.960.73-0.73 3.96 3.96zm9.85 5.69a4.14 4.14 0 0 1-4.14 4.14H6.44a4.14 4.14 0 0 1-4.14-4.14V6.44A4.14 4.14 0 0 1 6.44 2.3h10.39v1.04H6.44c-1.71 0-3.1 1.39-3.1 3.1V17.55c0 1.71 1.39 3.11 3.1 3.11h11.12c1.71 0 3.1-1.39 3.1-3.1v-1.75h1.04v1.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTrakt;
