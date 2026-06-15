import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-user",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlUser {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M511.73 64c108.67 0 223.92 91.53 223.92 159.85v159.92c0 61.55-25.6 179.31-94.26 233.38a63.99 63.99 0 0 0-23.97 57.81c2.62 22.16 16.59 41.31 36.85 50.63l278.5 132.06c2.180.99 26.69 5.1 26.69 39.34l0.03 62.46L64 959.5V894.56c0-25.44 19.09-33.42 26.72-36.94l281.02-132.62c20.16-9.25 34.07-28.32 36.77-50.32 2.72-22-6.16-43.84-23.46-57.71-66.48-53.38-97.46-170.7-97.46-233.18v-159.92C287.62 157.01 404.02 64 511.73 64zm0-64c-141.31 0-288.13 117.94-288.13 223.86v159.92c0 69.87 31.89 211.25 121.39 283.09l-281.04 132.64S0 8280 863.47v96.03c0 35.34 28.64 63.97 63.95 63.97h895.55c35.34 0 63.97-28.62 63.97-63.97v-96.03c0-37.6-63.97-63.97-63.97-63.97L681.01 667.44c88.66-69.78 118.66-206.85 118.66-283.67v-159.92c0-105.92-146.64-223.85-287.94-223.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlUser;
