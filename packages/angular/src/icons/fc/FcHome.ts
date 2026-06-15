import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcHome {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#E8EAF6","points":"42,39 6,39 6,23 24,6 42,23"}],["polygon",{"fill":"#C5CAE9","points":"39,21 34,16 34,9 39,9"}],["rect",{"fill":"#C5CAE9","x":"6","y":"39","width":"36","height":"5"}],["polygon",{"fill":"#B71C1C","points":"24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"}],["rect",{"x":"18","y":"28","fill":"#D84315","width":"12","height":"16"}],["rect",{"x":"21","y":"17","fill":"#01579B","width":"6","height":"6"}],["path",{"fill":"#FF8A65","d":"M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcHome;
