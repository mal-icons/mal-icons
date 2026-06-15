import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-flag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlFlag {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M680 95.33c-160 0-202.65-96-405.31-96C144-0.67 64 98.02 64 98.02v894.66c0 17.67 14.34 32 32 32s32-14.33 32-32V584.8c33.76-21.78 80.34-41.47 138.69-41.47 202.66 0 261.31 96 421.31 96s272-96 272-96v-544s-120 96-280 96zM896 510.72c-36.16 23.58-112.78 64.61-208 64.61-62.91 0-105.84-17.26-160.22-39.13-66.27-26.64-141.41-56.86-261.09-56.86-54.69 0-101.07 13.76-138.69 32.16V124.02c24.1-21.92 76.62-60.69 146.69-60.69 94.11 0 147.09 22.85 203.18 47.01 55.87 24.08 113.66 48.99 202.13 48.99 85.25 0 160.13-23.57 216-48.91V510.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlFlag;
