import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-heliumbrowser",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHeliumbrowser {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.31 22.3 12 24l-2.31-1.7 1.05-8.12-6.52 4.97L1.59 18l0.32-2.85L9.48 12l-7.57-3.15L1.59 6l2.63-1.15 6.52 4.97-1.05-8.12L12 0l2.31 1.7-1.05 8.12 6.52-4.97L22.41 6l-0.32 2.85L14.52 12l7.57 3.150.32 2.85-2.63 1.15-6.52-4.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHeliumbrowser;
