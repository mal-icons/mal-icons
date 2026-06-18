import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-replay-5-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiReplay5Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12C22 6.48 17.52 2 12 2 8.98 2 6.28 3.34 4.45 5.45L2 3V9H8L5.86 6.87C7.33 5.11 9.54 4 12 4 16.42 4 20 7.58 20 12 20 16.42 16.42 20 12 20 7.58 20 4 16.42 4 12H2C2 17.52 6.48 22 12 22 17.52 22 22 17.52 22 12ZM14.5 10V8.5H9.5V12.75H12.63C12.97 12.75 13.25 13.03 13.25 13.38 13.25 13.72 12.97 14 12.63 14H9.5V15.5H12.63C13.8 15.5 14.75 14.55 14.75 13.38 14.75 12.2 13.8 11.25 12.63 11.25H11V10H14.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiReplay5Fill;
