import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-cctv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsCctv {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.62 7.46 6.4 2.09a1.01 1.01 0 0 0-0.77-0.02 1 1 0 0 0-0.550.54l-3 7a1 1 0 0 0 0.53 1.31L9.56 13.9 8.32 17H4v-3H2v8h2v-3h4.32c0.82 0 1.55-0.49 1.86-1.26l1.22-3.05 3.42 1.47a1 1 0 0 0 1.31-0.52l3-6.86a1 1 0 0 0-0.51-1.32zm1.31 8.91-1.86-0.74 2-5 1.860.74z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsCctv;
