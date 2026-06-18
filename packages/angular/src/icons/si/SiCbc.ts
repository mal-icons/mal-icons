import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-cbc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCbc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c-1.57 0-2.940.84-3.69 2.09l7.370C14.940.84 13.57 0 12 0zm0 2.77c-2.37 0-4.29 1.92-4.29 4.29h8.58c0-2.37-1.92-4.29-4.29-4.29zm-4.950.21c-2.25 0-4.08 1.82-4.08 4.07h4.08V2.98zm9.90v4.07l4.070c0-2.25-1.82-4.07-4.07-4.07zM7.05 7.71c-2.37 0-4.29 1.92-4.29 4.29 0 2.37 1.92 4.29 4.29 4.29V7.71zm9.9 0v8.58c2.37 0 4.29-1.92 4.29-4.29 0-2.37-1.92-4.29-4.29-4.29zm-4.960C9.63 7.71 7.71 9.63 7.71 12c0 2.37 1.92 4.29 4.29 4.29 2.37 0 4.29-1.92 4.29-4.29 0-2.37-1.92-4.29-4.29-4.29zm-9.90.6C0.84 9.06 0 10.43 0 12c0 1.570.84 2.94 2.09 3.69l0-7.37zm19.81 0 0 7.37C23.16 14.94 24 13.57 24 12c0-1.57-0.84-2.94-2.1-3.69zM7.05 16.95l-4.070c0 2.25 1.82 4.07 4.07 4.07v-4.07zm9.9 0v4.07c2.25 0 4.07-1.82 4.07-4.07l-4.070zm-9.240c0 2.37 1.92 4.29 4.29 4.29 2.37 0 4.29-1.92 4.29-4.29H7.71zm0.55 4.95C9.01 23.16 10.38 24 11.94 24c1.57 0 2.94-0.84 3.69-2.1H8.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCbc;
