import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gamejolt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGamejolt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.35 0v2.82H4.94v2.82H3.53v2.82H2.12v2.82H0.71v2.82h8.47v2.82H7.77v2.82H6.35v2.82h1.41v-1.41h1.41v-1.41h1.41v-1.41H12V16.94h1.41v-1.41h1.41v-1.41h1.41v-1.41h1.41v-1.41h1.41V9.88h1.41V8.47h1.41V7.06h-4.24V5.65h1.41V4.24h1.41V2.82h1.41V1.41h1.41V0zm0 22.59H4.94V24h1.41zM7.77 2.82h9.88v1.41h-1.41v1.41h-1.41V7.06h-1.41v1.41H12v1.41h1.41v1.41H12V9.88h-1.41v1.41H9.18V9.88H7.77v1.41H6.35V9.88H4.94V8.47h1.41V5.65h1.41zM6.35 8.47v1.41h1.41v-1.41zm2.82 1.41h1.41v-1.41H9.18zm5.65 0h1.41v1.41h-1.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGamejolt;
