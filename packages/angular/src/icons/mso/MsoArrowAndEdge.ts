import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-arrow-and-edge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoArrowAndEdge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-120 334-266l42-43 74 74v-225q0-24.75-17.62-42.37T390-520H100q-24.75 0-42.37-17.62T40-580v-260h60v260h290q26.82 0 49.91 11Q463-558 480-539q17-19 40.09-30T570-580h290v-260h60v260q0 24.75-17.62 42.38T860-520H570q-24.75 0-42.37 17.63T510-460v225l74-73 42 42-146 146Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoArrowAndEdge;
