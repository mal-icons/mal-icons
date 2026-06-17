import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-earmark-lock2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileEarmarkLock2Fill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 7a1 1 0 0 1 2 0v1H7z"}],["path",{"d":"M9.29 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.71A1 1 0 0 0 13.71 4L10 0.29A1 1 0 0 0 9.29 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M10 7v1.08c0.540.17 1 0.6 1 1.22v2.4c0 0.82-0.78 1.3-1.5 1.3h-3c-0.72 0-1.5-0.48-1.5-1.3V9.3c0-0.630.46-1.06 1-1.22V7a2 2 0 1 1 4 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileEarmarkLock2Fill;
