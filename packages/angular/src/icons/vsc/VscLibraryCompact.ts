import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-library-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscLibraryCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.75 0H1.25C0.56 0 0 0.56 0 1.25V10.75C0 11.44 0.56 11.99 1.25 11.99H1.75C2.44 11.99 3 11.44 3 10.75V1.25C3 0.56 2.44 0 1.75 0ZM2 10.75C2 10.88 1.89 11 1.75 11H1.25C1.11 11 1 10.88 1 10.75V1.25C1 1.11 1.11 1 1.25 1H1.75C1.89 1 2 1.11 2 1.25V10.75ZM5.75 0H5.25C4.56 0 4 0.56 4 1.25V10.75C4 11.44 4.56 11.99 5.25 11.99H5.75C6.44 11.99 6.99 11.44 6.99 10.75V1.25C6.99 0.56 6.44 0 5.75 0ZM6 10.75C6 10.88 5.88 11 5.75 11H5.25C5.11 11 5 10.88 5 10.75V1.25C5 1.11 5.11 1 5.25 1H5.75C5.88 1 6 1.11 6 1.25V10.75ZM11.96 10.3L10.03 3.05C9.94 2.73 9.74 2.46 9.45 2.29C9.16 2.12 8.82 2.08 8.5 2.17L8.02 2.29C7.69 2.38 7.42 2.59 7.26 2.88C7.09 3.17 7.04 3.5 7.13 3.82L9.06 11.07C9.15 11.39 9.35 11.66 9.64 11.83C9.83 11.94 10.05 12 10.27 12C10.37 12 10.48 11.99 10.59 11.96L11.07 11.83C11.4 11.74 11.67 11.54 11.83 11.25C12 10.96 12.05 10.62 11.96 10.3L11.96 10.3ZM10.97 10.75C10.95 10.78 10.9 10.84 10.81 10.86L10.33 10.99C10.24 11.02 10.18 10.99 10.14 10.97C10.11 10.95 10.05 10.9 10.03 10.82L8.1 3.57C8.07 3.48 8.1 3.41 8.12 3.38C8.14 3.35 8.19 3.29 8.27 3.26L8.75 3.13C8.78 3.13 8.8 3.13 8.82 3.13C8.88 3.13 8.92 3.15 8.94 3.16C8.98 3.18 9.04 3.22 9.06 3.31L10.99 10.56C11.01 10.65 10.98 10.71 10.97 10.75L10.97 10.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscLibraryCompact;
