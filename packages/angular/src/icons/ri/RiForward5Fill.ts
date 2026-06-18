import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-forward-5-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiForward5Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 12C2 6.48 6.48 2 12 2 15.02 2 17.72 3.34 19.55 5.45L22 3V9H16L18.14 6.87C16.67 5.11 14.46 4 12 4 7.58 4 4 7.58 4 12 4 16.42 7.58 20 12 20 16.42 20 20 16.42 20 12H22C22 17.52 17.52 22 12 22 6.48 22 2 17.52 2 12ZM14.5 10V8.5H9.5V12.75H12.63C12.97 12.75 13.25 13.03 13.25 13.38 13.25 13.72 12.97 14 12.63 14H9.5V15.5H12.63C13.8 15.5 14.75 14.55 14.75 13.38 14.75 12.2 13.8 11.25 12.63 11.25H11V10H14.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiForward5Fill;
