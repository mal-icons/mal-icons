import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-earmark-easel-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileEarmarkEaselFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 7.5a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0.50.5v2a0.50.5 0 0 1-0.50.5h-5a0.50.5 0 0 1-0.5-0.5z"}],["path",{"d":"M9.29 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.71A1 1 0 0 0 13.71 4L10 0.29A1 1 0 0 0 9.29 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 6h2A1.5 1.5 0 0 1 12 7.5v2a1.5 1.5 0 0 1-1.5 1.5h-0.47l0.45 1.34a0.50.5 0 0 1-0.950.32L8.97 11H8.5v1a0.50.5 0 0 1-1 0v-1h-0.47l-0.55 1.66a0.50.5 0 1 1-0.95-0.32L5.97 11H5.5A1.5 1.5 0 0 1 4 9.5v-2A1.5 1.5 0 0 1 5.5 6h2a0.50.5 0 0 1 1 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileEarmarkEaselFill;
