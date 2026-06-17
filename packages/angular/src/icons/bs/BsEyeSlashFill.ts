import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-eye-slash-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEyeSlashFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.79 12.91-1.61-1.61a3.5 3.5 0 0 1-4.47-4.47l-2.06-2.06C0.94 6.28 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-0.59M5.21 3.09A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-0.94 1.72-2.64 3.24l-2.06-2.06a3.5 3.5 0 0 0-4.47-4.47z"}],["path",{"d":"M5.53 7.65a2.5 2.5 0 0 0 2.83 2.83zm4.950.71-2.83-2.83a2.5 2.5 0 0 1 2.83 2.83zm3.17 6-12-12 0.71-0.71 12 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEyeSlashFill;
