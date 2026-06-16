import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-recommend",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfRecommend {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6 9.8a0.90.9 0 0 1-0.10.5l-2.1 4.9a1.34 1.34 0 0 1-1.30.8H9a2 2 0 0 1-2-2v-5a1.28 1.28 0 0 1 0.4-1L12 5l0.690.69a1.08 1.08 0 0 1 0.30.7v0.2L12.41 10H17a1 1 0 0 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfRecommend;
