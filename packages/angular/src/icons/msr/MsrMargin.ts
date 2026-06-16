import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-margin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMargin {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120H180Zm134-487q16.58 0 27.79-11.21Q353-629.42 353-646t-11.21-27.79Q330.58-685 314-685q-16.57 0-27.79 11.21Q275-662.57 275-646t11.21 27.79Q297.43-607 314-607Zm166 0q17 0 28.5-11.21Q520-629.42 520-646t-11.5-27.79Q497-685 480-685q-16 0-27 11.5T442-646q0 16 10.93 27.5T480-607Zm167 0q16.58 0 27.79-11.21Q686-629.42 686-646t-11.21-27.79Q663.58-685 647-685t-27.79 11.21Q608-662.57 608-646t11.21 27.79Q630.42-607 647-607Zm0 166q16.58 0 27.79-11.21Q686-463.42 686-480q0-16.57-11.21-27.79Q663.58-519 647-519t-27.79 11.21Q608-496.57 608-480q0 16.58 11.21 27.79Q630.42-441 647-441Zm-167 0q17 0 28.5-11.21Q520-463.42 520-480q0-16.57-11.5-27.79Q497-519 480-519q-16 0-27 11.5T442-480q0 16 10.93 27.5T480-441Zm-166 0q16.58 0 27.79-11.21Q353-463.42 353-480q0-16.57-11.21-27.79Q330.58-519 314-519q-16.57 0-27.79 11.21Q275-496.57 275-480q0 16.58 11.21 27.79Q297.43-441 314-441ZM180-180h600v-600H180v600Zm0 0v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMargin;
