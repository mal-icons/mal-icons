import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-shape-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrShapeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1 1 3.24 1 6s2.24 5 5 5zm15 3h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2z"}],["path",{"d":"M17.71 7.7c0.40.190.830.3 1.290.3 1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 0.460.110.890.3 1.29L6.29 16.3c-0.4-0.19-0.83-0.3-1.29-0.3-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-0.46-0.11-0.89-0.3-1.29L17.71 7.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrShapeLine;
