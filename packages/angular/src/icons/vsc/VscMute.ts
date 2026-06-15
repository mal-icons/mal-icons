import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-mute",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscMute {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.69 2.04C8.88 2.12 9 2.3 9 2.5V13.5C9 13.7 8.88 13.88 8.69 13.96C8.51 14.04 8.29 14 8.15 13.86L5.22 10.98H3.5C2.67 10.98 2 10.31 2 9.48V6.49C2 5.66 2.67 4.99 3.5 4.99H5.22L8.15 2.14C8.29 2 8.51 1.96 8.69 2.04ZM8 3.69L5.78 5.85C5.68 5.94 5.56 5.99 5.43 5.99H3.5C3.22 5.99 3 6.22 3 6.49V9.48C3 9.76 3.22 9.98 3.5 9.98H5.43C5.56 9.98 5.68 10.03 5.78 10.13L8 12.31V3.69ZM10.15 6.15C10.34 5.95 10.66 5.95 10.85 6.15L12 7.29L13.15 6.15C13.34 5.95 13.66 5.95 13.85 6.15C14.05 6.34 14.05 6.66 13.85 6.85L12.71 8L13.85 9.15C14.05 9.34 14.05 9.66 13.85 9.85C13.66 10.05 13.34 10.05 13.15 9.85L12 8.71L10.85 9.85C10.66 10.05 10.34 10.05 10.15 9.85C9.95 9.66 9.95 9.34 10.15 9.15L11.29 8L10.15 6.85C9.95 6.66 9.95 6.34 10.15 6.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscMute;
