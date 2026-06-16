import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-elevator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssElevator {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M280-230h120v-170h40v-190H240v190h40v170Zm60-394q23 0 39.5-16.5T396-680q0-23-16.5-39.5T340-736q-23 0-39.5 16.5T284-680q0 23 16.5 39.5T340-624Zm175 94h200L615-690 515-530Zm100 260 100-160H515l100 160ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssElevator;
