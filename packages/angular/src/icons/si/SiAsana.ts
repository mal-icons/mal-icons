import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-asana",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAsana {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.78 12.65c-2.88 0-5.22 2.34-5.22 5.22s2.34 5.22 5.22 5.22 5.22-2.34 5.22-5.22-2.34-5.22-5.22-5.22zm-13.56 0c-2.88 0-5.22 2.34-5.22 5.22s2.34 5.22 5.22 5.22 5.22-2.34 5.22-5.22-2.34-5.22-5.22-5.22zm12-6.52c0 2.88-2.34 5.22-5.22 5.22-2.88 0-5.22-2.34-5.22-5.22 0-2.88 2.34-5.22 5.22-5.22 2.88 0 5.22 2.34 5.22 5.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAsana;
