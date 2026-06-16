import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-arrow-or-edge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoArrowOrEdge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M300-120 154-266l42-43 74 74v-285H100q-24.75 0-42.37-17.62T40-580v-260h60v260h170q24.75 0 42.38 17.63T330-520v285l74-73 42 42-146 146Zm359 0L513-266l42-43 74 74v-285q0-24.75 17.63-42.37T689-580h171v-260h60v260q0 24.75-17.62 42.38T860-520H689v285l74-73 42 42-146 146Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoArrowOrEdge;
