import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-repo-clone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscRepoClone {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.35 4.15L7.5 5.29V0.5C7.5 0.22 7.72 0 8 0C8.27 0 8.5 0.22 8.5 0.5V5.29L9.64 4.15C9.74 4.05 9.87 4 10 4C10.13 4 10.25 4.05 10.35 4.15C10.55 4.34 10.55 4.66 10.35 4.86L8.35 6.86C8.16 7.05 7.84 7.05 7.65 6.86L5.65 4.86C5.45 4.66 5.45 4.34 5.65 4.15C5.84 3.95 6.16 3.95 6.35 4.15ZM12.5 12C12.78 12 13 11.78 13 11.5V3C13 1.9 12.11 1 11 1H10V2H11C11.55 2 12 2.45 12 3V11H4V3C4 2.45 4.45 2 5 2H6V1H5C3.9 1 3 1.9 3 3V13C3 14.11 3.9 15 5 15V15.5C5 15.7 5.12 15.89 5.31 15.96C5.5 16.04 5.71 16 5.85 15.85L6.5 15.21L7.15 15.85C7.24 15.95 7.37 16 7.5 16C7.56 16 7.63 15.99 7.69 15.96C7.88 15.89 8 15.7 8 15.5V15H12.5C12.78 15 13 14.78 13 14.5C13 14.22 12.78 14 12.5 14H8V13.5C8 13.22 7.78 13 7.5 13H5.5C5.22 13 5 13.22 5 13.5V14C4.45 14 4 13.55 4 13V12H12.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscRepoClone;
