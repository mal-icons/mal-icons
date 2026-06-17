import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-layers-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLayersFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.77 1.56a0.50.5 0 0 1 0.47 0l7.5 4a0.50.5 0 0 1 0 0.88l-7.5 4a0.50.5 0 0 1-0.47 0l-7.5-4a0.50.5 0 0 1 0-0.88z"}],["path",{"d":"m2.13 8.57-1.860.99a0.50.5 0 0 0 0 0.88l7.5 4a0.50.5 0 0 0 0.47 0l7.5-4a0.50.5 0 0 0 0-0.88l-1.86-0.99-5.17 2.76a1.5 1.5 0 0 1-1.41 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLayersFill;
