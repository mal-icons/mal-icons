import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wagmi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWagmi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.74 13.21c0 0.760.61 1.37 1.37 1.37h2.74c0.76 0 1.37-0.61 1.37-1.37V7.73c0-0.760.61-1.37 1.37-1.37s1.370.61 1.37 1.37v5.48c0 0.760.61 1.37 1.37 1.37h2.74c0.76 0 1.37-0.61 1.37-1.37V7.73c0-0.760.61-1.37 1.37-1.37s1.370.61 1.37 1.37v8.22c0 0.76-0.61 1.37-1.37 1.37H1.37C0.61 17.32 0 16.7 0 15.95V7.73c0-0.760.61-1.37 1.37-1.37s1.370.61 1.37 1.37zm19.43 4.43c1.01 0 1.83-0.82 1.83-1.83 0-1.01-0.82-1.83-1.83-1.83-1.01 0-1.830.82-1.83 1.83 0 1.010.82 1.83 1.83 1.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWagmi;
