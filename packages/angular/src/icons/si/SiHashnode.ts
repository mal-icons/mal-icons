import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hashnode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHashnode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.35 8.02l-6.37-6.37a5.63 5.63 0 0 0-7.96 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.96l6.37 6.37a5.63 5.63 0 0 0 7.96 0l6.37-6.37a5.63 5.63 0 0 0 0-7.96zM12 15.95a3.95 3.95 0 1 1 0-7.91 3.95 3.95 0 0 1 0 7.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHashnode;
