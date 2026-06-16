import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-data-usage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDataUsage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M481-80q-82 0-155-31.5T198.5-197q-54.5-54-86-127T81-479q0-158 106.5-272T452-877v102q-115 11-192 95.5T183-479q0 124 87 210.5T481-182q72 0 136-32.5T726-306l88 51q-58 83-145.5 129T481-80Zm362-229-88-49q12-31 18-61.5t6-60.5q0-116-76.5-201T512-776v-102q157 11 263 124.5T881-484q0 45-9.5 88.5T843-309Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDataUsage;
