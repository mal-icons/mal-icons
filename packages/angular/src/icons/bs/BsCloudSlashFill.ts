import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cloud-slash-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudSlashFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.11 5.11a3 3 0 0 0-0.170.61C1.27 6.1 0 7.56 0 9.32 0 11.37 1.71 13 3.78 13H11zm11.37 7.37L4.94 2.94A5.5 5.5 0 0 1 8 2c2.69 0 4.92 2 5.17 4.58C14.76 6.8 16 8.14 16 9.77a3.2 3.2 0 0 1-1.52 2.71m-0.84 1.87-12-12 0.71-0.71 12 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudSlashFill;
