import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-text-size",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscTextSize {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.97 2.33C10.9 2.13 10.71 2 10.5 2C10.29 2 10.1 2.13 10.03 2.33L6.47 12.12L6.13 11.32C6.13 11.31 6.13 11.3 6.12 11.3L4.46 7.31C4.38 7.12 4.2 7 4 7C3.8 7 3.62 7.12 3.54 7.31L1.88 11.3C1.87 11.3 1.87 11.31 1.87 11.32L1.04 13.31C0.93 13.56 1.05 13.86 1.31 13.96C1.56 14.07 1.86 13.95 1.96 13.69L2.67 12H5.33L6.04 13.69C6.04 13.69 6.04 13.7 6.04 13.7C6.07 13.76 6.11 13.82 6.15 13.86C6.2 13.91 6.26 13.94 6.32 13.97C6.33 13.97 6.35 13.98 6.36 13.98C6.46 14.01 6.57 14.01 6.66 13.97C6.68 13.97 6.69 13.96 6.7 13.96C6.76 13.93 6.82 13.89 6.86 13.85C6.91 13.8 6.94 13.74 6.97 13.68C6.97 13.68 6.97 13.67 6.97 13.67L8.3 10H12.7L14.03 13.67C14.12 13.93 14.41 14.06 14.67 13.97C14.93 13.88 15.06 13.59 14.97 13.33L10.97 2.33ZM10.5 3.96L12.33 9H8.67L10.5 3.96ZM4 8.8L4.92 11H3.08L4 8.8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscTextSize;
